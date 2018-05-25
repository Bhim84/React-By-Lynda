import React, { Component } from "react";
import Note from "./Note";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { id: 1, note: "Call Bhim" },
        { id: 2, note: "Call Raj" },
        { id: 2, note: "Call Raj" }
      ]
    };
    this.eachNote = this.eachNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  updateNote(newText, index) {
    console.log(newText);
    this.setState(
      (prevState = {
        notes: prevState.notes.map(
          note => (note.id !== index ? note : { ...note, note: newText })
        )
      })
    );
  }

  eachNote(note, index) {
    return (
      <Note key={index} index={index} update={this.updateNote}>
        {note.note}
      </Note>
    );
  }

  render() {
    return <div className="board">{this.state.notes.map(this.eachNote)}</div>;
  }
}
