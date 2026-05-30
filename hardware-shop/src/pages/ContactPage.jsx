import { faqContact, images } from '../data/siteData'
import { Button, FaqSection, Icon } from '../components/ui'

function ContactLine({ icon, title, text }) {
  return (
    <div className="contact-line">
      <Icon name={icon} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export function ContactPage() {
  const { blueprintsImg } = images

  return (
    <>
      <section className="contact-hero" style={{ backgroundImage: `url(${blueprintsImg})` }}>
        <div>
          <h1>Skontaktuj się z nami</h1>
          <p>
            Jesteśmy gotowi, aby omówić szczegóły Twojego kolejnego projektu.
            Solidne rzemiosło zaczyna się od dobrej rozmowy.
          </p>
        </div>
      </section>

      <section className="contact-layout">
        <form className="contact-form">
          <h2>Napisz do nas</h2>
          <div className="two-fields">
            <label>
              Imię i nazwisko
              <input defaultValue="Jan Kowalski" />
            </label>
            <label>
              Adres E-mail
              <input defaultValue="jan@przyklad.pl" />
            </label>
          </div>
          <div className="two-fields">
            <label>
              Numer telefonu
              <input defaultValue="+48 000 000 000" />
            </label>
            <label>
              Temat zapytania
              <select defaultValue="">
                <option value="" disabled>
                  Wybierz temat...
                </option>
                <option>Malowanie</option>
                <option>Remont</option>
                <option>Zakup materiałów</option>
              </select>
            </label>
          </div>
          <label className="highlight-field">
            Opisz zakres prac (Malowanie / Remont)
            <span>
              Pomóż nam lepiej zrozumieć Twoje potrzeby. Podaj szacunkowy metraż,
              stan obecny oraz oczekiwany efekt.
            </span>
            <textarea defaultValue="Napisz tutaj..." />
          </label>
          <label>
            Dodatkowa wiadomość
            <textarea defaultValue="O co chciałbyś jeszcze zapytać?" />
          </label>
          <Button>Wyślij wiadomość</Button>
        </form>

        <aside className="contact-side">
          <article className="contact-card dark">
            <h2>Dane kontaktowe</h2>
            <ContactLine icon="map" title="Siedziba firmy" text="Modern Tradesman Co., ul. Budowlana 12, 00-001 Warszawa" />
            <ContactLine icon="phone" title="Telefon" text="+48 123 456 789, Pn - Pt: 7:00 - 17:00" />
            <ContactLine icon="mail" title="E-mail" text="kontakt@moderntradesman.pl" />
            <ContactLine icon="shield" title="Dane rejestrowe" text="NIP: 123-456-78-90, REGON: 123456789" />
          </article>
          <article className="contact-card">
            <h2>Szybkie zapytanie o wycenę malowania</h2>
            <p>
              Przygotuj odpowiedzi na poniższe pytania, a nasza wycena będzie
              gotowa szybciej.
            </p>
            <ul className="check-list">
              <li>Całkowity metraż ścian i sufitów?</li>
              <li>Czy występują pęknięcia do szpachlowania?</li>
              <li>Czy zabezpieczamy meble i podłogi?</li>
            </ul>
            <button
              className="download-link"
              type="button"
              onClick={() => alert('Formularz wyceny będzie dostępny do pobrania wkrótce. Skontaktuj się z nami, aby otrzymać formularz e-mailowo.')}
            >
              Pobierz formularz wyceny (PDF)
              <Icon name="download" />
            </button>
          </article>
        </aside>
      </section>

      <section className="map-section">
        <div className="map-graphic" aria-label="Obszar działania w Warszawie">
          <span></span>
          <span></span>
          <span></span>
          <div>
            <Icon name="truck" />
            <strong>Obszar działania</strong>
            <p>Warszawa i okolice w promieniu 50 km.</p>
          </div>
        </div>
      </section>

      <FaqSection
        title="Często zadawane pytania"
        text="Zanim wyślesz wiadomość, sprawdź, czy nie odpowiedzieliśmy już na Twoje pytanie."
        items={faqContact}
        grid
      />
    </>
  )
}
