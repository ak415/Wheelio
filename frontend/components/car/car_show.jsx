import React from 'react';
import { Link } from 'react-router-dom';


class CarShow extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.car || {};
    this.handleImageChangeNext = this.handleImageChangeNext.bind(this);
    this.handleImageChangePrevious = this.handleImageChangePrevious.bind(this);
  }

  componentDidMount() {
    this.props.fetchCar(this.props.match.params.carId);
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps);
  }

  handleImageChangeNext(e) {
    e.preventDefault();
    var arr = [0,1,2,3,4];
    this.setState({
      carImageIndex: arr[(this.state.carImageIndex + 1) % 5]
    });
  }

  handleImageChangePrevious(e) {
    e.preventDefault();
    this.setState({
      carImageIndex: this.state.carImageIndex > 0 ? this.state.carImageIndex - 1 : ((this.state.carImageIndex -1) % 5) + 5
    });
  }

  render() {
    if (this.state.car === undefined) {
      return null;
    }
    console.log(this.state);

    let price= "$";
    if (this.state.car.price){
      price += this.state.car.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
    }

    let iconStyle = {
      fontSize: '70px',
      margin: '10px 1px 10px 2px',
    };

    let iconStyleNext = {
      fontSize: '50px',
    };


    return(
      <div className="car-review-page">
        <h2 className="car-title">{this.state.car.year} {this.state.car.make} {this.state.car.model} </h2>

        <div className="car-images-and-stats-flex">


        <div id="gallerywrapper">
          <div id="gallery">
            <div id="pic1">
              <img src={this.state.car.images[this.state.carImageIndex].image_url} className="car-images"/>
              <a onClick={this.handleImageChangeNext}  className="next" ><i class="fas fa-chevron-right" style={iconStyleNext}></i></a>
              <a onClick={this.handleImageChangePrevious}  className="previous" ><i class="fas fa-chevron-left" style={iconStyleNext}></i></a>
            </div>
          </div>
        </div>




           <div className="score-price-mpg-0to60-flex">


             <div className="wheelio-score-component-flex">
                  <img src="http://res.cloudinary.com/aazaiez/image/upload/v1517711977/wheelio_black_logo_zwheh6.svg" className="wheelio-logo-black" />

                     <div className="next-to-wheelio-logo">
                       <span className="average-car-score-string"> WHEELIO Score</span>
                       <span className="actual-car-score"> 9.5/10</span>
                    </div>
            </div>

        <div className="stats-flex">

          <div>
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
                        <span className="actual-mpg"> {this.state.car.mpg_city}/{this.state.car.mpg_highway}</span>
                    </div>
                </div>

          </div>

          <div>

            <div className="zeroto60-component-flex">
              <i className="fas fa-stopwatch" style={iconStyle}></i>
              <div className="next-to-zeroto60">
                <span className="zeroto60-string"> 0-60 MPH</span>
                <span className="actual-zeroto60">{this.state.car.acceleration}s</span>
              </div>
           </div>


           <div className="top_speed-component-flex">
            <i className="fas fa-tachometer-alt" style={iconStyle}></i>
             <div className="next-to-top_speed">
               <span className="top_speed-string"> TOP SPEED</span>
               <span className="actual-top_speed">{this.state.car.top_speed}mph</span>
             </div>
          </div>

          </div>

        </div>


         </div>
       </div>
         <h2 className="description-title"> Description</h2>
          <p className="car-description">{this.state.car.description}</p>
      </div>
    );
  }
}

export default CarShow;
