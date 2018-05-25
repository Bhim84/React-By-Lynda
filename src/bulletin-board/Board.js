import React, { Component } from "react";
import Note from "./Note";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { id: 0, note: "Call Bhim" },
        { id: 1, note: "Call Raj" },
        { id: 2, note: "Call Suyesh" }
      ]
    };
    this.eachNote = this.eachNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  updateNote(newText, i) {
    console.log("updating text at index", newText, i);
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !== i ? note : { ...note, note: newText })
      )
    }));
  }

  removeNote(i) {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== i)
    }));
  }

  eachNote(note, i) {
    return (
      <Note
        key={i}
        index={i}
        onChange={this.updateNote}
        onRemove={this.removeNote}
      >
        {note.note}
      </Note>
    );
  }

  render() {
    return <div className="board">{this.state.notes.map(this.eachNote)}</div>;
  }
}
