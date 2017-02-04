import React,{Component} from 'react';

export class Confirmation extends React.Component{
  handleSubmit(event) {
    event.preventDefault();
    this.props.updateFormData(this.props.data);
  }

  render() {
    return (
      <div>
        <h1 className="text-info">Are you sure you want to submit the data?</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <strong>Full Name</strong> : { this.props.data.fullName }
          </div><br/>
          <div>
            <strong>Contact Number</strong> : { this.props.data.contactNumber }
          </div><br/>
          <div>
            <strong>Shipping Address</strong> : { this.props.data.shippingAddress }
          </div><br/>
          <div>
            <strong>Selected songs</strong> : { this.props.data.selectedSongs.join(", ") }
          </div><br/>
          <button className="btn btn-success">
            Place order
          </button>
        </form>
      </div>
    );
  }
}