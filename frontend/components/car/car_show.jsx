import React from 'react';
import { Link } from 'react-router-dom';


class CarShow extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.car || {};
  }

  componentDidMount(){
    this.props.fetchCar(this.props.match.params.carId);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState(nextProps.car);
  }



  render() {
    let img= "";
    if (this.state.images){
      img = this.state.images[0].image_url;
    }
    return(
      <div>
         <img src={img}/>
          <p className="car-description">{this.state.description}</p>
      </div>
    );
  }
}

export default CarShow;
