export type Title = string & {
  readonly _TitleBrand: unique symbol
}

export type Publisher = string & {
  readonly _PublisherBrand: unique symbol
}

export type Price = number & {
  readonly _PriceBrand: unique symbol
}

export type ISBN = string & {
  readonly _AuthorBrand: unique symbol
}

export type Author = string & {
  readonly _AuthorBrand: unique symbol
}
