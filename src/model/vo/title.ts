type Title = string & {
  readonly _TitleBrand: unique symbol
}

const of = (val: any): Title => {
  if (typeof val !== 'string') throw new Error(`Cannot cast ${typeof val} to Title : ${val}`)
  return val as Title
}

export { Title, of }