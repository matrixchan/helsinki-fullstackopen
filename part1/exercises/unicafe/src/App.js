import React,{useState} from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistic = (props)=>{
  const {text,value}= props
  return(
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = (props)=>{
  const {good, neutral, bad} = props
  let all = good + neutral + bad
  let positive = good * 100 / all
  let average = (good * 1 + bad * -1) / all


  if(all === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <div>
      <table>
      <tbody>
        <Statistic text="good" value = { good } />
        <Statistic text="neutral" value ={ neutral} />
        <Statistic text="bad" value ={ bad } />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive + " %"} />
      </tbody>
      </table>

    </div>
  )
}



const App = () => {
  //save clicks of each button to won state
  const [good,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const goodByOne = ()=>setGood(good + 1)
  const neutralOne = ()=>setNeutral(neutral + 1)
  const badOne = ()=>setBad(bad + 1 )


  return(
    <div>
      <h1>give Feedback</h1>
      <Button handleClick={goodByOne} text={"good"}/>
      <Button handleClick={neutralOne} text={"neutral"} />
      <Button handleClick={badOne} text={"bad"} />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App