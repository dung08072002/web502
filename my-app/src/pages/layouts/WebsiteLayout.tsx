import React from 'react'
import { Outlet } from 'react-router-dom'

const WebsiteLayout = () => {
  return (
      <div>
            <header>
                Header Website
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