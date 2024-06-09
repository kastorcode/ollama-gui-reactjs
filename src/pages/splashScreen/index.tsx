import { useEffect, useState } from 'react'

import AppBoot from '~/services/appBoot'
import { Container, Logo } from './style'

interface SplashScreenProps {
  children : JSX.Element
}

export default function SplashScreen ({ children } : SplashScreenProps) {

  const [booting, setBooting] = useState(true)

  useEffect(() => {
    AppBoot.run().then(() => setBooting(false))
  }, [])

  if (booting) {
    return (
      <Container>
        <Logo src={`${process.env.PUBLIC_URL}/favicon.svg`} />
      </Container>
    )
  }

  return children

}