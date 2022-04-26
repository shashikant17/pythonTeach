import React from 'react'
import './content.css'
import { GrAchievement } from 'react-icons/gr'
import ChapterData from './ChapterData'
import {CA} from './CA'
const Content = () => {
  return (
    <div className="container">
      <div className="chapter-content">
        <article>
          <CA/>
        </article>
      </div>
      <div className="chapter-list">
        chapter 1

      </div>
    </div>
  )
}

export default Content
