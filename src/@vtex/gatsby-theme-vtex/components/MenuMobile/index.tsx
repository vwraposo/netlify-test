import React, { Fragment, lazy, useEffect, useState } from 'react'
import { Button } from '@vtex/store-ui'
import SuspenseDevice from '@vtex/gatsby-theme-vtex/src/components/Suspense/Device'

const preloadDrawer = () => import('./Drawer')

const MinicartDrawer = lazy(preloadDrawer)

export const MenuMobile = () => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!isOpen)

  useEffect(() => {
    const handler = window.requestIdleCallback(preloadDrawer)

    return () => window.cancelIdleCallback(handler)
  }, [])

  const variant = 'header.menu.mobile'

  return (
    <Fragment>
      <Button
        aria-label="Open Cart"
        variant={`${variant}.button`}
        onClick={toggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#00397b"
          width="24px"
          height="24px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
        </svg>
      </Button>
      {isOpen ? (
        <SuspenseDevice device="mobile" fallback={null}>
          <MinicartDrawer variant={variant} isOpen onClose={toggle} />
        </SuspenseDevice>
      ) : null}
    </Fragment>
  )
}
