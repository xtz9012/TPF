import { images, serviceProducts } from '../data/siteData'
import { Breadcrumb, Button, FaqSection, FeatureLine, FeatureTile, Icon, ProductCard, SectionHeader } from '../components/ui'

export function ServicePage({ navigate }) {
  const { painterImg } = images

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
