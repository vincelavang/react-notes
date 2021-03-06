import React from 'react'
import ReactDOM from 'react-dom'
import Notes from '../client/notes'
import Form from '../client/form'

const $app = document.querySelector('#app')

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {notes: []}
  }
  addNote(note) {
    const newState = this.state.notes.concat(note)
    this.setState({notes: newState})
  }
  deleteNote(id) {
    fetch('/notes/' + id, {
      method: 'DELETE'
    })
      .then(() => {
        console.log(this.state)
        const newState = this.state.notes.filter((note) => note.id != id)
        this.setState({notes: newState})
        console.log(this.state)
      })
    }

  async componentDidMount() {
      const response = await fetch('/notes')
      const notes = await response.json()
      this.setState({ notes })
    }

  render() {
    return (
      <div>
        <div>
          <Notes notes={this.state.notes} delete={this.deleteNote.bind(this)} />
          <br></br>
          <Form onNoteAdded={this.addNote.bind(this)} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Main />, $app)
