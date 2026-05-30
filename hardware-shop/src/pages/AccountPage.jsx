import { images } from '../data/siteData'
import { Breadcrumb, Button, Icon, OrderLine } from '../components/ui'
import { formatPLN } from '../utils/format'

function AccountInfoRow({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

export function AccountPage({ account, navigate, onLogout }) {
  const { paintSwatchImg } = images

  if (!account) {
    return (
      <section className="page-section tall account-page">
        <Breadcrumb items={['Strona główna', 'Konto', 'Moje konto']} />
        <div className="account-empty">
          <p className="eyebrow">Moje konto</p>
          <h1>Zaloguj się, aby zobaczyć panel klienta</h1>
          <p>
            Panel konta pokazuje dane klienta, ostatnie zamówienia, zapytania o wycenę
            i status realizacji usług.
          </p>
          <div className="button-row">
            <Button icon="user" onClick={() => navigate('login')}>
              Zaloguj się
            </Button>
            <Button variant="secondary" onClick={() => navigate('register')}>
              Utwórz konto
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section tall account-page">
      <Breadcrumb items={['Strona główna', 'Konto', 'Moje konto']} />
      <div className="account-hero">
        <div>
          <p className="eyebrow">Moje konto</p>
          <h1>Dzień dobry, {account.name.split(' ')[0]}</h1>
          <p>
            Tu znajdziesz zamówienia, zapisane dane oraz bieżące sprawy związane
            z zakupami i usługami Modern Tradesman Co.
          </p>
          <div className="button-row">
            <Button onClick={() => navigate('product')}>Przejdź do produktów</Button>
            <Button variant="secondary" onClick={() => navigate('contact')}>
              Poproś o wycenę
            </Button>
          </div>
        </div>
        <aside className="account-id-card">
          <span className="success-mark small">
            <Icon name="user" />
          </span>
          <h2>{account.name}</h2>
          <p>{account.email}</p>
          <button type="button" onClick={onLogout}>
            Wyloguj
          </button>
        </aside>
      </div>

      <div className="account-dashboard">
        <article className="account-panel">
          <h2>Dane klienta</h2>
          <div className="account-info-list">
            <AccountInfoRow label="E-mail" value={account.email} />
            <AccountInfoRow label="Telefon" value={account.phone} />
            <AccountInfoRow label="Typ konta" value={account.company} />
            <AccountInfoRow label="Klient od" value={account.memberSince} />
          </div>
        </article>
        <article className="account-panel">
          <h2>Ostatnie zamówienie</h2>
          <OrderLine image={paintSwatchImg} title="Farba wewnętrzna Premium 10L" meta="2 szt. | W realizacji" price={formatPLN(298)} />
          <div className="account-status">
            <span></span>
            <div>
              <strong>Przygotowanie do wysyłki</strong>
              <p>Planowana dostawa: jutro po 12:00.</p>
            </div>
          </div>
        </article>
        <article className="account-panel">
          <h2>Wyceny i usługi</h2>
          <div className="account-service-list">
            <div>
              <strong>Malowanie mieszkania 42 m²</strong>
              <p>Wycena robocza, oczekuje na potwierdzenie metrażu.</p>
            </div>
            <div>
              <strong>Dobór materiałów</strong>
              <p>Rekomendowane farby, grunt i zestaw zabezpieczeń.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
