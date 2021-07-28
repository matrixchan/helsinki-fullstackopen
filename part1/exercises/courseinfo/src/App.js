import React from 'react'

const Header = (props)=>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props)=>{
  const part = props.part
  return(
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = (props)=>{
  const parts = props.parts


  return(

    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  )
}

const Total = (props)=>{
  return(
    <div>
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}


const App = ()=>{
 
  const course = {
    'name' : 'Half Stack application development',
    'parts' : [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  



  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App