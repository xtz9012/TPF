import blueprintsImg from '../assets/site/blueprints.jpg'
import paintBucketImg from '../assets/site/paint-bucket.jpg'
import paintSwatchImg from '../assets/site/paint-swatch.jpg'
import painterImg from '../assets/site/painter.jpg'
import primerImg from '../assets/site/primer.jpg'
import tapeImg from '../assets/site/tape.jpg'
import toolsImg from '../assets/site/tools.jpg'

export const images = {
  blueprintsImg,
  paintBucketImg,
  paintSwatchImg,
  painterImg,
  primerImg,
  tapeImg,
  toolsImg,
}

export const navItems = [
  { page: 'service', label: 'Usługi' },
  { page: 'product', label: 'Produkty' },
  { page: 'home', label: 'Realizacje', section: 'projects' },
  { page: 'contact', label: 'Kontakt' },
]

export const serviceCards = [
  ['Remonty mieszkań', 'Kompleksowe remonty całych mieszkań pod klucz.'],
  ['Wykończenie wnętrz', 'Prace wykończeniowe deweloperskie i odświeżające.'],
  ['Układanie płytek', 'Profesjonalne usługi glazurnicze do łazienek i kuchni.'],
  ['Montaż paneli', 'Szybki i precyzyjny montaż podłóg pływających.'],
  ['Zabudowa GK', 'Sufity podwieszane i ścianki działowe z płyt kartonowych.'],
  ['Elewacje', 'Ocieplenia budynków i tynki zewnętrzne.'],
]

export const paintProducts = [
  {
    category: 'Farby',
    title: 'Farba wewnętrzna Premium 10L',
    description: 'Biała, matowa farba o wysokim stopniu krycia.',
    price: '100 zł',
    image: paintSwatchImg,
  },
  {
    category: 'Przygotowanie',
    title: 'Grunt głęboko penetrujący 5L',
    description: 'Wyrównuje chłonność i wzmacnia podłoże.',
    price: '45 zł',
    image: primerImg,
  },
  {
    category: 'Narzędzia',
    title: 'Zestaw malarski Premium 25cm',
    description: 'Wałek, kuweta i akcesoria do prac wewnętrznych.',
    price: '68 zł',
    image: toolsImg,
  },
  {
    category: 'Ochrona',
    title: 'Taśma malarska Blue 50m',
    description: 'Czyste odcięcia kolorów i ochrona listew.',
    price: '18 zł',
    image: tapeImg,
  },
]

export const serviceProducts = [
  {
    category: 'Farby',
    title: 'Farba wewnętrzna Premium 10L',
    price: '149 zł',
    image: paintBucketImg,
  },
  {
    category: 'Grunty',
    title: 'Grunt głęboko penetrujący 5L',
    price: '45 zł',
    image: primerImg,
  },
  {
    category: 'Narzędzia',
    title: 'Wałek mikrofibra 25cm + rączka',
    price: '24 zł',
    image: toolsImg,
  },
  {
    category: 'Akcesoria',
    title: 'Pędzel do odcięć kątowy 50mm',
    price: '18,50 zł',
    image: toolsImg,
  },
  {
    category: 'Ochrona',
    title: 'Taśma malarska Blue 48mm',
    price: '18 zł',
    image: tapeImg,
  },
  {
    category: 'Ochrona',
    title: 'Folia ochronna gruba 4x5m',
    price: '22 zł',
    image: tapeImg,
  },
]

export const advicePosts = [
  {
    category: 'Poradnik',
    title: 'Jak odpowiednio przygotować ściany przed malowaniem?',
    text: 'Proces odkurzania, szpachlowania ubytków i mycia powierzchni przed pierwszą warstwą.',
    image: toolsImg,
  },
  {
    category: 'Materiały',
    title: 'Matowa czy satynowa? Jak dobrać rodzaj farby.',
    text: 'Różne wykończenia wpływają na wygląd, odporność i ukrywanie nierówności podłoża.',
    image: paintSwatchImg,
  },
  {
    category: 'Wiedza techniczna',
    title: 'Dlaczego gruntowanie jest tak ważne dla trwałości farby?',
    text: 'Grunt wyrównuje chłonność i poprawia przyczepność, szczególnie przy świeżych tynkach.',
    image: primerImg,
  },
]

export const faqProduct = [
  [
    'Czy muszę gruntować ścianę przed malowaniem?',
    'Zalecamy gruntowanie w przypadku nowych, chłonnych tynków lub przy drastycznej zmianie koloru. Jeśli ściana była wcześniej malowana farbą lateksową w dobrym stanie, wystarczy ją umyć.',
  ],
  [
    'Jak długo schnie farba?',
    'W temperaturze pokojowej farba jest sucha w dotyku po około 1 godzinie. Kolejną warstwę można nakładać po 4 godzinach, a pełną odporność powłoka uzyskuje po 28 dniach.',
  ],
]

export const faqContact = [
  [
    'Jak szybko odpowiadacie na zapytania?',
    'Staramy się odpowiadać na wszystkie wiadomości e-mail oraz formularze w ciągu 24 godzin roboczych. W pilnych przypadkach zalecamy kontakt telefoniczny.',
  ],
  [
    'Czy wstępna wycena jest darmowa?',
    'Tak, pierwsza konsultacja oraz wstępny kosztorys na podstawie przesłanych informacji i zdjęć są bezpłatne.',
  ],
  [
    'Czy dojeżdżacie do klienta przed wyceną?',
    'Wizja lokalna jest potrzebna przy kompleksowych remontach. Umawiamy ją po akceptacji wstępnych widełek cenowych.',
  ],
  [
    'Jakie materiały wykorzystujecie?',
    'Pracujemy na sprawdzonych materiałach wysokiej jakości. Możemy też użyć materiałów powierzonych przez klienta po wcześniejszej konsultacji.',
  ],
]
