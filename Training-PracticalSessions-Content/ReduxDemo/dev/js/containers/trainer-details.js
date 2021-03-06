import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class TrainerDetails extends Component {
    render() {
        if (!this.props.trainer) {
            return (<h3>Select a Trainer ...</h3>);
        }
        var {thumbnail,first,last,age,description}=this.props.trainer;
        
        return (
            <div>
                <img src={thumbnail} />
                <h2>{first} {last}</h2>
                <h3>Age: {age}</h3>
                <h3>Description: {description}</h3>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
       trainer: state.activeTrainer
    };
}

export default connect(mapStateToProps)(TrainerDetails);
