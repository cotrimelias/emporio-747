import * as React from "react"
import { CheckFilter } from "./check-filter"
import { CurrencyField } from "./currency-field"
import {
  priceFilterStyle,
  clearButton,
  priceFields,
  summary,
} from "./filters.module.css"

export function Filters({
  currencyCode,
  productTypes,
  tags,
  vendors,
  filters,
  setFilters,
}) {
  const updateFilter = (key, value) => {
    setFilters((filters) => ({ ...filters, [key]: value }))
  }

  const updateNumeric = (key, value) => {
    if (
      !isNaN(Number(value)) ||
      (value.endsWith(".") && !isNaN(Number(value.substring(0, -1))))
    ) {
      updateFilter(key, value)
    }
  }

  return (
    <>
      <CheckFilter
        name="Tipo"
        items={productTypes}
        selectedItems={filters.productTypes}
        setSelectedItems={(value) => updateFilter("productTypes", value)}
      />
      <hr />
      <details className={priceFilterStyle} open={true}>
        <summary>
          <div className={summary}>
            Preço
            {(filters.maxPrice || filters.minPrice) && (
              <button
                className={clearButton}
                onClick={() =>
                  setFilters((filters) => ({
                    ...filters,
                    maxPrice: "",
                    minPrice: "",
                  }))
                }
              >
                Reiniciar
              </button>
            )}
          </div>
        </summary>
        <div className={priceFields}>
          <CurrencyField
            {...currencyCode}
            aria-label="Preço mínimo"
            value={filters.minPrice}
            onChange={(event) =>
              updateNumeric("minPrice", event.currentTarget.value)
            }
          />{" "}
          –{" "}
          <CurrencyField
            {...currencyCode}
            aria-label="Preço máximo"
            value={filters.maxPrice}
            onChange={(event) =>
              updateNumeric("maxPrice", event.currentTarget.value)
            }
          />
        </div>
      </details>
      <hr />
      <CheckFilter
        name="Marcas"
        items={vendors}
        selectedItems={filters.vendors}
        setSelectedItems={(value) => updateFilter("vendors", value)}
      />
      <hr />
      <CheckFilter
        open={true}
        name="Tags"
        items={tags}
        selectedItems={filters.tags}
        setSelectedItems={(value) => updateFilter("tags", value)}
      />
    </>
  )
}
