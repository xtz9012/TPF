import { images, paintProducts } from '../data/siteData'
import { Breadcrumb, Button, Icon, ProductCard } from '../components/ui'
import { formatPLN } from '../utils/format'

export function CartPage({ quantity, setQuantity, total, navigate }) {
  const { paintSwatchImg } = images

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
            <button
              type="button"
              onClick={() => alert('Kodów rabatowych nie ma dostępnych w tej chwili. Sprawdź naszą stronę główną aby znaleźć aktualne promocje.')}
            >
              Zastosuj
            </button>
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
