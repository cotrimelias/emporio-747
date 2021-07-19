import * as React from "react"
import fetch from "isomorphic-fetch"
import Client from "shopify-buy"

const client = Client.buildClient(
  {
    domain: "emporio-747.myshopify.com",
    storefrontAccessToken: "578c7382b0863fbfb7b976a974adcad6",
  },
  fetch
)

const defaultValues = {
  cart: [],
  isOpen: false,
  loading: false,
  onOpen: () => {},
  onClose: () => {},
  addVariantToCart: () => {},
  addVariantToWishlist: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
  removeWishItem: () => {},
  updateWishItem: () => {},
  client,
  checkout: {
    lineItems: [],
  },
  wishlist: {
    lineItems: [],
  },
}

export const StoreContext = React.createContext(defaultValues)

const isBrowser = typeof window !== `undefined`
const localStorageKey = `shopify_checkout_id`
const localWishlistKey = `shopify_checkout_id`

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = React.useState(defaultValues.checkout)
  const [wishlist, setWishlist] = React.useState(defaultValues.wishlist)
  const [loading, setLoading] = React.useState(false)
  const [didJustAddToWishlist, setDidJustAddToWishlist] = React.useState(false)
  const [didJustAddToCart, setDidJustAddToCart] = React.useState(false)

  const setWishlistItem = (wishlist) => {
    if (isBrowser) {
      localStorage.setItem(localWishlistKey, wishlist.id)
    }

    setWishlist(wishlist)
  }
  const setCheckoutItem = (checkout) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id)
    }

    setCheckout(checkout)
  }

  React.useEffect(() => {
    const initializeWishlist = async () => {
      const existingWishlistID = isBrowser
        ? localStorage.getItem(localWishlistKey)
        : null

      if (existingWishlistID && existingWishlistID !== `null`) {
        try {
          const existingWishlist = await client.wishlist.fetch(
            existingWishlistID
          )
          if (!existingWishlist.completedAt) {
            setWishlistItem(existingWishlist)
            return
          }
        } catch (e) {
          localStorage.setItem(localWishlistKey, null)
        }
      }
      const newWishlist = await client.checkout.create()
      setWishlistItem(newWishlist)
    }
    initializeWishlist()
  }, [])
  const addVariantToWishlist = (variantId) => {
    setLoading(true)
    const wishlistID = wishlist.id
    const lineItemsToUpdate = [
      {
        variantId,
      },
    ]
    return client.wishlist
      .addLineItems(wishlistID, lineItemsToUpdate)
      .then((res) => {
        setWishlist(res)
        setLoading(false)
        setDidJustAddToWishlist(true)
        setTimeout(() => setDidJustAddToWishlist(false), 3000)
      })
  }

  const removeWishItem = (wishlistID, lineItemID) => {
    setLoading(true)

    return client.wishlist
      .removeWishItems(wishlistID, [lineItemID])
      .then((res) => {
        setWishlist(res)
        setLoading(false)
      })
  }

  const updateWishItem = (wishlistID, lineItemID) => {
    setLoading(true)

    const lineItemsToUpdate = [{ id: lineItemID }]

    return client.wishlist
      .updateWishItems(wishlistID, lineItemsToUpdate)
      .then((res) => {
        setWishlist(res)
        setLoading(false)
      })
  }
  React.useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser
        ? localStorage.getItem(localStorageKey)
        : null

      if (existingCheckoutID && existingCheckoutID !== `null`) {
        try {
          const existingCheckout = await client.checkout.fetch(
            existingCheckoutID
          )
          if (!existingCheckout.completedAt) {
            setCheckoutItem(existingCheckout)
            return
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, null)
        }
      }

      const newCheckout = await client.checkout.create()
      setCheckoutItem(newCheckout)
    }

    initializeCheckout()
  }, [])

  const addVariantToCart = (variantId, quantity) => {
    setLoading(true)

    const checkoutID = checkout.id

    const lineItemsToUpdate = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ]

    return client.checkout
      .addLineItems(checkoutID, lineItemsToUpdate)
      .then((res) => {
        setCheckout(res)
        setLoading(false)
        setDidJustAddToCart(true)
        setTimeout(() => setDidJustAddToCart(false), 3000)
      })
  }

  const removeLineItem = (checkoutID, lineItemID) => {
    setLoading(true)

    return client.checkout
      .removeLineItems(checkoutID, [lineItemID])
      .then((res) => {
        setCheckout(res)
        setLoading(false)
      })
  }

  const updateLineItem = (checkoutID, lineItemID, quantity) => {
    setLoading(true)

    const lineItemsToUpdate = [
      { id: lineItemID, quantity: parseInt(quantity, 10) },
    ]

    return client.checkout
      .updateLineItems(checkoutID, lineItemsToUpdate)
      .then((res) => {
        setCheckout(res)
        setLoading(false)
      })
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addVariantToCart,
        addVariantToWishlist,
        removeLineItem,
        updateLineItem,
        removeWishItem,
        updateWishItem,
        checkout,
        wishlist,
        loading,
        didJustAddToCart,
        didJustAddToWishlist,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
