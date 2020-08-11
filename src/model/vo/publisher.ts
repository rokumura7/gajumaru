type Publisher = string & {
  readonly _PublisherBrand: unique symbol
}
const of = (val: any): Publisher => {
  if (typeof val !== 'string') throw new Error(`Cannot cast ${typeof val} to Publisher : ${val}`)
  return val as Publisher
}

export { Publisher, of }