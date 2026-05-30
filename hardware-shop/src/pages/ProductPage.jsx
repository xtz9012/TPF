import { faqProduct, images, paintProducts } from '../data/siteData'
import { Breadcrumb, Button, FaqSection, FeatureLine, Icon, ProductCard, SectionHeader } from '../components/ui'

export function ProductPage({ navigate }) {
  const { paintSwatchImg } = images

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
