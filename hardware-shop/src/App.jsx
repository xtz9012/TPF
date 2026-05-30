import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'

import { Footer, Header } from './components/layout'
import { AccountPage } from './pages/AccountPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { ConfirmationPage } from './pages/ConfirmationPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductPage } from './pages/ProductPage'
import { RegisterPage } from './pages/RegisterPage'
import { ServicePage } from './pages/ServicePage'
import { getInitialAccount, getNameFromEmail } from './utils/account'

const routePaths = {
  home: '/',
  service: '/service',
  product: '/product',
  cart: '/cart',
  checkout: '/checkout',
  confirmation: '/confirmation',
  contact: '/contact',
  login: '/login',
  register: '/register',
  account: '/account',
}

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem('theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getRouteName(pathname) {
  const route = pathname.replace(/^\/+/, '').split('/')[0]

  return route || 'home'
}

function AppShell() {
  const location = useLocation()
  const routerNavigate = useNavigate()
  const [theme, setTheme] = useState(getInitialTheme)
  const [quantity, setQuantity] = useState(1)
  const [payment, setPayment] = useState('card')
  const [account, setAccount] = useState(getInitialAccount)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (account) {
      window.localStorage.setItem('customerAccount', JSON.stringify(account))
      return
    }

    window.localStorage.removeItem('customerAccount')
  }, [account])

  const route = getRouteName(location.pathname)
  const cartTotal = useMemo(() => quantity * 149, [quantity])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const navigate = (page, section) => {
    const path = routePaths[page] || routePaths.home

    routerNavigate(path)

    if (section) {
      window.setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogin = (formData) => {
    const email = String(formData.get('email') || 'jan.kowalski@example.com')

    setAccount({
      name: getNameFromEmail(email),
      email,
      phone: '+48 123 456 789',
      company: 'Klient indywidualny',
      memberSince: 'Maj 2026',
    })

    navigate('account')
  }

  const handleRegister = (formData) => {
    const email = String(formData.get('email') || 'nowy.klient@example.com')
    const name = String(formData.get('name') || getNameFromEmail(email))
    const phone = String(formData.get('phone') || '+48 000 000 000')
    const company = String(formData.get('company') || 'Klient indywidualny')

    setAccount({
      name,
      email,
      phone,
      company,
      memberSince: 'Maj 2026',
    })

    navigate('account')
  }

  const handleLogout = () => {
    setAccount(null)
    navigate('login')
  }

  return (
    <>
      <Header
        account={account}
        route={route}
        navigate={navigate}
        theme={theme}
        toggleTheme={toggleTheme}
        onLogout={handleLogout}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage navigate={navigate} />} />
          <Route path="/service" element={<ServicePage navigate={navigate} />} />
          <Route path="/product" element={<ProductPage navigate={navigate} />} />
          <Route
            path="/cart"
            element={(
              <CartPage
                quantity={quantity}
                setQuantity={setQuantity}
                total={cartTotal}
                navigate={navigate}
              />
            )}
          />
          <Route
            path="/checkout"
            element={(
              <CheckoutPage
                payment={payment}
                setPayment={setPayment}
                navigate={navigate}
                quantity={quantity}
              />
            )}
          />
          <Route path="/confirmation" element={<ConfirmationPage navigate={navigate} quantity={quantity} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage account={account} navigate={navigate} onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage navigate={navigate} onRegister={handleRegister} />} />
          <Route path="/account" element={<AccountPage account={account} navigate={navigate} onLogout={handleLogout} />} />
          <Route path="*" element={<NotFoundPage navigate={navigate} />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
