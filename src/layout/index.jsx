import React from 'react'
import Sidebar from './Sidebar'

export default function Layout({children}) {
  return (
    <div className="w-full h-full">
      <Sidebar />
      {children}
    </div>
  )
}
