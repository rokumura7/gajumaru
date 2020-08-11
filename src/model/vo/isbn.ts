type ISBN = string & {
  readonly _AuthorBrand: unique symbol
}
const of = (val: any): ISBN => {
  if (typeof val !== 'string') throw new Error(`Cannot cast ${typeof val} to ISBN : ${val}`)
  return val as ISBN
}

export { ISBN, of }