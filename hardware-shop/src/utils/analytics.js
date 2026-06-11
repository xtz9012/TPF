import Hotjar from '@hotjar/browser'

const defaultGaMeasurementId = 'G-RKTJC1EQW6'
const defaultHotjarSiteId = 874352
const defaultContentsquareTagUrl = 'https://t.contentsquare.net/uxa/2d1deeef69c9c.js'

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || defaultGaMeasurementId
const hotjarSiteId = Number(import.meta.env.VITE_HOTJAR_SITE_ID || defaultHotjarSiteId)
const hotjarVersion = Number(import.meta.env.VITE_HOTJAR_VERSION || 6)
const contentsquareTagUrl = import.meta.env.VITE_CONTENTSQUARE_TAG_URL || defaultContentsquareTagUrl
const analyticsDebug = import.meta.env.VITE_ANALYTICS_DEBUG === 'true'

let isGoogleAnalyticsReady = false
let isHotjarReady = false
let lastTrackedPage = ''

function hasGoogleAnalyticsConfig() {
  return Boolean(gaMeasurementId)
}

function hasHotjarConfig() {
  return Number.isFinite(hotjarSiteId) && hotjarSiteId > 0
}

function loadGoogleTag() {
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }

  if (!document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}"]`)) {
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`
    script.async = true
    document.head.appendChild(script)
  }

  window.gtag('js', new Date())
  window.gtag('config', gaMeasurementId)
  lastTrackedPage = `${window.location.pathname}${window.location.search}`
}

function loadContentsquareTag() {
  if (!contentsquareTagUrl || document.querySelector(`script[src="${contentsquareTagUrl}"]`)) {
    return
  }

  const script = document.createElement('script')
  script.src = contentsquareTagUrl
  script.defer = true
  script.dataset.analytics = 'hotjar-contentsquare'
  document.head.appendChild(script)
}

export function initAnalytics() {
  if (hasGoogleAnalyticsConfig() && !isGoogleAnalyticsReady) {
    loadGoogleTag()
    isGoogleAnalyticsReady = true
  }

  if (hasHotjarConfig() && !isHotjarReady) {
    loadContentsquareTag()
    Hotjar.init(hotjarSiteId, hotjarVersion, { debug: analyticsDebug })
    isHotjarReady = true
  }
}

export function trackPageView(page, title = document.title) {
  if (!page || page === lastTrackedPage) {
    return
  }

  lastTrackedPage = page

  if (isGoogleAnalyticsReady) {
    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: `${window.location.origin}${page}`,
      page_path: page,
    })
  }

  if (isHotjarReady) {
    Hotjar.stateChange(page)
  }
}
