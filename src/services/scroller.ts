import { RefObject } from 'react'

export default function scroller (ref : RefObject<HTMLElement>, page : 0 | 1) {
  const pages = [
    0, document.documentElement.scrollWidth
  ]
  ref.current?.scrollTo({
    behavior: 'smooth', left: pages[page]
  })
}