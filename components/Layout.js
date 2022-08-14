import React from 'react'
import Sidebar from './Sidebar'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  const homePage = router.pathname === '/'
  const hierachiPage = router.pathname === '/emp-hierachi'
  return (
    <div className="max-w-screen flex h-screen max-h-screen bg-[#F5F5F5]  ">
      <Sidebar />
      <div className="h-full overflow-y-scroll px-4 py-8 w-full ">
        <h1 className="  text-3xl mb-8">
          {homePage && 'Employees Table'}
          {hierachiPage && 'Employee Hierarchical'}
          {!hierachiPage && !homePage && 'Employee Details'}
        </h1>
        {children}
      </div>
    </div>
  )
}
