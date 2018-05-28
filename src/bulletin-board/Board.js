import React, { Component } from "react";
import Note from "./Note";
import FaPlus from "react-icons/lib/fa/plus";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
    this.addNote = this.addNote.bind(this);
    this.nextId = this.nextId.bind(this);
    this.eachNote = this.eachNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  componentWillMount() {
    var self = this;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json =>
        json.forEach(post => self.addNote(post.title.substring(0, 15)))
      );
  }

  addNote(text) {
    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        {
          id: this.nextId(),
          note: text
        }
      ]
    }));
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
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
        key={note.id}
        index={note.id}
        onChange={this.updateNote}
        onRemove={this.removeNote}
      >
        {note.note}
      </Note>
    );
  }

  render() {
    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
        <button onClick={this.addNote.bind(null, "New Text")}>
          <FaPlus />
        </button>
      </div>
    );
  }
}
