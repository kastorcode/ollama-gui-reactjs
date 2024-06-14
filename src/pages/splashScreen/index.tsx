import { Suspense, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import AppBoot from '~/services/appBoot'
import { Container, Logo } from './style'
import './animations.css'

interface SplashScreenProps {
  children ?: JSX.Element
}

function SplashScreen ({ children } : SplashScreenProps) {

  const [booting, setBooting] = useState(true)

  useEffect(() => {
    if (!children) return
    if (AppBoot.booted) return
    AppBoot.booted = true
    AppBoot.run().then(() => setBooting(false))
  }, [])

  return (
    <>
    <CSSTransition
      classNames='anim'
      in={booting}
      timeout={500}
      unmountOnExit={true}
    >
      <Container>
        <Logo src={`${process.env.PUBLIC_URL}/favicon.svg`} />
      </Container>
    </CSSTransition>
    { children }
    </>
  )

}

export default function LoadingWrapper ({ children } : SplashScreenProps) {

  return (
    <Suspense fallback={<SplashScreen />}>
      <SplashScreen>{ children }</SplashScreen>
    </Suspense>
  )

}