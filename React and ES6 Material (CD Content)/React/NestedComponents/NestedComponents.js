 var RadioOtherOption=React.createClass({
  getInitialState:function(){
    return{
      checked:false
    };
  },
  onChange:function(event){
    var input=event.target;
    
    this.setState({
        checked:input.checked
      });

  },
  componentDidUpdate:function(prevProps, prevState){
    var input=this.refs.input.getDOMNode();
    //Toggle
    if(prevState.checked !==input.checked){
     this.setState({
        checked:input.checked
      });
   }

  },
  render:function(){
    return(     
              <p className="form-group radio">
               <label>
                    <input  ref="input"
                     onChange={this.onChange} 
                     type="radio" name="operator"
                      value="Others"/>Others
                </label>
                {this.state.checked && (
                <label className="form-inine">Specify Airline  
                    <input type="text" name="other" />
                </label>
                )}
            </p>        
      )
  }
})

var  RadioOption=React.createClass({
//validation
  propTypes:{
     value:React.PropTypes.string.isRequired,
     children:React.PropTypes.node
  },
  render:function(){
    return(
      <p className="radio">
                 <label>
                    <input type="radio" name="operator" 
                      value={this.props.value} /> 
                    {this.props.children}
                 </label>
            </p>
      )
  }
})

var RadioOptionGroup=React.createClass({
  onChange:function(event){
    if(this.props.other){
      this.refs.other.forceUpdate();
    }
  },

  render:function(){
    return (
      <div>
        {this.props.options.map(function(option){
          return (
              <RadioOption value="option.value" 
              key={option.value}>
                {option.label}
              </RadioOption>
            );
          }
        )}
        {this.props.other ? <RadioOtherOption 
          ref="other"/>:<div/>}
       
        </div>
      );
  }
});
// Demo>RadioOptionGroup -> RadioOption  , RadioOtherOption

  var Demo=React.createClass({
  render:function(){
  // JSON Collection
    var radioOptions=[
      {value:'Indigo', label:'Indigo Airlines'},
      {value:'Air India',label:'Indian Airlines'},
      {value:'Jet Airways',label:'Jet Airways'},
      {value:'SpiceJet', label:'SpiceJet Airlines'}
      ];

    return(
      <div className="container">
     <h2 >Choose your Airline</h2>
      <form>
            <RadioOptionGroup other={true} 
            options={radioOptions}/>       

           <p><input type="submit" className="btn btn-primary"/></p>
        </form>
     </div>
     )
  }
});

ReactDOM.render(<Demo/>,
      document.getElementById('container')
);


      

    
      
 
