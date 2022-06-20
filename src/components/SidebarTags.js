import React from 'react'
import './SidebarTags.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

function SidebarTags({title}) {
  return (
    <div className="sidebar--tags">
      <CheckBoxOutlineBlankIcon className="sidebarTags--icon"/>
      <h4>{title}</h4>
    </div>
  )
}

export default SidebarTags;