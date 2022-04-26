import React from 'react'
import './body.css'
import ChapterSidebar from './Sidebar/ChapterSidebar'
const Body = () => {
  return (
    <div className="body_container">
      <article className="body_container_left">
        content
      </article>
      <div className="body_container_right">
        <ChapterSidebar/>
      </div>
    </div>
  )
}

export default Body