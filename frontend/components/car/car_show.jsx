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

    let iconStyle = {
      fontSize: '70px',
      margin: '10px 1px 10px 2px',
    };

    return(
      <div className="car-review-page">
        <h2 className="car-title">{this.state.year} {this.state.make} {this.state.model} </h2>

        <div className="car-images-and-stats-flex">
            <img className="car-images"src={img}/>
           <div className="score-price-mpg-0to60-flex">
             <span className="average-car-score-string"> Average WLO Score</span>
             <span className="actual-car-score"> 9.5/10</span>

            <div className="price-component-flex">
                  <i className="fas fa-dollar-sign" style={iconStyle}></i>
                <div className="next-to-dollar-sign">
                    <span className="price-string"> Price starting at: </span>
                    <span className="actual-price"> {price}</span>
                </div>
            </div>
            <div className="epa-component-flex">
                 <img src="http://res.cloudinary.com/aazaiez/image/upload/v1517707279/gas-station-black_isopjq.svg" className="mpg-logo" />
                 <div className="next-to-mpg">
                    <span className="mpg-string"> EPA (MPG) </span>
                    <span className="actual-mpg"> {this.state.mpg_city}/{this.state.mpg_highway}</span>
                </div>
            </div>
            <div className="zeroto60-component-flex">
              <i className="fas fa-stopwatch" style={iconStyle}></i>
              <div className="next-to-zeroto60">
                <span className="zeroto60-string"> 0-60 MPH</span>
                <span className="actual-zeroto60">{this.state.acceleration}s</span>
              </div>
           </div>
         </div>
       </div>
         <h2 className="description-title"> Description</h2>
          <p className="car-description">{this.state.description}</p>
      </div>
    );
  }
}

export default CarShow;
