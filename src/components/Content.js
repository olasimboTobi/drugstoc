import React from 'react'
import Sidebar from "./Sidebar"
import Display from "./Display"
import './Content.css'

function Content() {
  return (
    <div className="content">
        <Sidebar/>
        <Display/>
    </div>
  )
}

export default Content;