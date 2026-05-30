import { Breadcrumb, Button } from '../components/ui'

export function RegisterPage({ navigate, onRegister }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onRegister(new FormData(event.currentTarget))
  }

  return (
    <section className="page-section tall auth-page">
      <Breadcrumb items={['Strona główna', 'Konto', 'Rejestracja']} />
      <div className="auth-layout reverse">
        <form className="auth-card" onSubmit={handleSubmit}>
          <h2>Utwórz konto</h2>
          <label>
            Imię i nazwisko
            <input name="name" defaultValue="Jan Kowalski" required />
          </label>
          <label>
            Adres e-mail
            <input name="email" type="email" defaultValue="jan.kowalski@example.com" required />
          </label>
          <div className="two-fields">
            <label>
              Telefon
              <input name="phone" defaultValue="+48 123 456 789" required />
            </label>
            <label>
              Firma
              <input name="company" defaultValue="Klient indywidualny" />
            </label>
          </div>
          <label>
            Hasło
            <input name="password" type="password" defaultValue="demo1234" minLength="6" required />
          </label>
          <label className="checkbox-line">
            <input type="checkbox" required defaultChecked />
            Akceptuję regulamin sklepu oraz politykę prywatności.
          </label>
          <Button type="submit" icon="check" className="wide">
            Zarejestruj konto
          </Button>
          <button className="auth-switch" type="button" onClick={() => navigate('login')}>
            Mam już konto
          </button>
        </form>
        <div className="auth-copy">
          <p className="eyebrow">Nowe konto</p>
          <h1>Załóż konto klienta</h1>
          <p>
            Konto przyspiesza składanie zamówień i pomaga wracać do rozmów o wycenach,
            produktach oraz usługach remontowych.
          </p>
          <div className="auth-highlight">
            <strong>Co zyskujesz?</strong>
            <span>Panel zamówień, zapisane dane kontaktowe i szybki dostęp do wycen.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
