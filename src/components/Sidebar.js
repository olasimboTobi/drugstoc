import React from 'react'
import "./Sidebar.css"
import SidebarTags from './SidebarTags'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="tags">Tags</div>
      <SidebarTags title="Custom task"/>
      <SidebarTags title="Marketing & Sales"/>
      <SidebarTags title="Integrations"/>
      <SidebarTags title="Optimizations"/>
      <SidebarTags title="Deployment"/>
      <SidebarTags title="Testing"/>
      
      <br/>
      <div className="price--range">Task Price Range</div>
      <SidebarTags title="Less than #100"/>
      <SidebarTags title="#100 - #300"/>
      <SidebarTags title="#301 - #900"/>
      <SidebarTags title="Above #900"/>
      
    </div>
  )
}

export default Sidebar;