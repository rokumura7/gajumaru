export default {
  RANK_LIST: '.rankingList',
  DETAIL_LINK: '.rankingList:nth-child(_INDEX) h3 > a',
  TITLE: '#main_contents > form > div > div.right_box > h3',
  AUTHOR:
    '#main_contents > form > div > div.right_box > div.infobox.ml10.mt10 > ul > li:nth-child(1) > a',
  PRICE:
    '#main_contents > form > div > div.right_box > div.infobox.ml10.mt10 > ul > li:nth-child(3) > span > span',
  PUBLISHER:
    '#main_contents > form > div > div.right_box > div.infobox.ml10.mt10 > ul > li:nth-child(4) > a',
  ISBN:
    '#main_contents > form > div > div.right_box > div.infbox.dotted.ml10.mt05.pt05 > ul > li:nth-child(2)',
  STOPPED:
    '#main_contents > form > div > div.right_box > div.delibox.dotted.ml10.mt05.pt05 > ul > li',
} as const;
