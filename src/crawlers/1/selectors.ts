export default {
  RANK_LIST: ".rank_list",
  TITLE: ".rank_list:nth-child(_INDEX) .list_title > span",
  AUTHOR: ".rank_list:nth-child(_INDEX) .author_name",
  PRICE: ".rank_list:nth-child(_INDEX) .price",
  PUBLISHER: ".rank_list:nth-child(_INDEX) .publisher",
  ISBN: ".rank_list:nth-child(_INDEX) .isbn",
} as const;
