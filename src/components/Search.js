import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import SortIcon from '@material-ui/icons//Sort';
import './Search.css'

function Search() {
  return (
    <div className="search--sort">
        <div className="search--icon">
          <SearchIcon className="search--logo"/>
          <input type="search" className="search" placeholder="Search Keyword"/>
        </div>
        <div className="sort--icon">
          <div className="pipe">|</div>
          <div className="sort--text">sort by</div>
          <SortIcon className="sort--logo"/>
        </div>
    </div>
  )
}

export default Search