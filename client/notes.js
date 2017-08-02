import React from 'react'

function Note(props) {
  const { note } = props
  return (
    <div className='ui card blue label'>
      <div className='content'>
        <div onClick= {() => deleteById(note.id)} className='header'>{note.id}</div>
        <div className='meta'>Notes</div>
        <div className='description'>{note.note_text}</div>
      </div>
    </div>
  )
}

function deleteById(id) {
  fetch('/notes/' + id, {
    method: 'DELETE'
  })
    .then(() => {
      console.log('DELETED!')
    })
  }

export default class Notes extends React.Component {
  handleClick(event) {
    event.preventDefault()
  }
  render() {
    return (
      <div>
        {this.props.notes.map((note, i) => <Note click={this.handleClick.bind(this)} key={i} note={note} />)}
      </div>
    )
  }
}
