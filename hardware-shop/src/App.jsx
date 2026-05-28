import { useEffect, useMemo, useState } from 'react'
import './App.css'

import blueprintsImg from './assets/site/blueprints.jpg'
import oakFloorImg from './assets/site/oak-floor.jpg'
import paintBucketImg from './assets/site/paint-bucket.jpg'
import paintSwatchImg from './assets/site/paint-swatch.jpg'
import painterImg from './assets/site/painter.jpg'
import primerImg from './assets/site/primer.jpg'
import tapeImg from './assets/site/tape.jpg'
import toolsImg from './assets/site/tools.jpg'

const routes = [
  'home',
  'service',
  'product',
  'cart',
  'checkout',
  'confirmation',
  'contact',
]

const navItems = [
  { page: 'service', label: 'Usługi' },
  { page: 'product', label: 'Produkty' },
  { page: 'home', label: 'Realizacje', section: 'projects' },
  { page: 'contact', label: 'Kontakt' },
]

const serviceCards = [
  ['Remonty mieszkań', 'Kompleksowe remonty całych mieszkań pod klucz.'],
  ['Wykończenie wnętrz', 'Prace wykończeniowe deweloperskie i odświeżające.'],
  ['Układanie płytek', 'Profesjonalne usługi glazurnicze do łazienek i kuchni.'],
  ['Montaż paneli', 'Szybki i precyzyjny montaż podłóg pływających.'],
  ['Zabudowa GK', 'Sufity podwieszane i ścianki działowe z płyt kartonowych.'],
  ['Elewacje', 'Ocieplenia budynków i tynki zewnętrzne.'],
]

