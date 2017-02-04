import React, { Component } from 'react'
import Service from './Service'

class ServiceChooser extends Component {
   constructor(props) {
      super(props)
      this.state ={ total: 0 }
  }    

    addTotal(price){
        this.setState( { total: this.state.total + price } );
    }

    render() {
        var self = this;
        var services = this.props.items.map((s,i)=>{  
            return 
              <Service  key={i} name={s.name} price={s.price} active={s.active} addTotal={self.addTotal} />;
             
        });

        return (
        <div>
                <h1>Our Corporate Services</h1>                    
                    <div id="services">                    
                        {services}
                        <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
                    </div>

       </div>
       )
    }
}
export default ServiceChooser

