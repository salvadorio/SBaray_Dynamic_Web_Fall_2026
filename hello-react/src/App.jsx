const student = 'World'

// a react component is a func that returns JSX
function App() {
  return(
    <div>
      {/*this is not a string literal, we r swapping from html-like to jsx*/}
      <h1>Hello {student}!</h1>
      <p>This is text... etc</p>
    </div>
  )
}

export default App