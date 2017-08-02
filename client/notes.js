import React from 'react'

function Note(props) {
  const { note } = props
  return (
    <div className='ui card blue label'>
      <div className='content'>
        <div onClick= {() => props.delete(note.id)} className='header'>{note.id}</div>
        <div className='meta'>Notes</div>
        <div className='description'>{note.note_text}</div>
      </div>
    </div>
  )
}

export default class Notes extends React.Component {
  handleClick(event) {
    event.preventDefault()
  }
  render() {
    return (
      <div>
        {this.props.notes.map((note, i) => <Note delete={this.props.delete} click={this.handleClick.bind(this)} key={i} note={note} />)}
      </div>
    )
  }
}
