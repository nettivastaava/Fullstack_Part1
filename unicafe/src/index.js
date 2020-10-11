import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <p>
      <h1>give feedback</h1>
      </p>
      <Button handleClick={()=> setGood(good+1)} text="good"/>
      <Button handleClick={()=> setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={()=> setBad(bad+1)} text="bad"/>
      <p>
        <h1>statistics</h1>
      </p>
      <p>
      <Statistics good={good} neutral={neutral} bad={bad} total={good+neutral+bad}/>
      </p>
      
    </div>
  )
}

const Statistics = (props) => {
  if (props.total==0) {
    return(
      <div>
        no feedback given
      </div>
    )
  }
  
  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td><Feedback type="good" count={props.good}/></td>
          </tr>
          <tr>
            <td><Feedback type="neutral" count={props.neutral}/></td>
          </tr>
          <tr>
            <td><Feedback type="bad" count={props.bad}/></td>
          </tr>
          <tr>
            <td>all</td>
            <td>{props.total}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(props.good+(props.bad*-1))/props.total}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{(props.good/props.total)*100} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Feedback = (props) => {
  return(
    <div>
      {props.type} {props.count}
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

ReactDOM.render(<App />, 
  document.getElementById('root')
)