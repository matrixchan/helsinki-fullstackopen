import React,{useState} from 'react'


const App = () => {
  //save clicks of each button to won state
  const [good,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad,setBad] = useState(0)


  return(
    <div>
      <h1>give Feedback</h1>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </div>
  )
}




export default App