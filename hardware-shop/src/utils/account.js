export function getInitialAccount() {
  const savedAccount = window.localStorage.getItem('customerAccount')

  if (!savedAccount) {
    return null
  }

  try {
    return JSON.parse(savedAccount)
  } catch {
    return null
  }
}

export function getNameFromEmail(email) {
  const fallbackName = email.split('@')[0].replace(/[._-]+/g, ' ')

  return (
    fallbackName
      .split(' ')
      .filter(Boolean)
      .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
      .join(' ') || 'Klient'
  )
}
