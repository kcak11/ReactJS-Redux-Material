import React,{Component} from 'react';

export class Success extends React.Component{
  render() {
    var numberOfDays = "1 to 2 ";

    if (this.props.data.deliveryOption === 'Normal') {
      numberOfDays = "3 to 4 ";
    }
    return (
      <div>
        <h2 className="text-success">
          Thank you for shopping with us {this.props.data.fullName}.
        </h2>
        <h4>
          You will soon get {this.props.data.selectedSongs.join(", ")} at {this.props.data.shippingAddress} in approrximately {numberOfDays} days.
        </h4>
      </div>
    );
  }
}
