import { Suspense, useEffect, useState } from 'react'

import AppBoot from '~/services/appBoot'
import { Container, Logo } from './style'

interface SplashScreenProps {
  children : JSX.Element
}

function SplashScreen () {

  return (
    <Container>
      <Logo src={`${process.env.PUBLIC_URL}/favicon.svg`} />
    </Container>
  )

}

export default function LoadingWrapper ({ children } : SplashScreenProps) {

  const [booting, setBooting] = useState(true)

  useEffect(() => {
    AppBoot.run().then(() => setBooting(false))
  }, [])

  return (
    <Suspense fallback={<SplashScreen />}>
      { booting ? <SplashScreen /> : children }
    </Suspense>
  )

}