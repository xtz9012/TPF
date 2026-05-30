import { Breadcrumb, Button, FeatureLine } from '../components/ui'

export function LoginPage({ account, navigate, onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(new FormData(event.currentTarget))
  }

  return (
    <section className="page-section tall auth-page">
      <Breadcrumb items={['Strona główna', 'Konto', 'Logowanie']} />
      <div className="auth-layout">
        <div className="auth-copy">
          <p className="eyebrow">Panel klienta</p>
          <h1>Zaloguj się do konta</h1>
          <p>
            Sprawdź status zamówień, wróć do zapisanych wycen i szybciej
            zamawiaj materiały do kolejnych prac.
          </p>
          <div className="auth-benefits">
            <FeatureLine text="Historia zamówień i status dostawy w jednym widoku." />
            <FeatureLine text="Dane kontaktowe i adresowe dostępne przy kolejnych zakupach." />
            <FeatureLine text="Szybki powrót do zapytań o usługę malowania lub remontu." />
          </div>
        </div>
        <form className="auth-card" onSubmit={handleSubmit}>
          <h2>Logowanie</h2>
          <label>
            Adres e-mail
            <input
              name="email"
              type="email"
              defaultValue={account?.email || 'jan.kowalski@example.com'}
              required
            />
          </label>
          <label>
            Hasło
            <input name="password" type="password" defaultValue="demo1234" minLength="6" required />
          </label>
          <div className="auth-options">
            <label className="checkbox-line">
              <input type="checkbox" defaultChecked />
              Zapamiętaj mnie
            </label>
            <button type="button" onClick={() => navigate('register')}>
              Nie mam konta
            </button>
          </div>
          <Button type="submit" icon="user" className="wide">
            Zaloguj się
          </Button>
          <p className="fine-print">
            To wersja demonstracyjna formularza. Dane zostaną zapisane lokalnie w przeglądarce.
          </p>
        </form>
      </div>
    </section>
  )
}
