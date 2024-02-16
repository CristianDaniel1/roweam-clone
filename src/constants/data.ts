import theDesignerImg from '../assets/img/the-designer.jpg';
import theCraftsmanImg from '../assets/img/the-craftsman.jpg';
import theMakerImg from '../assets/img/the-maker.jpg';
import theStewardImg from '../assets/img/the-steward.jpg';
import thePatronImg from '../assets/img/the-patron.jpg';
import bromley from '../assets/img/home-2.jpg';

import discColletion from '../assets/img/disc-collection.jpg';
import pavillionCollection from '../assets/img/pavillion-collection.jpg';
import bromleyCollection from '../assets/img/bromley-collection.jpg';

export const showProductsLimit = 4;
export const BromleyImg = bromley;

export const vintageCategory = [
  {
    id: 'categ1',
    type: 'New Vintage',
  },
  {
    id: 'categ2',
    type: 'True Vintage',
  },
  {
    id: 'categ3',
    type: 'New & True Vintage',
  },
];

export const categories = [
  {
    id: 'c1',
    category: 'Shop All',
  },
  {
    id: 'c2',
    category: 'Furniture',
  },
  {
    id: 'c3',
    category: 'Decor',
  },
  {
    id: 'c4',
    category: 'Dining & Entertaining',
  },
  {
    id: 'c5',
    category: 'Soft Goods',
  },
  {
    id: 'c6',
    category: 'Lighting',
  },
  {
    id: 'c7',
    category: 'Art',
  },
];

export const shopLinks = [
  'Forniture',
  'Decor',
  'Dining & Entertaining',
  'Soft Goods',
  'Lighting',
  'Art',
];

export const CompanyLinks = [
  'Our Story',
  'Interior Design',
  'Stay With Us',
  'A Bit Moore Blog',
];

export const AboutLinks = [
  {
    section: 'About',
    id: '#about',
  },
  {
    section: 'The new Nostalgia',
    id: '#new-nostalgia',
  },
  {
    section: 'Process',
    id: '#process',
  },
  {
    section: 'Contact',
    id: '#contact',
  },
  {
    section: 'Interior Design Services',
    id: '#design-services',
  },
];

export const processList = [
  {
    id: 1,
    image: theDesignerImg,
    title: 'The Designer',
    alt: 'Desenho técnico de um sofá',
    description:
      'Our process begins in the hands of the designer, where generations of experience are developed from a hand sketch and transformed by our engineering team. The intricacies are determined with the highest quality internals in mind, to ensure the longevity of every piece.',
  },
  {
    id: 2,
    image: theCraftsmanImg,
    title: 'The Craftsman',
    alt: 'Partes de uma mobilia no chão',
    description:
      "It is then passed onto the craftsman to bring the art to life in form and frame. Hours are spent carving, sanding, assembling, and stitching with the touch of the human hand, then it's meticulously inspected for quality control on each and every detail.",
  },
  {
    id: 3,
    image: theMakerImg,
    title: 'The Maker',
    alt: 'Tecido branco',
    description:
      'A final prototype is then passed to the makers hands to be produced, down to each minute detail. Hems, cords, stains, and stamps applied, and signed at every step.',
  },
  {
    id: 4,
    image: theStewardImg,
    title: 'The Steward',
    alt: 'Sofá branco detalhado',
    description:
      "After each finishing touch is perfected and the finest quality assured, it's wrapped and packaged with thoughtful preparation.",
  },
  {
    id: 5,
    image: thePatronImg,
    title: 'The Patron',
    alt: 'Uma chave de prata em uma mesa',
    description:
      'Once carefully placed inside your home, you become its custodians. Created with love and aged by a life well lived.',
  },
];

export const collections = [
  {
    title: 'The Bromley Collection',
    image: bromleyCollection,
    alt: 'sofá branco elegante com duas almofadas',
    link: '/shop/the-bromley-sofa',
    description:
      'A sofa made for Sunday morning reading and naps by the fireplace.',
  },
  {
    title: 'The Disc Collection',
    image: discColletion,
    alt: 'mesa da coleção Disc em volta de folhas',
    link: '/shop',
    description:
      'A collection of elegant, handcrafted case goods that walk the line between minimal and maximal design.',
  },
  {
    title: 'The Pavillion Collection',
    image: pavillionCollection,
    alt: 'cadeira da coleção Pavillion em um ambiente rural',
    link: '/shop/pavillion-chair',
    description: 'Sweet lines and stately presence.',
  },
];
