  import React from 'react'
  import './App.css'
  import Note from './Note'
  var Board = React.createClass({
  propTypes:{
          count: function(props,propName){
                if(typeof props[propName] !== "number"){
                    return new Error("the count must be a number")
                }
                if (props[propName] > 100) {
                  return new Error("value greater than 100")


                }
          }
  },
  getInitialState(){
    return({notes:[]})
  },

  update(newText,id){
    var notes = this.state.notes.map(
      note => (note.id !== id) ?
      note :
      {
        ...note,
        note: newText
      }
    )
    this.setState({
      notes
    })
  },
  add(text){
  var notes=   [
      ...this.state.notes,
      {
        id: this.nextId(),
        note: text
      }
    ]
    this.setState({notes})
  },
  nextId(){
     this.uniqueId = this.uniqueId || 0
     return this.uniqueId++

  },

  removeMe(id){
    var notes = this.state.notes.filter(note => note.id !== id)
    this.setState({
      notes
    })
  },
  eachNote(note){
    return (  <Note key={note.id} id= {note.id} onChangeT={this.update} onRemove={this.removeMe}>{note.note}</Note>)
  },



        render(){
            return(<div className="board">
             {this.state.notes.map(this.eachNote)}
             <button onClick={() => this.add('')}>+</button>
            </div>)
        }
    })

  export default Board;
