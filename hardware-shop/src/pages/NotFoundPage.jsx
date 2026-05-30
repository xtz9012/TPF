import { Button } from '../components/ui'

export function NotFoundPage({ navigate }) {
  return (
    <section className="page-section tall not-found-page">
      <div className="account-empty">
        <p className="eyebrow">404</p>
        <h1>Nie znaleziono strony</h1>
        <p>
          Ten adres nie prowadzi do żadnego widoku w sklepie. Wróć na stronę główną
          albo przejdź do kontaktu, jeśli szukasz wyceny.
        </p>
        <div className="button-row">
          <Button icon="home" onClick={() => navigate('home')}>
            Strona główna
          </Button>
          <Button variant="secondary" onClick={() => navigate('contact')}>
            Kontakt
          </Button>
        </div>
      </div>
    </section>
  )
}
