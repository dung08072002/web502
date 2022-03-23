import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuNavLink from '../../components/MenuNavLink'

const WebsiteLayout = () => {
  return (
      <div>
            <header>
                <MenuNavLink />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                Footer
            </footer>
    </div>
  )
}

export default WebsiteLayout