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
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  )
}

const Total = ({course})=>{
  console.log(course.parts)
  const parts =course.parts
  let total = 0;
  parts.forEach(part => {
    total += part.exercises
  });
  console.log(total)
  return(
    <div>
        <h3>total of {total} exercises </h3>
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




const App = ()=>{
 
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  
  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App