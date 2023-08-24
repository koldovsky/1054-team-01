class Product {
  constructor(
    name,
    type,
    code,
    price,
    currency,
    inStock,
    mainImageSrc,
    description
  ) {
    this.name = name
    this.type = type
    this.code = code
    this.price = price
    this.currency = currency
    this.inStock = inStock
    this.images = [mainImageSrc]
    this.description = description
  }
}

const cabernet = new Product(
  'Cabernet',
  'red',
  18,
  17,
  'USD',
  true,
  'img/best-deals-cabernet.jpeg',
  "If you don't want which red wine to buy, think of this Cabernet. It has a very deep dark purple color and opens with boysenberry, bourbon, and vanilla aromas. Then you'll feel brown sugar, cocoa, spices, and currants. It's a wine with a really rich taste."
)

const pinotGrigio = new Product(
  'Pinot Grigio',
  'white',
  23,
  10,
  'USD',
  true,
  'img/best-deals-pinotgrigio.jpeg',
  'Bright golden color. Gentle aromas and flavors of peach cobbler, honeydew, and apple with a silky, fruity-yet-dry medium body, and lemon and nut in the finish.'
)

const pinotNoir = new Product(
  'PinotNoir',
  'red',
  20,
  12,
  'USD',
  true,
  'img/best-deals-pinotnoir.jpeg',
  'It is one of the lightest red wines. Pinot Noir is easy to drink, it won\'t punch you in the face like some reds can and is perfect for romantic evenings and meetings with friends. Our Pinot Noir has a "light body" and feels silky to the tongue. You might taste bright berries like raspberry and cranberry.'
)

const riesling = new Product(
  'Riesling',
  'white',
  24,
  16,
  'USD',
  true,
  'img/best-deals-riesling.jpeg',
  'Dazzling silver-gold in color, with intense mineral aromas of shale, gravel, and limestone, combined with notes of white flower, green apple, peach, and lemon oil. You can smell the flavors of fresh apricot, lime, and grapefruit pith.'
)

const sauvignonBlanc = new Product(
  'Sauvignon Blanc',
  'white',
  22,
  12,
  'USD',
  true,
  'img/best-deals-sauvignonblanc.jpeg',
  'Light yet unique in character, this Sauvignon Blanc by CaliWines is filled with aromas of apple, grapefruit, gooseberry, and guava. This wine is light bodied with a fresh finish and a light yellow color.'
)

const soave = new Product(
  'Soave',
  'white',
  25,
  12,
  'USD',
  true,
  'img/best-deals-soave.jpeg',
  'Our Californian tribute to Italian wine varieties.<br>Light straw color. Delicate and gentle aroma of sweet field flowers: camomile, elder, and iris. Minced palate with almond aftertaste. Pairs with steamed fish, fresh cheese, and mussels.'
)

const syrah = new Product(
  'Syrah',
  'red',
  19,
  13,
  'USD',
  true,
  'img/best-deals-syrah.jpeg',
  'This intense wine has aromas of violets, red fruit, cherry, blackberry, and vanilla. It also features rich flavors of blackberry, black cherry, plum, and vanilla with silky tannins and a rich finish.'
)

const zifandel = new Product(
  'Zifandel',
  'red',
  21,
  14,
  'USD',
  true,
  'img/best-deals-zifandel.jpeg',
  'This wine is produced from more ripened berries than usual. Core flavors are rich, with jammy blackberries and mocha. You can pair this wine with braised ribs, chicken enchiladas, or dark chocolate.'
)

const products = [
  cabernet,
  pinotGrigio,
  pinotNoir,
  riesling,
  sauvignonBlanc,
  soave,
  syrah,
  zifandel,
]

export { products }
