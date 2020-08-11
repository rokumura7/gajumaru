type Price = number & {
  readonly _PriceBrand: unique symbol
}
const of = (val: any): Price => {
  // TODO: fetch only numbers from val
  return val as Price
}

export { Price, of }