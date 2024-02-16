import chair from '../assets/img/chair-1.jpg';
import sofa from '../assets/img/sofa-1.jpg';
import table1 from '../assets/img/table-1.jpg';
import table2 from '../assets/img/table-2.jpg';
import italianChair from '../assets/img/italian-chair.jpg';
import italianPlantStand from '../assets/img/italian-plant-stand.jpg';
import napoleonChair from '../assets/img/napoleon-chair.jpg';
import frenchOakCounter from '../assets/img/french-oak-counter.jpg';
import confitPot from '../assets/img/cream-confit-pot.jpg';
import englishMirror from '../assets/img/english-mirror.jpg';
import mannequinHand from '../assets/img/mannequin-hand.jpg';
import canadianCoffePot from '../assets/img/canadian-coffe-pot.jpg';
import belgianBowl from '../assets/img/ceramic-belgian-bowls.jpg';
import sarcophagus from '../assets/img/sarcophagus.jpg';
import coupesGlasses from '../assets/img/coupe-glasses.jpg';
import printPillow from '../assets/img/black-print-pillow.jpg';
import amberLumbarPillow from '../assets/img/amber-floral-lumbar-pillow.jpg';
import checkeredBoneLamps from '../assets/img/checkered-bone-lamps.jpg';
import bronzeBankersLamp from '../assets/img/bronze-bankers-lamp.jpg';
import manWalkingArt from '../assets/img/man-walking-oil-on-canvas.jpg';
import villagersCharcoalSketch from '../assets/img/villagers-charcoal-sketch.jpg';
import ladyReading from '../assets/img/reading-danish-painting.jpg';

