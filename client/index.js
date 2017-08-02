import React from 'react'
import ReactDOM from 'react-dom'
import Notes from '../client/notes'
import Form from '../client/form'

const $app = document.querySelector('#app')

class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Notes />
          <br></br>
          <Form />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Main />, $app)
