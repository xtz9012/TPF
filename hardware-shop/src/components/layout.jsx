import { useState } from 'react'
import { navItems } from '../data/siteData'
import { Button, Icon } from './ui'

function AccountMegaMenu({ account, isActive, navigate, onLogout }) {
  const [isOpen, setIsOpen] = useState(false)

  const goTo = (page) => {
    setIsOpen(false)
    navigate(page)
  }

  const logout = () => {
    setIsOpen(false)
    onLogout()
  }

  return (
    <div className="account-menu-wrap" onKeyDown={(event) => event.key === 'Escape' && setIsOpen(false)}>
      <button
        className={`account-trigger ${isActive ? 'is-active' : ''}`}
        type="button"
        aria-label="Konto klienta"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((current) => !current)}
      >
        <Icon name="user" />
        {account && <span className="account-status-dot" aria-hidden="true"></span>}
      </button>
      <div className={`account-mega ${isOpen ? 'is-open' : ''}`} role="menu">
        <div className="account-mega-header">
          <div>
            <p className="eyebrow">Konto klienta</p>
            <h2>{account ? `Cześć, ${account.name.split(' ')[0]}` : 'Witaj w Modern Tradesman'}</h2>
            <p>
              Zarządzaj zamówieniami, wycenami i danymi kontaktowymi w jednym miejscu.
            </p>
          </div>
          {account ? (
            <button className="account-menu-logout" type="button" onClick={logout}>
              Wyloguj
            </button>
          ) : (
            <button className="account-menu-logout" type="button" onClick={() => goTo('login')}>
              Zaloguj
            </button>
          )}
        </div>
        <div className="account-mega-grid">
          <button type="button" role="menuitem" onClick={() => goTo('login')}>
            <Icon name="user" />
            <strong>Logowanie</strong>
            <span>Wejdź do panelu klienta i sprawdź ostatnie zamówienia.</span>
          </button>
          <button type="button" role="menuitem" onClick={() => goTo('register')}>
            <Icon name="shield" />
            <strong>Rejestracja</strong>
            <span>Załóż konto, żeby szybciej wysyłać zapytania o wyceny.</span>
          </button>
          <button type="button" role="menuitem" onClick={() => goTo('account')}>
            <Icon name="home" />
            <strong>Moje konto</strong>
            <span>Dane klienta, adres, statusy i historia zakupów.</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      className={`theme-toggle ${isDark ? 'is-dark' : ''}`}
      type="button"
      aria-label={isDark ? 'Wlacz tryb jasny' : 'Wlacz tryb ciemny'}
      aria-pressed={isDark}
      onClick={onToggle}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-orbit">
          <span className="theme-sun"></span>
          <span className="theme-moon"></span>
        </span>
      </span>
    </button>
  )
}

export function Header({ account, route, navigate, theme, toggleTheme, onLogout }) {
  const activeGroup =
    route === 'service'
      ? 'service'
      : ['product', 'cart', 'checkout', 'confirmation'].includes(route)
        ? 'product'
        : route

  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => navigate('home')}>
        Modern Tradesman Co.
      </button>
      <nav className="main-nav" aria-label="Główna nawigacja">
        {navItems.map((item) => (
          <button
            className={
              activeGroup === item.page && !(route === 'home' && item.section)
                ? 'is-active'
                : ''
            }
            key={item.label}
            type="button"
            onClick={() => navigate(item.page, item.section)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="header-tools">
        <button type="button" aria-label="Koszyk" onClick={() => navigate('cart')}>
          <Icon name="cart" />
        </button>
        <AccountMegaMenu
          account={account}
          isActive={['login', 'register', 'account'].includes(route)}
          navigate={navigate}
          onLogout={onLogout}
        />
        <button type="button" aria-label="Szukaj">
          <Icon name="search" />
        </button>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <button className="quote-button" type="button" onClick={() => navigate('contact')}>
          Poproś o wycenę
        </button>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Modern Tradesman Co.</strong>
        <p>© 2024 Modern Tradesman Construction. Zbudowane na solidnych fundamentach.</p>
        <div className="social-links">
          <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" title="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://youtube.com" title="YouTube" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
      <nav aria-label="Linki stopki">
        <a href="#privacy">Polityka Prywatności</a>
        <a href="#terms">Regulamin Sklepu</a>
        <a href="#returns">Zwroty i Reklamacje</a>
        <a href="#accessibility">Ustawienia Dostępności</a>
      </nav>
    </footer>
  )
}

export { Button }
