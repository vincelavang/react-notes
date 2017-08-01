import React from 'react'
import ReactDOM from 'react-dom'

const $app = document.querySelector('#app')

function Note(props) {
  const { note } = props
  return (
      <div className='ui card blue label'>
        <div className='content'>
          <div className='header'>{note.id}</div>
          <div className='meta'>Notes</div>
          <div className='description'>{note.note_text}</div>
        </div>
      </div>
  )
}

class Notes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {notes: []}
  }

  async componentDidMount() {
      const response = await fetch('/notes')
      const notes = await response.json()
      this.setState({ notes })
    }
  render() {
    return (
      <div>
        {this.state.notes.map((note, i) => <Note key={i} note={note} />)}
      </div>
    )
  }
}

ReactDOM.render(<Notes />, $app)
