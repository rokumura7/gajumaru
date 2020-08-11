type Author = string & {
  readonly _AuthorBrand: unique symbol
}
const of = (val: any): Author => {
  if (typeof val !== 'string') throw new Error(`Cannot cast ${typeof val} to Author : ${val}`)
  return val as Author
}

export { Author, of }