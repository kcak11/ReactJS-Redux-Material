import React,{Component} from 'react';

export class DeliveryDetails extends React.Component{
  
  constructor(props,context){
    super(props,context);
    this.state={ deliveryOption: 'Primary' };
  }
  handleChange(event) {
    this.setState({ deliveryOption: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.updateFormData(this.state);
  }

  render() {
    return (
      <div>
        <h1 className="text-info">Choose  delivery options:</h1>
        <div style={{width:200}}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="radio">
              <label>
                <input type="radio"
                       checked={this.state.deliveryOption === "Primary"}
                       value="Primary"
                       onChange={this.handleChange.bind(this)} />
                Primary -- Next day delivery
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio"
                       checked={this.state.deliveryOption === "Normal"}
                       value="Normal"
                       onChange={this.handleChange.bind(this)} />
                Normal -- 3-4 days
              </label>
            </div>

            <button className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}