import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  return (
    <div>
        <Header course={course}/>
        <Content parts={course}/>
        <Total total={course}/>
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.parts.parts[0].name} exercises={props.parts.parts[0].exercises}/>
      <Part part={props.parts.parts[1].name} exercises={props.parts.parts[1].exercises}/>
      <Part part={props.parts.parts[2].name} exercises={props.parts.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.total.parts[0].exercises+props.total.parts[1].exercises+props.total.parts[2].exercises}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))