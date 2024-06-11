import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import ROUTES from '~/constants/routes'

const Chat = lazy(() => import('~/pages/chat'))
const Config = lazy(() => import('~/pages/config'))
const NotFound = lazy(() => import('~/pages/notFound'))
const SplashScreen = lazy(() => import('~/pages/splashScreen'))

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    errorElement: <SplashScreen><NotFound /></SplashScreen>,
    element: <SplashScreen><Chat /></SplashScreen>
  },
  {
    path: ROUTES.CHAT,
    element: <SplashScreen><Chat /></SplashScreen>
  },
  {
    path: ROUTES.CHAT_INDEX,
    element: <SplashScreen><Chat /></SplashScreen>
  },
  {
    path: ROUTES.CONFIG,
    element: <SplashScreen><Config /></SplashScreen>
  }
])

export default router