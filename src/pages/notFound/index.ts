import ROUTES from '~/constants/routes'


export default function NotFound () {
  window.location.href = ROUTES.ROOT
  return null
}