import React from "react"
import Header from "../sections/Header"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <main>
        <Header/>
        {children}
      </main>
    </>
  )
}

export default Layout