const paintProducts = [
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

const serviceProducts = [
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

const advicePosts = [
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

const faqProduct = [
  [
    'Czy muszę gruntować ścianę przed malowaniem?',
    'Zalecamy gruntowanie w przypadku nowych, chłonnych tynków lub przy drastycznej zmianie koloru. Jeśli ściana była wcześniej malowana farbą lateksową w dobrym stanie, wystarczy ją umyć.',
  ],
  [
    'Jak długo schnie farba?',
    'W temperaturze pokojowej farba jest sucha w dotyku po około 1 godzinie. Kolejną warstwę można nakładać po 4 godzinach, a pełną odporność powłoka uzyskuje po 28 dniach.',
  ],
]

const faqContact = [
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

function getInitialRoute() {
  const hash = window.location.hash.replace('#', '').replace('/', '')
  return routes.includes(hash) ? hash : 'home'
}

function formatPLN(value) {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
  }).format(value)
}

function Icon({ name }) {
  const paths = {
    cart: (
      <>
        <path d="M7 18a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 7 18Z" />
        <path d="M18 18a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 18 18Z" />
        <path d="M3 4h2l2.2 10.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L21 8H7" />
      </>
    ),
    user: (
      <>
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    check: <path d="M20 6 9 17l-5-5" />,
    shield: <path d="M12 3 5 6v5c0 4.8 3.1 8.4 7 10 3.9-1.6 7-5.2 7-10V6l-7-3Z" />,
    truck: (
      <>
        <path d="M3 7h11v8H3z" />
        <path d="M14 10h4l3 3v2h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </>
    ),
    card: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
    map: (
      <>
        <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 7 9-7" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3A19 19 0 0 1 5.1 12 19.5 19.5 0 0 1 2 3.8 2 2 0 0 1 4 1.6h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 1.9Z" />
    ),
    paint: (
      <>
        <path d="M4 16h13a3 3 0 0 0 0-6h-1" />
        <path d="M4 16v4h9v-4" />
        <path d="M5 8h10l1 2H4l1-2Z" />
        <path d="M8 8V5h4v3" />
      </>
    ),
    tool: (
      <path d="m14 7 3-3 3 3-3 3m0-6-9 9-4 7 7-4 9-9" />
    ),
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  }

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function App() {
  const [route, setRoute] = useState(getInitialRoute)
  const [quantity, setQuantity] = useState(1)
  const [payment, setPayment] = useState('card')

  useEffect(() => {
    const onHashChange = () => setRoute(getInitialRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const cartTotal = useMemo(() => quantity * 149, [quantity])

  const navigate = (page, section) => {
    if (section) {
      window.location.hash = page === 'home' ? '' : page
      setRoute(page)
      window.requestAnimationFrame(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    window.location.hash = page === 'home' ? '' : page
    setRoute(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Header route={route} navigate={navigate} />
      <main>
        {route === 'home' && <HomePage navigate={navigate} />}
        {route === 'service' && <ServicePage navigate={navigate} />}
        {route === 'product' && <ProductPage navigate={navigate} />}
        {route === 'cart' && (
          <CartPage
            quantity={quantity}
            setQuantity={setQuantity}
            total={cartTotal}
            navigate={navigate}
          />
        )}
        {route === 'checkout' && (
          <CheckoutPage
            payment={payment}
            setPayment={setPayment}
            total={cartTotal}
            navigate={navigate}
          />
        )}
        {route === 'confirmation' && <ConfirmationPage navigate={navigate} />}
        {route === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </>
  )
}

function Header({ route, navigate }) {
  const activeGroup =
    route === 'service'
      ? 'service'
      : ['product', 'cart', 'checkout', 'confirmation'].includes(route)
        ? 'product'
        : route

  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => navigate('home')}>
        Modern Tradesman Co.
      </button>
      <nav className="main-nav" aria-label="Główna nawigacja">
        {navItems.map((item) => (
          <button
            className={
              activeGroup === item.page && !(route === 'home' && item.section)
                ? 'is-active'
                : ''
            }
            key={item.label}
            type="button"
            onClick={() => navigate(item.page, item.section)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="header-tools">
        <button type="button" aria-label="Koszyk" onClick={() => navigate('cart')}>
          <Icon name="cart" />
        </button>
        <button type="button" aria-label="Konto klienta">
          <Icon name="user" />
        </button>
        <button type="button" aria-label="Szukaj">
          <Icon name="search" />
        </button>
        <button
          className="quote-button"
          type="button"
          onClick={() => navigate('contact')}
        >
          Poproś o wycenę
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Modern Tradesman Co.</strong>
        <p>© 2024 Modern Tradesman Construction. Zbudowane na solidnych fundamentach.</p>
      </div>
      <nav aria-label="Linki stopki">
        <a href="#privacy">Polityka Prywatności</a>
        <a href="#terms">Regulamin Sklepu</a>
        <a href="#returns">Zwroty i Reklamacje</a>
        <a href="#accessibility">Ustawienia Dostępności</a>
      </nav>
    </footer>
  )
}

function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <span key={item}>
          {index > 0 && <span aria-hidden="true">›</span>}
          {item}
        </span>
      ))}
    </div>
  )
}

function Button({ children, icon, onClick, variant = 'primary', className = '' }) {
  return (
    <button
      className={`button ${variant} ${className}`}
      type="button"
      onClick={onClick}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </button>
  )
}

function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`section-header ${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function FeatureTile({ icon, title, text }) {
  return (
    <article className="feature-tile">
      <span className="tile-icon">
        <Icon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function ProductCard({ item, action = 'Dodaj', navigate }) {
  return (
    <article className="product-card">
      <img src={item.image} alt="" />
      <div className="product-card-body">
        <p className="card-label">{item.category}</p>
        <h3>{item.title}</h3>
        {item.description && <p>{item.description}</p>}
        <div className="product-card-footer">
          <strong>{item.price}</strong>
          <button type="button" onClick={() => navigate?.('cart')}>
            <Icon name="cart" />
            {action}
          </button>
        </div>
      </div>
    </article>
  )
}

function HomePage({ navigate }) {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Kompleksowe usługi</p>
          <h1>Remonty, wykończenia i materiały budowlane w jednym miejscu</h1>
          <p>
            Od planowania po ostatnie szlify. Zapewniamy profesjonalne ekipy
            remontowe oraz najwyższej jakości materiały.
          </p>
          <div className="button-row">
            <Button onClick={() => navigate('service')}>Zobacz usługę malowania</Button>
            <Button variant="secondary" onClick={() => navigate('contact')}>
              Zapytaj o wycenę
            </Button>
          </div>
        </div>
        <div className="hero-media">
          <img src={painterImg} alt="Malarz nakładający farbę na ścianę" />
        </div>
      </section>

      <section className="band">
        <SectionHeader title="Czego potrzebujesz?" />
        <div className="quick-grid">
          <FeatureTile
            icon="paint"
            title="Usługi remontowe"
            text="Profesjonalne wykonanie i gwarancja jakości."
          />
          <FeatureTile
            icon="cart"
            title="Produkty budowlane"
            text="Sprawdzone materiały w najlepszych cenach."
          />
          <FeatureTile
            icon="card"
            title="Wycena prac"
            text="Szybka i bezpłatna wycena Twojego projektu."
          />
          <FeatureTile
            icon="tool"
            title="Porady"
            text="Praktyczna wiedza i inspiracje remontowe."
          />
        </div>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Wyróżniona usługa</p>
          <h2>Malowanie Ścian i Sufitów</h2>
          <p>
            Oferujemy kompleksowe usługi malarskie, dbając o każdy detal. Nasza
            ekipa używa sprawdzonych farb i narzędzi, aby zapewnić trwały efekt.
          </p>
          <ul className="check-list columns">
            <li>Zabezpieczenie powierzchni i mebli</li>
            <li>Przygotowanie i naprawa ubytków</li>
            <li>Gruntowanie powierzchni</li>
            <li>Dwukrotne malowanie ścian</li>
            <li>Precyzyjne malowanie sufitów</li>
            <li>Sprzątanie po zakończeniu prac</li>
          </ul>
          <div className="button-row">
            <Button onClick={() => navigate('service')}>Zamów malowanie</Button>
            <Button variant="secondary" onClick={() => navigate('contact')}>
              Wycena indywidualna
            </Button>
          </div>
        </div>
        <img className="split-image" src={painterImg} alt="Malowanie ściany wałkiem" />
      </section>

      <section className="band">
        <SectionHeader title="Pozostałe usługi remontowe" />
        <div className="service-grid">
          {serviceCards.map(([title, text]) => (
            <article className="service-card" key={title}>
              <Icon name="tool" />
              <h3>{title}</h3>
              <p>{text}</p>
              <button type="button" onClick={() => navigate('service')}>
                Zobacz więcej
                <Icon name="arrow" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeader
          title="Produkty potrzebne do malowania"
          text="Wszystko, czego potrzebujesz, aby wykonać pracę samodzielnie lub dostarczyć materiały naszej ekipie."
        />
        <div className="product-grid">
          {paintProducts.map((item) => (
            <ProductCard item={item} key={item.title} navigate={navigate} />
          ))}
        </div>
      </section>

      <section className="dark-band">
        <SectionHeader
          title="Usługa + Produkty w jednym miejscu"
          text="Nie tracisz czasu na szukanie materiałów i wykonawców osobno. Dobieramy farbę, narzędzia i akcesoria do zakresu prac."
        />
        <div className="process-flow">
          <FeatureTile icon="tool" title="Wybierasz usługę" text="Np. malowanie" />
          <FeatureTile
            icon="paint"
            title="Dobieramy farbę"
            text="Dopasowaną do potrzeb"
          />
          <FeatureTile
            icon="cart"
            title="Dostarczamy akcesoria"
            text="Materiały ochronne i narzędzia"
          />
        </div>
      </section>

      <section className="content-section">
        <SectionHeader title="Proces współpracy" />
        <div className="steps-grid">
          {[
            ['Kontakt', 'Zadzwoń lub wypełnij formularz zgłoszeniowy.'],
            ['Opis prac', 'Przedstaw nam zakres remontu lub prześlij zdjęcia.'],
            ['Dobór materiałów', 'Przygotujemy listę potrzebnych produktów z wyceną.'],
            ['Realizacja lub zakup', 'Zlecasz prace albo kupujesz wybrane materiały.'],
          ].map(([title, text], index) => (
            <article className="step-card" key={title}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <SectionHeader title="Dlaczego warto wybrać nas?" />
        <div className="reason-grid">
          {[
            ['Usługi i produkty razem', 'Oszczędność czasu dzięki kompleksowej obsłudze w jednym miejscu.'],
            ['Pomoc w doborze', 'Doradzamy wybór farb, narzędzi i technologii z praktyki.'],
            ['Praktyczne podejście', 'Polecamy tylko sprawdzone rozwiązania używane na budowie.'],
            ['Kontakt w sprawie wyceny', 'Jasna komunikacja kosztów usług i materiałów bez ukrytych opłat.'],
          ].map(([title, text]) => (
            <article className="reason-card" key={title}>
              <Icon name="shield" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="projects">
        <div className="section-topline">
          <SectionHeader
            align="left"
            title="Przykładowe realizacje"
            text="Efekty naszej pracy u zadowolonych klientów."
          />
          <button type="button" onClick={() => navigate('contact')}>
            Zobacz wszystkie projekty
            <Icon name="arrow" />
          </button>
        </div>
        <div className="project-grid">
          {[painterImg, blueprintsImg, paintBucketImg, toolsImg].map((image, index) => (
            <article className="project-tile" key={image}>
              <img src={image} alt="" />
              <h3>
                {['Odświeżenie mieszkania', 'Plan remontu', 'Dobór materiałów', 'Prace przygotowawcze'][index]}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <SectionHeader title="Porady od fachowców" />
        <div className="article-grid">
          {advicePosts.map((post) => (
            <article className="article-card" key={post.title}>
              <img src={post.image} alt="" />
              <div>
                <p className="card-label">{post.category}</p>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <button type="button">
                  Czytaj dalej
                  <Icon name="arrow" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>Planujesz malowanie lub remont?</h2>
        <p>
          Pomożemy dobrać odpowiednie materiały i przygotujemy konkurencyjną
          wycenę usług wykonawczych.
        </p>
        <div className="button-row center">
          <Button onClick={() => navigate('contact')}>Skontaktuj się z nami</Button>
          <Button variant="secondary" onClick={() => navigate('contact')}>
            Poproś o darmową wycenę
          </Button>
        </div>
      </section>
    </>
  )
}

function ProductPage({ navigate }) {
  return (
    <>
      <section className="page-section">
        <Breadcrumb items={['Strona główna', 'Produkty', 'Farba wewnętrzna']} />
        <div className="product-hero">
          <div className="product-media">
            <img src={paintSwatchImg} alt="Próbka koloru farby wewnętrznej" />
          </div>
          <div className="product-summary">
            <h1>Premium Farba Wewnętrzna</h1>
            <p>
              Głęboki mat, doskonałe krycie i odporność na zmywanie. Idealna do
              ścian i sufitów w reprezentacyjnych pomieszczeniach.
            </p>
            <div className="price-line">
              <strong>149,00 zł</strong>
              <span>/ 5L</span>
            </div>
            <div className="swatches" aria-label="Kolor: biały bazowy">
              <span className="selected"></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="stock-row">
              <span>W magazynie</span>
              <span>Wysyłka w 24h</span>
            </div>
            <Button icon="cart" onClick={() => navigate('cart')} className="wide">
              Dodaj do koszyka
            </Button>
            <div className="tag-row">
              <span>Głęboki Mat</span>
              <span>Plamoodporna</span>
              <span>Wydajność 14m²/l</span>
            </div>
          </div>
        </div>
      </section>

      <section className="details-section">
        <div className="details-main">
          <h2>Charakterystyka</h2>
          <div className="spec-grid">
            <FeatureLine text="Wyjątkowa siła krycia, często wystarcza jedna warstwa przy odświeżaniu." />
            <FeatureLine text="Najwyższa klasa odporności na szorowanie na mokro." />
            <FeatureLine text="Ekologiczna formuła o niskiej zawartości LZO." />
            <FeatureLine text="Nie chlapie podczas malowania wałkiem i tworzy równą powłokę." />
          </div>
          <h2>Zastosowanie</h2>
          <div className="use-grid">
            {['Sypialnie', 'Salony', 'Pokoje dziecięce', 'Biura'].map((item) => (
              <div key={item}>
                <Icon name="home" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="service-promo">
          <h2>Nie chcesz malować samodzielnie?</h2>
          <p>
            Zostaw to profesjonalistom. Przygotujemy powierzchnię i pomalujemy
            wnętrze z najwyższą starannością.
          </p>
          <Button variant="accent" onClick={() => navigate('service')}>
            Zamów usługę malowania
          </Button>
        </aside>
      </section>

      <section className="content-section">
        <SectionHeader align="left" title="Polecane do kompletu" />
        <div className="product-grid four">
          {paintProducts.slice(1).map((item) => (
            <ProductCard item={item} key={item.title} navigate={navigate} />
          ))}
        </div>
      </section>

      <FaqSection title="Często zadawane pytania" items={faqProduct} />
    </>
  )
}

function FeatureLine({ text }) {
  return (
    <div className="feature-line">
      <Icon name="check" />
      <p>{text}</p>
    </div>
  )
}

function ServicePage({ navigate }) {
  return (
    <>
      <section className="page-section">
        <Breadcrumb items={['Strona główna', 'Usługi', 'Malowanie ścian']} />
        <div className="service-hero">
          <div>
            <p className="eyebrow">Usługi wykończeniowe</p>
            <h1>Profesjonalne Malowanie Ścian</h1>
            <p>
              Kompleksowa usługa odświeżenia wnętrz. Gwarantujemy równe
              pokrycie, ostre odcięcia kolorów i perfekcyjne przygotowanie podłoża.
            </p>
            <div className="button-row">
              <Button onClick={() => navigate('contact')}>Zamów wycenę</Button>
              <Button variant="secondary" onClick={() => navigate('product')}>
                Kup materiały
              </Button>
            </div>
          </div>
          <img src={painterImg} alt="Malarz podczas pracy przy ścianie" />
        </div>
      </section>

      <section className="band">
        <SectionHeader title="Dla kogo jest ta usługa?" />
        <div className="quick-grid five">
          {[
            'Odświeżenie mieszkania',
            'Lokal pod wynajem',
            'Koniec remontu',
            'Zmiana koloru',
            'Pomoc w przygotowaniu ścian',
          ].map((item) => (
            <FeatureTile icon="paint" title={item} text="" key={item} />
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeader title="Co obejmuje usługa?" />
        <div className="scope-grid">
          {[
            ['Zabezpieczenie', 'Foliowanie podłóg, mebli, oklejanie okien, drzwi i listew.'],
            ['Ocena stanu podłoża', 'Sprawdzenie nośności starych powłok i chłonności.'],
            ['Przygotowanie powierzchni', 'Oczyszczenie z kurzu, tłustych plam i luźnych elementów.'],
            ['Drobne uzupełnienia', 'Szpachlowanie niewielkich pęknięć i dziur po wkrętach.'],
            ['Gruntowanie', 'Aplikacja preparatu gruntującego dla wyrównania chłonności.'],
            ['Malowanie ścian i sufitów', 'Minimum dwie warstwy farby metodą wałkową lub natryskową.'],
          ].map(([title, text]) => (
            <FeatureLine key={title} text={`${title}: ${text}`} />
          ))}
        </div>
      </section>

      <section className="band">
        <SectionHeader title="Jak wygląda realizacja?" />
        <div className="steps-grid six">
          {['Kontakt', 'Ustalenie zakresu', 'Dobór materiałów', 'Zabezpieczenie', 'Malowanie', 'Odbiór'].map((title, index) => (
            <article className="step-card" key={title}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>
                {[
                  'Krótka rozmowa i poznanie potrzeb.',
                  'Pomiary, zdjęcia i szczegółowa wycena.',
                  'Wybór farb oraz odpowiednich gruntów.',
                  'Ochrona mebli i podłóg w strefie roboczej.',
                  'Przygotowanie ścian i właściwe prace.',
                  'Wspólna weryfikacja i sprzątnięcie.',
                ][index]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeader
          title="Produkty potrzebne do malowania"
          text="Kup profesjonalne materiały bezpośrednio w naszym sklepie i oszczędź czas."
        />
        <div className="product-grid six">
          {serviceProducts.map((item) => (
            <ProductCard item={item} key={item.title} action="Do koszyka" navigate={navigate} />
          ))}
        </div>
      </section>

      <section className="comparison-section">
        <div>
          <h2>Efekty usługi</h2>
          <div className="reason-grid vertical">
            {[
              ['Odświeżone wnętrze', 'Czyste ściany bez smug i przebarwień.'],
              ['Zmiana charakteru', 'Nowy kolor, który odmieni klimat pomieszczenia.'],
              ['Lepsze przygotowanie', 'Zabezpieczone pęknięcia i wyrównana chłonność.'],
              ['Profesjonalne doradztwo', 'Pomoc w wyborze farb i materiałów wykończeniowych.'],
            ].map(([title, text]) => (
              <article className="reason-card" key={title}>
                <Icon name="check" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="dark-card">
          <h2>Malowanie samodzielnie czy z usługą?</h2>
          <h3>Zakup produktów</h3>
          <p>
            Dla osób, które mają czas, narzędzia i doświadczenie. Dostarczamy
            sprawdzone materiały w dobrych cenach.
          </p>
          <h3>Zlecenie prac</h3>
          <p>
            Dla osób ceniących czas i gwarancję jakości. Zajmujemy się wszystkim
            od zabezpieczenia po finalne sprzątanie.
          </p>
        </div>
      </section>

      <section className="band">
        <SectionHeader title="Przykładowe zastosowania" />
        <div className="pill-row center">
          {['Pokój', 'Salon', 'Sypialnia', 'Korytarz', 'Całe mieszkanie', 'Lokal użytkowy'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <FaqSection
        title="Często zadawane pytania (FAQ)"
        items={[
          ['Czy zawsze trzeba gruntować ściany przed malowaniem?', 'Nie zawsze, ale zalecamy gruntowanie przy nowych lub chłonnych podłożach.'],
          ['Kto kupuje materiały i folie zabezpieczające?', 'Możemy dostarczyć komplet materiałów albo pracować na materiałach klienta.'],
          ['Od czego zależy cena malowania za m2?', 'Od stanu podłoża, liczby kolorów, wysokości pomieszczeń i zakresu zabezpieczeń.'],
        ]}
      />

      <section className="dark-band compact">
        <h2>Chcesz odświeżyć ściany?</h2>
        <p>Krótko opisz zakres prac i metraż, a przygotujemy bezpłatną wycenę.</p>
        <div className="button-row center">
          <Button variant="secondary" onClick={() => navigate('contact')}>
            Kontakt z doradcą
          </Button>
          <Button variant="ghost" icon="phone" onClick={() => navigate('contact')}>
            +48 123 456 789
          </Button>
        </div>
      </section>
    </>
  )
}

function CartPage({ quantity, setQuantity, total, navigate }) {
  return (
    <section className="page-section tall">
      <Breadcrumb items={['Strona główna', 'Koszyk']} />
      <h1>Twój koszyk</h1>
      <div className="cart-layout">
        <div className="cart-table">
          <div className="cart-head">
            <span>Produkt</span>
            <span>Cena</span>
            <span>Ilość</span>
            <span>Suma</span>
          </div>
          <div className="cart-row">
            <div className="cart-product">
              <img src={paintSwatchImg} alt="" />
              <div>
                <h2>Farba wewnętrzna Premium 10L</h2>
                <p>Nr kat: HH-9921-X</p>
                <button type="button">Usuń</button>
              </div>
            </div>
            <span>{formatPLN(149)}</span>
            <div className="quantity-control" aria-label="Ilość">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                −
              </button>
              <strong>{quantity}</strong>
              <button type="button" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <strong>{formatPLN(total)}</strong>
          </div>
          <button className="continue-link" type="button" onClick={() => navigate('product')}>
            ← Kontynuuj zakupy
          </button>
        </div>
        <aside className="summary-card">
          <h2>Podsumowanie</h2>
          <dl>
            <div>
              <dt>Wartość koszyka</dt>
              <dd>{formatPLN(total)}</dd>
            </div>
            <div>
              <dt>Dostawa</dt>
              <dd>Odbiór osobisty: Gratis</dd>
            </div>
          </dl>
          <hr />
          <div className="total-line">
            <span>Łącznie:</span>
            <strong>{formatPLN(total)}</strong>
          </div>
          <p>w tym podatek VAT (23%)</p>
          <Button icon="card" onClick={() => navigate('checkout')} className="wide">
            Przejdź do płatności
          </Button>
          <div className="safe-note">
            <Icon name="shield" />
            <span>Gwarancja bezpiecznych zakupów oraz 30-dniowy termin zwrotu.</span>
          </div>
        </aside>
        <form className="coupon-box">
          <label htmlFor="coupon">Kod rabatowy</label>
          <div>
            <input id="coupon" placeholder="WPISZ KOD" />
            <button type="button">Zastosuj</button>
          </div>
        </form>
      </div>

      <section className="content-section flush">
        <div className="lined-title">
          <h2>Polecane do zestawu</h2>
        </div>
        <div className="product-grid three">
          {paintProducts.slice(1).map((item) => (
            <ProductCard item={item} key={item.title} navigate={navigate} />
          ))}
        </div>
      </section>
    </section>
  )
}

function CheckoutPage({ payment, setPayment, total, navigate }) {
  const shipping = 25
  const orderTotal = total + shipping

  return (
    <section className="page-section tall">
      <Breadcrumb items={['Strona główna', 'Koszyk', 'Płatność']} />
      <h1>Zamówienie i Płatność</h1>
      <div className="checkout-layout">
        <div className="checkout-main">
          <form className="form-card">
            <h2>
              <Icon name="truck" />
              Dane do wysyłki
            </h2>
            <label>
              Imię i Nazwisko
              <input defaultValue="Jan Kowalski" />
            </label>
            <label>
              Adres
              <input defaultValue="ul. Budowlana 42/8, 00-001 Warszawa" />
            </label>
            <div className="two-fields">
              <label>
                Telefon
                <input defaultValue="+48 000 000 000" />
              </label>
              <label>
                E-mail
                <input defaultValue="jan.kowalski@example.com" />
              </label>
            </div>
          </form>
          <div className="form-card">
            <h2>
              <Icon name="card" />
              Metoda płatności
            </h2>
            {[
              ['card', 'Karta płatnicza'],
              ['blik', 'Blik'],
              ['transfer', 'Przelew bankowy'],
            ].map(([value, label]) => (
              <button
                className={`payment-option ${payment === value ? 'selected' : ''}`}
                type="button"
                key={value}
                onClick={() => setPayment(value)}
              >
                <span></span>
                {label}
                <Icon name={value === 'transfer' ? 'home' : 'card'} />
              </button>
            ))}
          </div>
          <div className="security-box">
            <Icon name="shield" />
            <span>
              Twoje dane są chronione szyfrowaniem SSL. Dbamy o bezpieczeństwo
              każdej transakcji.
            </span>
          </div>
        </div>
        <aside className="checkout-summary">
          <h2>Podsumowanie zamówienia</h2>
          <div className="summary-product">
            <img src={paintSwatchImg} alt="" />
            <div>
              <h3>Farba wewnętrzna Premium 10L</h3>
              <p>Sztuk: 1</p>
              <strong>{formatPLN(total)}</strong>
            </div>
          </div>
          <hr />
          <dl>
            <div>
              <dt>Wartość produktów</dt>
              <dd>{formatPLN(total)}</dd>
            </div>
            <div>
              <dt>Dostawa (Kurier)</dt>
              <dd>{formatPLN(shipping)}</dd>
            </div>
          </dl>
          <div className="checkout-total">
            <span>Razem</span>
            <strong>{formatPLN(orderTotal)}</strong>
          </div>
          <Button variant="accent" icon="arrow" onClick={() => navigate('confirmation')} className="wide">
            Kupuję i płacę
          </Button>
          <p className="fine-print">
            Klikając przycisk, akceptujesz Regulamin oraz Politykę Prywatności.
          </p>
        </aside>
      </div>
    </section>
  )
}

function ConfirmationPage({ navigate }) {
  return (
    <section className="page-section tall">
      <div className="confirmation-hero">
        <span className="success-mark">
          <Icon name="check" />
        </span>
        <h1>Dziękujemy za zamówienie!</h1>
        <p className="eyebrow">Zamówienie #MT-123456</p>
        <p>
          Potwierdzenie zostało wysłane na Twój adres e-mail. Skontaktujemy się
          w celu ustalenia szczegółów dostawy lub realizacji powiązanych usług.
        </p>
      </div>
      <div className="order-layout">
        <div>
          <article className="order-card">
            <h2>Szczegóły zamówienia</h2>
            <OrderLine image={oakFloorImg} title="Dębowe deski podłogowe - Premium" meta="25 m²" price="4 250,00 zł" />
            <OrderLine image={paintBucketImg} title="Farba Ceramiczna - Biały Alabaster" meta="3 x 5L" price="597,00 zł" />
            <div className="order-total">
              <span>Suma całkowita</span>
              <strong>4 997,00 zł</strong>
            </div>
          </article>
          <article className="service-banner">
            <div>
              <p className="eyebrow">Usługi dodatkowe</p>
              <h2>Potrzebujesz ekipy do malowania?</h2>
              <p>
                Nasi fachowcy mogą zająć się realizacją Twojego projektu z
                gwarancją terminu i jakości wykończenia.
              </p>
            </div>
            <Button variant="accent" onClick={() => navigate('service')}>
              Sprawdź terminy
            </Button>
          </article>
        </div>
        <aside className="order-side">
          <article>
            <h2>
              <Icon name="truck" />
              Adres dostawy
            </h2>
            <p>Jan Kowalski</p>
            <p>ul. Budowlanych 42/12</p>
            <p>00-001 Warszawa</p>
            <p>Polska</p>
            <p>+48 123 456 789</p>
          </article>
          <article>
            <h2>Status realizacji</h2>
            <div className="timeline">
              <span className="done"></span>
              <div>
                <strong>Zamówienie przyjęte</strong>
                <p>Dzisiaj, 14:20</p>
              </div>
              <span></span>
              <div>
                <strong>Przygotowanie materiałów</strong>
                <p>Oczekiwane jutro</p>
              </div>
              <span></span>
              <div>
                <strong>Wysłano / Transport</strong>
                <p>Planowane: 15.10.2024</p>
              </div>
            </div>
          </article>
          <Button icon="home" onClick={() => navigate('home')} className="wide">
            Wróć na stronę główną
          </Button>
        </aside>
      </div>
    </section>
  )
}

function OrderLine({ image, title, meta, price }) {
  return (
    <div className="order-line">
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{meta}</p>
      </div>
      <strong>{price}</strong>
    </div>
  )
}

function ContactPage() {
  return (
    <>
      <section className="contact-hero" style={{ backgroundImage: `url(${blueprintsImg})` }}>
        <div>
          <h1>Skontaktuj się z nami</h1>
          <p>
            Jesteśmy gotowi, aby omówić szczegóły Twojego kolejnego projektu.
            Solidne rzemiosło zaczyna się od dobrej rozmowy.
          </p>
        </div>
      </section>

      <section className="contact-layout">
        <form className="contact-form">
          <h2>Napisz do nas</h2>
          <div className="two-fields">
            <label>
              Imię i nazwisko
              <input defaultValue="Jan Kowalski" />
            </label>
            <label>
              Adres E-mail
              <input defaultValue="jan@przyklad.pl" />
            </label>
          </div>
          <div className="two-fields">
            <label>
              Numer telefonu
              <input defaultValue="+48 000 000 000" />
            </label>
            <label>
              Temat zapytania
              <select defaultValue="">
                <option value="" disabled>
                  Wybierz temat...
                </option>
                <option>Malowanie</option>
                <option>Remont</option>
                <option>Zakup materiałów</option>
              </select>
            </label>
          </div>
          <label className="highlight-field">
            Opisz zakres prac (Malowanie / Remont)
            <span>
              Pomóż nam lepiej zrozumieć Twoje potrzeby. Podaj szacunkowy metraż,
              stan obecny oraz oczekiwany efekt.
            </span>
            <textarea defaultValue="Napisz tutaj..." />
          </label>
          <label>
            Dodatkowa wiadomość
            <textarea defaultValue="O co chciałbyś jeszcze zapytać?" />
          </label>
          <Button>Wyślij wiadomość</Button>
        </form>

        <aside className="contact-side">
          <article className="contact-card dark">
            <h2>Dane kontaktowe</h2>
            <ContactLine icon="map" title="Siedziba firmy" text="Modern Tradesman Co., ul. Budowlana 12, 00-001 Warszawa" />
            <ContactLine icon="phone" title="Telefon" text="+48 123 456 789, Pn - Pt: 7:00 - 17:00" />
            <ContactLine icon="mail" title="E-mail" text="kontakt@moderntradesman.pl" />
            <ContactLine icon="shield" title="Dane rejestrowe" text="NIP: 123-456-78-90, REGON: 123456789" />
          </article>
          <article className="contact-card">
            <h2>Szybkie zapytanie o wycenę malowania</h2>
            <p>
              Przygotuj odpowiedzi na poniższe pytania, a nasza wycena będzie
              gotowa szybciej.
            </p>
            <ul className="check-list">
              <li>Całkowity metraż ścian i sufitów?</li>
              <li>Czy występują pęknięcia do szpachlowania?</li>
              <li>Czy zabezpieczamy meble i podłogi?</li>
            </ul>
            <button className="download-link" type="button">
              Pobierz formularz wyceny (PDF)
              <Icon name="download" />
            </button>
          </article>
        </aside>
      </section>

      <section className="map-section">
        <div className="map-graphic" aria-label="Obszar działania w Warszawie">
          <span></span>
          <span></span>
          <span></span>
          <div>
            <Icon name="truck" />
            <strong>Obszar działania</strong>
            <p>Warszawa i okolice w promieniu 50 km.</p>
          </div>
        </div>
      </section>

      <FaqSection
        title="Często zadawane pytania"
        text="Zanim wyślesz wiadomość, sprawdź, czy nie odpowiedzieliśmy już na Twoje pytanie."
        items={faqContact}
        grid
      />
    </>
  )
}

function ContactLine({ icon, title, text }) {
  return (
    <div className="contact-line">
      <Icon name={icon} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

function FaqSection({ title, text, items, grid = false }) {
  return (
    <section className="content-section">
      <SectionHeader title={title} text={text} />
      <div className={grid ? 'faq-grid' : 'faq-list'}>
        {items.map(([question, answer]) => (
          <details className="faq-item" key={question} open={!grid}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default App