export const products = [
  {
    id: 'the-bromley-sofa',
    image: sofa,
    alt: 'sofá branco',
    title: 'The Bromley Sofa',
    price: 8750,
    toOrder: true,
    vintage: 'New Vintage',
    type: 'Furniture',
    description:
      "Our custom product centerpiece, the Bromley Sofa is an amalgamation of eras and styles. Its angular arms are designed for lounging. Inspired by Italian mid-century design and draped in English-style slipcovers, it's both streamlined and stately.",
    dimensions: [
      'Overall Length: 72"',
      'Depth: 37.5"',
      'Height: 30"',
      'Arm Height: 25.5"',
      'Seat Height: 19"',
    ],
  },
  {
    id: 'pavillion-chair',
    image: chair,
    alt: 'cadeira marrom',
    title: 'Pavillion Chair',
    price: 6000,
    toOrder: true,
    vintage: 'New Vintage',
    type: 'Furniture',
    description:
      'A pillar of our New Vintage, these high backed wing chairs are the perfect European- inspired addition to any airy and sophisticated space. Hand-pulled upholstery gives the interior back its sculpted nature and lumbar support.',
    dimensions: [
      'Width: 26.5 in',
      'Depth: 25.5 in',
      'Height: 42 in',
      'Seat Height: 15 in',
      'Pitch: 7 in',
    ],
  },
  {
    id: 'english-brass-mirror',
    image: englishMirror,
    alt: 'Espelho inglês',
    title: 'English Brass Mirror',
    price: 895,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Decor',
    description:
      '19th Century English vanity mirror with anthropomorphic brass foot and top handle. Mirror in excellent condition with no chips or scarring. Brass rim patinated with age.',
    dimensions: ['Width: 15.5 in', 'Depth: 07 in', 'Height: 25.375 in'],
  },
  {
    id: 'napoleon-chair',
    image: napoleonChair,
    alt: 'cadeira simples estilo vintage',
    title: 'Napoleon Chair',
    price: 3700,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Furniture',
    description:
      "Originating from the era of Napoleon III, this attention demanding armchair has ornate legs on casters. It's been reupholstered in 100% cotton velvet and internals reworked for comfort. Wear consistent with age.",
    dimensions: [
      'Width: 32.5 in',
      'Depth: 28 in',
      'Height: 34 in',
      'Seat Height: 15.5 in',
      'Arm Height: 22 in',
    ],
  },
  {
    id: 'ghent-side-table',
    image: table1,
    alt: 'mesa quadrada marrom',
    title: 'Ghent Side Table',
    price: 3650,
    toOrder: true,
    vintage: 'New Vintage',
    type: 'Furniture',
    description:
      'Sleek and sophisticated, our petite Ghent side table in solid white oak is a modular masterpiece. Stacked with storage, featuring soft-close inset drawers and push latch hardware, this minimal side table is fit for use as a bedside chest or end table.',
    dimensions: ['Width: 22 in', 'Depth: 20 in', 'Height: 22 in'],
  },
  {
    id: 'nbl-coffee-table',
    image: table2,
    alt: 'mesa retangular marrom baixa',
    title: 'NBL Coffee Table',
    price: 4600,
    toOrder: true,
    vintage: 'New Vintage',
    type: 'Furniture',
    description:
      'Custom turned legs crafted in oak and stained in a medium brown hue, this coffee table is an elevated, one of a kind design.',
    dimensions: ['Overall Width: 36"', 'Overall Length: 55"', 'Height: 15"'],
  },
  {
    id: 'italian-club-chairs',
    image: italianChair,
    alt: 'par de cadeiras italianas',
    title: 'Italian Club Chairs - Pair',
    price: 12000,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Furniture',
    description:
      "Designed in the style of Gio Ponti, these Italian club chairs are newly draped in a floral and velvet fabrics. They feature a wooden, tapered leg. Circa the 1940's. Floral back fabric is original and meticulously reupholstered to the vintage piece. Wear is consistent with age and use.",
    dimensions: [
      'Width: 29.93 in',
      'Depth: 29.53 in',
      'Height: 30.32 in',
      'Seat Height: 14.57 in',
      'Arm Height: 23.25 in',
    ],
  },
  {
    id: 'italian-plant-stand',
    image: italianPlantStand,
    alt: 'Estande italiano',
    title: 'Italian Plant Stand',
    price: 1950,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Furniture',
    description:
      'Italian plant stand with anthropomorphic feet, octagonal stained wood top, and intricately carved apron sides. This dramatic pedestal is a resting place for florals and sculpture alike.',
    dimensions: ['Width: 23.25 in', 'Depth: 15.25 in', 'Height: 48 in'],
  },
  {
    id: 'french-oak-counter',
    image: frenchOakCounter,
    alt: 'Balcão de carvalho francês',
    title: 'French Oak Counter',
    price: 9200,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Furniture',
    description:
      'Ornate oak counter originating from France. Original hardware and fine, carved details. Decide which side to showcase depending on your mood. Wear consistent with age.',
    dimensions: ['Width: 97 in', 'Depth: 24.65 in', 'Height: 35 in'],
  },
  {
    id: 'confit-pots',
    image: confitPot,
    alt: 'Pote simples de decoração',
    title: 'Confit Pots',
    price: 179,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Decor',
    description:
      'French confit pots, a staple in the kitchen, serves both as a utilitarian storage vessel and a decorative vase. These glazed pots vary in size, shape, and coloration based on wear and past use. Well preserved, these vessels are a beautiful backdrop to any living, dining, or kitchen space.',
    dimensions: [
      'Variable',
      'Care: Avoid using for long term water vessel storage. Not intended for kitchen use.',
    ],
  },
  {
    id: 'articulated-mannequin-hand',
    image: mannequinHand,
    alt: 'Mão de mannequin articulada',
    title: 'Articulated Mannequin Hand',
    price: 475,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Decor',
    description:
      'Articulated mannequin hand, once a tool for sketching and drafting, sits proudly patinaed on metal pedestal. Missing the middle finger. Wear consistent with age.',
    dimensions: ['Width: 5.5 in', 'Depth: 4 in', 'Height: 13 in'],
  },
  {
    id: 'canadian-railway-coffeepot',
    image: canadianCoffePot,
    alt: 'Cafeteira canadense',
    title: 'Canadian Railway Coffeepot',
    price: 260,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Dining & Entertaining',
    description:
      'Sterling silver coffeepot stamped, "Marlboro Plate by Morton-Parker Canada Railway." Used for silver coffee service on the Canadian railway.',
    dimensions: ['Width: 9 in', 'Depth: 4.25 in', 'Height: 7.5 in'],
  },
  {
    id: 'belgian-serving-bowl',
    image: belgianBowl,
    alt: 'Tigelas brancas',
    title: 'Belgian Serving Bowl',
    price: 189,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Dining & Entertaining',
    description:
      'White glazed ceramic vintage Belgian serveware by Royal Boch. Large serving bowl. Excellent condition.',
    dimensions: ['Width: 14.25 in', 'Height: 4.75 in'],
  },
  {
    id: '19th-c-tea-caddy',
    image: sarcophagus,
    alt: 'Sarcófago de madeira',
    title: '19th C Tea Caddy',
    price: 350,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Dining & Entertaining',
    description:
      'Historic and handmade, this adorable tea caddy contains two inner components for storage. Circa 19th century. Exquisite patina.',
    dimensions: ['Width: 8 in', 'Depth: 4.5 in', 'Height: 5.25 in'],
  },
  {
    id: 'vintage-gold-rimmed-coupes',
    image: coupesGlasses,
    alt: 'Copas vintage com aro dourado',
    title: 'Vintage Gold Rimmed Coupes',
    price: 279,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Dining & Entertaining',
    description:
      'Gold striped champagne coupes. Stunning set of twelve art deco stemware with gold stripe details.',
    dimensions: ['Width: 3.875 in', 'Height: 5.125 in'],
  },
  {
    id: 'black-print-pillow',
    image: printPillow,
    alt: 'Almofada estampada preta',
    title: 'Black Print Pillow',
    price: 195,
    toOrder: false,
    vintage: 'New Vintage',
    type: 'Soft Goods',
    description:
      'Black print woven pillow with floral motif and central medallion. Down feather blend insert included.',
    dimensions: ['Width: 20 in', 'Height: 20 in'],
  },
  {
    id: 'amber-lumbar-pillow',
    image: amberLumbarPillow,
    alt: 'Almofada Lombar Âmbar',
    title: 'Amber Lumbar Pillow',
    price: 195,
    toOrder: false,
    vintage: 'New Vintage',
    type: 'Soft Goods',
    description:
      'Vintage amber floral pillow. Woven floral pattern in warm creams, greens, and amber tones. Velvet backing in a deep rust hue. Down feather blend insert included.',
    dimensions: ['Width: 12 in', 'Height: 20 in'],
  },
  {
    id: 'checkered-bone-lamps',
    image: checkeredBoneLamps,
    alt: 'Lâmpada de osso xadrez',
    title: 'Checkered Bone Lamps',
    price: 2800,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Lighting',
    description:
      'This tessellated mid-century lamp features a custom, sheer linen shade with ribbing that draws the eye to the bold black and ivory bone base.',
    dimensions: ['Base Width: 5 in', 'Shade Width: No info.', 'Height: 33 in'],
  },
  {
    id: 'bronze-bankers-lamp',
    image: bronzeBankersLamp,
    alt: 'Lâmpada de banqueiros de bronze',
    title: 'Bronze Bankers Lamp',
    price: 4200,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Lighting',
    description:
      'Bronze Bankers Lamp by I.P. Frink c. 1920 - Signed. A progressive design, this brass lamp features fluted mirrors along the interior to evenly reflect light. It offers soft accent lighting. Rewired to US standards with double twist cord. Exceptional patina.',
    dimensions: ['Width: 24 in', 'Depth: 6.5 in', 'Height: 19.25 in'],
  },
  {
    id: 'man-walking-canvas',
    image: manWalkingArt,
    alt: 'Pintura de um homem caminhando',
    title: 'Man Walking Canvas',
    price: 3200,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Art',
    description:
      'Walk through the mountains. Oil on canvas. Vintage gilded frame. Wear consistent with age.',
    dimensions: ['Width: 26.25 in', 'Depth: 2 in', 'Height: 36.25 in'],
  },
  {
    id: 'villagers-charcoal-sketch',
    image: villagersCharcoalSketch,
    alt: 'Pintura de carvão de aldeões',
    title: 'Villagers Charcoal Sketch',
    price: 1985,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Art',
    description:
      'Day in the Village. Charcoal on paper. Signed. Stained wood frame.',
    dimensions: ['Width: 28.25 in', 'Depth: 1 in', 'Height: 24.75 in'],
  },
  {
    id: 'lady-reading',
    image: ladyReading,
    alt: 'Pintura de uma dama lendo',
    title: 'Lady Reading',
    price: 4100,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Art',
    description:
      'Oil on canvas. Signed Nicolai Anderson. 1938 Exhibition sticker on back. Wood frame has minor warping. Canvas and frame wear consistent with age.',
    dimensions: ['Width: 41.5 in', 'Height: 41 in'],
  },
];
