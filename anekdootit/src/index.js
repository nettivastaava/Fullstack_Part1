import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(() => Array(props.anecdotes.length).fill(0))
  const [best, setBest] = useState(0)
  const [most, setMost] = useState(0)

  const Vote = () => {
    const copy = [...points ]
    copy[selected] += 1
    if (copy[selected]>most) {
      setMost(most+1)
      setBest(selected)
    } else if (best==selected) {
      setMost(most+1)
    }
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
      {props.anecdotes[selected]}
      </p>
      <p>
      has {points[selected]} votes
      </p>
      <Button handleClick={()=> Vote()}text="vote"/>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text="next anecdote"/>
      <p>
      <h1>Anecdote with most votes</h1>
      </p>
      <p>
      {props.anecdotes[best]}
      </p>
    </div>
  )
}



const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
