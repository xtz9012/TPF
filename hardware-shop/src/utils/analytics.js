import Hotjar from '@hotjar/browser'
import ReactGA from 'react-ga4'

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
const hotjarSiteId = Number(import.meta.env.VITE_HOTJAR_SITE_ID)
const hotjarVersion = Number(import.meta.env.VITE_HOTJAR_VERSION || 6)
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

export function initAnalytics() {
  if (hasGoogleAnalyticsConfig() && !isGoogleAnalyticsReady) {
    ReactGA.initialize(gaMeasurementId)
    isGoogleAnalyticsReady = true
  }

  if (hasHotjarConfig() && !isHotjarReady) {
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
    ReactGA.send({
      hitType: 'pageview',
      page,
      title,
    })
  }

  if (isHotjarReady) {
    Hotjar.stateChange(page)
  }
}
