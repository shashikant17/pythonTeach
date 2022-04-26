import React from 'react'
import './chaptersidebar.css'
import { Chapterdata } from './Chapterdata'

function ChapterSidebar() {
  return (
    <div>
      <div className="siderbar">
        <ul classname="Chapterlist">
          {Chapterdata.map((val, key) => {
          return (
            <li key={key} classname="row" onClick={()=>{window.location.pathname=val.link;}}>{" "}
              <div id="icon"className='row_icon'>{val.icon}</div>
              <div id="title" className='row_title'>{val.title}</div>
            <div></div>
            </li>
          )})}
        </ul>
      </div>
    </div>
  )
}

export default ChapterSidebar