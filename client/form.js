import React from 'react'

export default class Form extends React.Component {
  handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const json = JSON.stringify({
      text: formData.get('text')
    })
    console.log(json)
    const note = {note_text: formData.get('text')}
    fetch('/notes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  .then(res => res.json())
  .then(newNote => {
    this.props.onNoteAdded(newNote)
  })
  }
  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <div className='ui form'>
          <div className='field'>
            <div className='ui card blue label'>
              <div className='content'>
                <div className='header'>Add a note</div>
                <div className='description'>
                  <textarea name='text' rows='4' cols='40'></textarea>
                </div>
                <button className="ui button" type="submit">Save</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
