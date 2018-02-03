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
    let price= "$";
    if (this.state.price){
      price += this.state.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
    }


    return(
      <div className="car-review-page">
        <h2 className="car-title">{this.state.year} {this.state.make} {this.state.model} </h2>
         <img className="car-images "src={img}/>
         <div className="price-mpg-0to60-flex">
           <span className="price"> PRICE {price}</span>
           <span className="mpg"> MPG {this.state.mpg}</span>
           <span className="0to60"> 0-60 {this.state.acceleration}s</span>
         </div>
          <p className="car-description">{this.state.description}</p>
      </div>
    );
  }
}

export default CarShow;
