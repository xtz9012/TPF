import { advicePosts, images, paintProducts, serviceCards } from '../data/siteData'
import { Button, FeatureTile, Icon, ProductCard, SectionHeader } from '../components/ui'

export function HomePage({ navigate }) {
  const { blueprintsImg, paintBucketImg, painterImg, toolsImg } = images

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
          <FeatureTile icon="paint" title="Usługi remontowe" text="Profesjonalne wykonanie i gwarancja jakości." />
          <FeatureTile icon="cart" title="Produkty budowlane" text="Sprawdzone materiały w najlepszych cenach." />
          <FeatureTile icon="card" title="Wycena prac" text="Szybka i bezpłatna wycena Twojego projektu." />
          <FeatureTile icon="tool" title="Porady" text="Praktyczna wiedza i inspiracje remontowe." />
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
          <FeatureTile icon="paint" title="Dobieramy farbę" text="Dopasowaną do potrzeb" />
          <FeatureTile icon="cart" title="Dostarczamy akcesoria" text="Materiały ochronne i narzędzia" />
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
          <SectionHeader align="left" title="Przykładowe realizacje" text="Efekty naszej pracy u zadowolonych klientów." />
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

      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Bądź na bieżąco z najnowszymi poradami i promocjami</h2>
          <p>Subskrybuj nasz newsletter i otrzymuj inspiracje remontowe oraz specjalne oferty.</p>
          <form
            className="newsletter-form"
            onSubmit={(event) => {
              event.preventDefault()
              alert('Dziękujemy za subskrypcję! Potwierdzenie wysłane na Twój adres e-mail.')
            }}
          >
            <input type="email" placeholder="Twój adres e-mail" required />
            <button type="submit">Subskrybuj</button>
          </form>
        </div>
      </section>
    </>
  )
}
