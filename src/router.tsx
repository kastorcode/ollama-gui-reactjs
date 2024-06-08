import { createBrowserRouter } from 'react-router-dom'

import ROUTES from '~/constants/routes'
import Chat from '~/pages/chat'
import Config from '~/pages/config'
import NotFound from '~/pages/notFound'


const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    errorElement: <NotFound />,
    element: <Chat />
  },
  {
    path: ROUTES.CONFIG,
    element: <Config />
  }
])


export default router