import React from 'react'
import Draggable from 'react-draggable'


import './App.css'

var Note = React.createClass({
    getInitialState(){
        return {editing:false}
    },
    edit() {
        this.setState( {editing:true})
    },
    remove() {
      this.props.onRemove(this.props.id)
    },
    save(){
        var value = this.refs.newText.value
        this.setState( {editing:false})
        this.props.onChangeT(value, this.props.id)
    },
    componentDidUpdate(){
      if(this.state.editing){
        this.refs.newText.focus()
        this.refs.newText.select()

      }
    },
    componentWillMount(){
      this.style = {
        right: this.randomBetween(0,window.innerWidth -150,'px'),
          top: this.randomBetween(0,window.innerHeight -150,'px')

      }
    },
    randomBetween(x,y,s){
      return (x + Math.ceil(Math.random() * (y-x))) +s
    },
    renderForm(){
         return(
             <div className="note" style={this.style}>
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                  <button onClick={this.save}>Save</button>

            </div>
        )
    },
    renderDisplay(){
        return(
             <div className="note" style={this.style}>
                <p>{this.props.children}</p>
                <span>
                  <button onClick={this.edit}>EDIT</button>
                  <button onClick={this.remove}>X</button>
                </span>
            </div>
        )
    },
    render() {
        return (
          <Draggable>
          {(this.state.editing)? this.renderForm() : this.renderDisplay()}
      </Draggable>
    )
    }
})

export default Note;
