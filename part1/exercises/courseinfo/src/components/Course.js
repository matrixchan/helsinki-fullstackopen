import React from 'react'

const Header = ({course})=>{
    return(
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }
  
  const Part = ({part})=>{
  
    return(
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Content = ({course})=>{
    const parts = course.parts
  
    return(
  
      <div>
          <div>
              { parts.map((part) => <Part part={part} />)}
          </div>
      </div>
    )
  }
  
  const Total = ({course})=>{
    console.log(course.parts)
    const parts =course.parts
  
    const sum = parts.reduce((total, part) => total + part.exercises, 0)
  
    return(
      <div>
          <strong>total of {sum} exercises </strong>
      </div>
    )
  }
  
  
  
  const Course = ({course})=>{
  
    return(
      <div>
        <Header course={course} />
        <Content course = {course}/>
        <Total course={course}/>
      </div>
    )
    
  }
  

  export default Course
  
  