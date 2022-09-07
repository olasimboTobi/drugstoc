import React from 'react'
import "./Sidebar.css"
import SidebarTags from './SidebarTags'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="tags">Tags</div>
      <SidebarTags title="Custom task" className="custom content--tag"/>
      <SidebarTags title="Marketing & Sales" className="sales content--tag"/>
      <SidebarTags title="Integrations" className="integrate content--tag"/>
      <SidebarTags title="Optimizations" className="optimize content--tag"/>
      <SidebarTags title="Deployment" className="deploy content--tag"/>
      <SidebarTags title="Testing" className="testing content--tag"/>
      
      <br/>
      <div className="price--range">Task Price Range</div>
      <SidebarTags title="Less than #100" className="first--price content--tag"/>
      <SidebarTags title="#100 - #300" className="second--price content--tag"/>
      <SidebarTags title="#301 - #900" className="third--price content--tag"/>
      <SidebarTags title="Above #900" className="fourth--price content--tag"/>
      
    </div>
  )
}

export default Sidebar;