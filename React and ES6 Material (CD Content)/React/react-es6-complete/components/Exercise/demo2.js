import React from 'react'

class App extends React.Component {
  constructor() {
      super()

      this.state = {
         text: '',
         photoAdded:alse
      }      
      this.handleChange = this.handleChange.bind(this)
      this.togglePhoto=this.togglePhoto.bind(this)
      this.remainingCharacters=this.remainingCharacters.bind(this)
   }  

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  togglePhoto(event) {
    this.setState({ photoAdded: !this.state.photoAdded })
  }

  remainingCharacters() {
    if (this.state.photoAdded) {
      return 100 - 23 - this.state.text.length
    } else {
      return 100 - this.state.text.length
     }
  }

  render(){
    return (
      <div className="well clearfix">
        <textarea className="form-control"
                  onChange={this.handleChange}></textarea>
        <br/>
        <span>{ this.remainingCharacters() }</span>
        <button className="btn btn-primary pull-right"
          disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet</button>
        
        <button className="btn btn-default pull-right"
          onClick={this.togglePhoto}>
          {this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
        </button>
      </div>
    );
  }
};

export default App