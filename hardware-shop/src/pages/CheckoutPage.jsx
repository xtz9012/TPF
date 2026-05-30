import { images } from '../data/siteData'
import { Breadcrumb, Button, Icon } from '../components/ui'
import { formatPLN } from '../utils/format'

export function CheckoutPage({ payment, setPayment, navigate, quantity }) {
  const { paintSwatchImg } = images

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
              <p>Sztuk: {quantity}</p>
              <strong>{formatPLN(quantity * 149)}</strong>
            </div>
          </div>
          <hr />
          <dl>
            <div>
              <dt>Wartość produktów</dt>
              <dd>{formatPLN(quantity * 149)}</dd>
            </div>
            <div>
              <dt>Dostawa (Kurier)</dt>
              <dd>{formatPLN(25)}</dd>
            </div>
          </dl>
          <div className="checkout-total">
            <span>Razem</span>
            <strong>{formatPLN(quantity * 149 + 25)}</strong>
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
