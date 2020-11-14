import { useCallback, useEffect, useState } from 'react'
import { throttle } from '@vtex/store-ui'

const wait = 300
const threshold = 10

function useHideElementOnScroll() {
  const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0)
  const [hidden, setHidden] = useState<boolean>(false)

  // Throttle setState updates to improve performance
  const setHiddenThrottled = useCallback(throttle(setHidden, wait), [])
  const setPrevScrollPositionThrottled = useCallback(
    throttle(setPrevScrollPosition, wait),
    []
  )

  // Hide when scrolling down, show when scrolling up.
  const scrollListener = useCallback(() => {
    const currentScrollPosition = window.pageYOffset

    // Do not throttle when below the threshold to avoid
    // missing unhiding the element
    if (currentScrollPosition <= threshold) {
      setHidden(false)
      setPrevScrollPosition(window.pageYOffset)

      return
    }

    if (prevScrollPosition < currentScrollPosition) {
      setHiddenThrottled(true)
    } else {
      setHiddenThrottled(false)
    }

    setPrevScrollPositionThrottled(window.pageYOffset)
  }, [prevScrollPosition, setHiddenThrottled, setPrevScrollPositionThrottled])

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [scrollListener])

  return hidden
}

export default useHideElementOnScroll
