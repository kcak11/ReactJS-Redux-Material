import React,{Component} from 'react';
import {MusicList} from './MusicList';
import {ShippingDetails} from './ShippingDetails';
import {DeliveryDetails} from './DeliveryDetails';
import {Confirmation} from './Confirmation';
import {Success} from './Success';

export default class MusicStore extends React.Component{
  
  constructor(props,context){
    super(props,context);
    this.state={ currentStep: 1, formValues: {} };
    this.updateFormData=this.updateFormData.bind(this);
  }
  updateFormData(formData) {
    var formValues = Object.assign({}, this.state.formValues, formData);
    var nextStep = this.state.currentStep + 1;
    console.log(formValues);
    this.setState({currentStep: nextStep, formValues: formValues});
  }

  render() {
    switch (this.state.currentStep) {
      case 1:
        return <MusicList updateFormData={this.updateFormData} />;
      case 2:
        return <ShippingDetails updateFormData={this.updateFormData} />;
      case 3:
        return <DeliveryDetails updateFormData={this.updateFormData} />;
      case 4:
        return <Confirmation data={this.state.formValues} updateFormData={this.updateFormData}/>;
      case 5:
        return <Success data={this.state.formValues}/>;
      default:
        return <MusicList updateFormData={this.updateFormData} />;
    }
  }
}





