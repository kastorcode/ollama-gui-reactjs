import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import ROUTES from '~/constants/routes'

export default function NotFound () {

  const navigate = useNavigate()

  useEffect(() => {
    navigate(ROUTES.ROOT)
  })

  return null

}