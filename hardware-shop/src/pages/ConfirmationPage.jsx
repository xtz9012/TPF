import { images } from '../data/siteData'
import { Button, Icon, OrderLine } from '../components/ui'
import { formatPLN } from '../utils/format'

export function ConfirmationPage({ navigate, quantity }) {
  const { paintBucketImg, paintSwatchImg } = images

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
            <OrderLine image={paintSwatchImg} title="Farba wewnętrzna Premium 10L" meta={`${quantity} szt.`} price={formatPLN(quantity * 149)} />
            <OrderLine image={paintBucketImg} title="Dostawa (Kurier)" meta="Wysyłka w ciągu 24h" price={formatPLN(25)} />
            <div className="order-total">
              <span>Suma całkowita: {formatPLN(quantity * 149 + 25)}</span>
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
