import React from 'react';

var MusicList = React.createClass({
  getInitialState() {
    return (
      { songs: [
        { id: 1, name: 'Sing a song', singer: 'kavitha' },
        { id: 2, name: 'Baby alone', singer: 'Robin' },
        { id: 3, name: 'I Love you forever', singer: 'Mary' },
        { id: 4, name: 'I am  always there', singer: 'Varun' }
      ],
        selectedSongs: [],
        error: false
      }
    );
  },

  _renderSong(song) {
    return (
      <div className="checkbox" key={song.id}>
        <label>
          <input type="checkbox" value={song.name}
                 onChange={this.handleselectedSongs}/>
          {song.name} -- {song.singer}
        </label>
      </div>
    );
  },

  _renderError() {
    if (this.state.error) {
      return (
        <div className="alert alert-danger">
          {this.state.error}
        </div>
      );
    }
  },

  // as songs are checked , pushit to selectedSongs array
  handleselectedSongs(event) {
    var selectedSongs = this.state.selectedSongs;
    var index = selectedSongs.indexOf(event.target.value);

    if (event.target.checked) {
      if (index === -1)
        selectedSongs.push(event.target.value);
    } else {
      selectedSongs.splice(index, 1);
    }

    this.setState({selectedSongs: selectedSongs });
  },

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.selectedSongs.length === 0) {
      this.setState({error: 'Please choose atleast one song to continue'});
    } else {
      this.setState({error: false});
      this.props.updateFormData({ selectedSongs: this.state.selectedSongs });
    }
  },

  render() {
    var errorMessage = this._renderError();

    return (
      <div>
        <h3 className="text-info"> Choose your Online song from our Music Store </h3>
        {errorMessage}
        <form onSubmit={this.handleSubmit}>
          { this.state.songs.map((song) => { return (this._renderSong(song)); })}
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
});

var ShippingDetails = React.createClass({
  getInitialState() {
    return (
      { fullName: '', contactNumber: '', shippingAddress: '', error: false }
    );
  },

  _renderError() {
    if (this.state.error) {
      return (
        <div className="alert alert-danger">
          {this.state.error}
        </div>
      );
    }
  },

  _validateInput() {
    if (this.state.fullName === '') {
      this.setState({error: "Please enter full name"});
    } else if (this.state.contactNumber === '') {
      this.setState({error: "Please enter contact number"});
    } else if (this.state.shippingAddress === '') {
      this.setState({error: "Please enter shipping address"});
    } else {
      this.setState({error: false});
      return true;
    }

  },

  handleSubmit(event) {
    event.preventDefault();

    var formData = { fullName: this.state.fullName,
                     contactNumber: this.state.contactNumber,
                     shippingAddress: this.state.shippingAddress };

    if (this._validateInput()) {
      this.props.updateFormData(formData);
      //call parent component callback via props
    }
  },

  handleChange(event, attribute) {
    var newState = this.state;
    newState[attribute] = event.target.value;
    this.setState(newState);
    console.log(this.state);
  },

  render() {
    var errorMessage = this._renderError();

    return (
      <div>
        <h1 className="text-info">Provide Shipping Details :</h1>
        {errorMessage}
        <div style={{width: 200}}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input className="form-control"
                     type="text"
                     placeholder="Full Name"
                     value={this.state.fullName}
                     onChange={(event) => this.handleChange(event, 'fullName')} />
            </div>

            <div className="form-group">
              <input className="form-control"
                     type="text"
                     placeholder="Contact number"
                     value={this.state.contactNumber}
                     onChange={(event) => this.handleChange(event, 'contactNumber')}/>
            </div>

            <div className="form-group">
              <input className="form-control"
                     type="text"
                     placeholder="Shipping Address"
                     value={this.state.shippingAddress}
                     onChange={(event) => this.handleChange(event, 'shippingAddress')} />
            </div>

            <div className="form-group">
              <button type="submit"
                      ref="submit"
                      className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

var DeliveryDetails = React.createClass({
  getInitialState() {
    return (
      { deliveryOption: 'Primary' }
    );
  },

  handleChange(event) {
    this.setState({ deliveryOption: event.target.value});
  },

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateFormData(this.state);
  },

  render() {
    return (
      <div>
        <h1 className="text-info">Choose  delivery options:</h1>
        <div style={{width:200}}>
          <form onSubmit={this.handleSubmit}>
            <div className="radio">
              <label>
                <input type="radio"
                       checked={this.state.deliveryOption === "Primary"}
                       value="Primary"
                       onChange={this.handleChange} />
                Primary -- Next day delivery
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio"
                       checked={this.state.deliveryOption === "Normal"}
                       value="Normal"
                       onChange={this.handleChange} />
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
});

var MusicStore = React.createClass({
  getInitialState() {
    return ({ currentStep: 1, formValues: {} });
  },

  updateFormData(formData) {
    var formValues = Object.assign({}, this.state.formValues, formData);
    var nextStep = this.state.currentStep + 1;
    console.log(formValues);
    this.setState({currentStep: nextStep, formValues: formValues});
  },

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
});

var Success = React.createClass({
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
});

var Confirmation = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    this.props.updateFormData(this.props.data);
  },

  render() {
    return (
      <div>
        <h1 className="text-info">Are you sure you want to submit the data?</h1>
        <form onSubmit={this.handleSubmit}>
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
});

module.exports = MusicStore;
