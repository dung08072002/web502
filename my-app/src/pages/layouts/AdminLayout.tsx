import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarAdmin from '../../components/SidebarAdmin'

const AdminLayout = () => {
  return (
    <div>
        <main>
            <Outlet/>
            <SidebarAdmin/>
        </main>
    </div>
  )
}

export default AdminLayout