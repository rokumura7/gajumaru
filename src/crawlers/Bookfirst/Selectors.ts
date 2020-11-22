export default {
  RANK_LIST: '#content > div.entry',
  DETAIL_LINK: '#content > div.entry:nth-child(_INDEX) span.entry_img',
  TITLE: '.itemTitle',
  AUTHOR: '.AuthorsName > li > a',
  PRICE:
    '#main > div.mainItemContents > div > div.rightCol > div > table > tbody > tr:nth-child(4) > td',
  PUBLISHER:
    '#main > div.mainItemContents > div > div.rightCol > div > table > tbody > tr:nth-child(1) > td',
  ISBN:
    '#main > div.mainItemContents > div > div.rightCol > div > table > tbody > tr:nth-child(3) > td > span:nth-child(1)',
} as const;
