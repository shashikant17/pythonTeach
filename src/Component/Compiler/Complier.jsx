import React from 'react'
import './compiler.css'
const Complier = () => {
  return (
    <>
    <section id="#compiler">
      <div className="container">
      <div className="question_area">
          <h1>Question Heading</h1>
          <p>
              question description
          </p>
      </div>
      <div className="code_area">
      <label>Enter value : </label>
        <input type="textarea" 
          name="textValue"
          onChange={this.handleChange}/> 
      </div>
      </div></section>
    </>
  )
}

export default Complier