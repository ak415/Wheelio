import React from 'react';
import { Link } from 'react-router-dom';


class CarShow extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.car || {};
    this.handleImageChangeNext = this.handleImageChangeNext.bind(this);
    this.handleImageChangePrevious = this.handleImageChangePrevious.bind(this);
    this.findUsername = this.findUsername.bind(this);
    this.findAverageRating = this.findAverageRating.bind(this);
  }

  componentDidMount() {
    this.props.fetchCar(this.props.match.params.carId);
  }




  componentWillReceiveProps(nextProps){
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.fetchCar(nextProps.match.params.carId);
    }
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

  findUsername(userId) {
    if (this.state.car === undefined) {
      return null;
    }
    var result = "";
    for (var i = 0; i < this.state.car.reviewers.length; i++) {
      if (this.state.car.reviewers[i].id === userId) {
        result = this.state.car.reviewers[i].username;
      }
    }
    return result;
  }

  findAverageRating() {
    if (this.props.car === undefined) {
      return null;
    }
    var result = 0;
    for (var i = 0; i < this.props.car.reviews.length; i++) {
      result += this.props.car.reviews[i].user_rating;
    }
    return Number((result/this.props.car.reviews.length).toFixed(1));
  }

  render() {
    if (this.props.car === undefined) {
      return null;
    }
    console.log(this.props);

    let price= "$";
    if (this.props.car.price){
      price += this.props.car.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
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



    <h2 className="car-title">{this.props.car.year} {this.props.car.make} {this.props.car.model} </h2>
    <div className="wrapper-padding">

    <div className="car-images-and-stats-flex">



        <div id="gallerywrapper">
          <div id="gallery">
            <div id="pic1">
              <img src={this.props.car.images[this.state.carImageIndex].image_url} className="car-images"/>
              <a onClick={this.handleImageChangeNext}  className="next" ><i className="fas fa-chevron-right" style={iconStyleNext}></i></a>
              <a onClick={this.handleImageChangePrevious}  className="previous" ><i className="fas fa-chevron-left" style={iconStyleNext}></i></a>
            </div>
          </div>
        </div>




           <div className="score-price-mpg-0to60-flex">


             <div className="wheelio-score-component-flex">
                  <img src="http://res.cloudinary.com/aazaiez/image/upload/v1517711977/wheelio_black_logo_zwheh6.svg" className="wheelio-logo-black" style={{userSelect: 'none'}}/>

                     <div className="next-to-wheelio-logo">
                       <span className="average-car-score-string"> WHEELIO Score</span>
                       <span className="actual-car-score"> {this.findAverageRating()}/10</span>
                    </div>
            </div>

            <div className="stats-flex">

              <div>
                    <div className="price-component-flex">
                          <i className="fas fa-dollar-sign" style={{fontSize: '90px'}}></i>
                        <div className="next-to-dollar-sign">
                            <span className="price-string"> STARTING AT: </span>
                            <span className="actual-price"> {price}</span>
                        </div>
                    </div>
                    <div className="epa-component-flex">
                         <img src="http://res.cloudinary.com/aazaiez/image/upload/v1517707279/gas-station-black_isopjq.svg" className="mpg-logo" />
                         <div className="next-to-mpg">
                            <span className="mpg-string"> EPA (MPG) </span>
                            <span className="actual-mpg"> {this.props.car.mpg_city}/{this.props.car.mpg_highway}</span>
                        </div>
                    </div>

              </div>

              <div>

                <div className="zeroto60-component-flex">
                  <i className="fas fa-stopwatch" style={iconStyle}></i>
                  <div className="next-to-zeroto60">
                    <span className="zeroto60-string"> 0-60 MPH</span>
                    <span className="actual-zeroto60">{this.props.car.acceleration}s</span>
                  </div>
               </div>


               <div className="top-speed-component-flex">
                <i className="fas fa-tachometer-alt" style={{fontSize: '80px'}}></i>
                 <div className="next-to-top_speed">
                   <span className="top_speed-string"> TOP SPEED</span>
                   <span className="actual-top_speed">{this.props.car.top_speed}mph</span>
                 </div>
              </div>

              </div>

            </div>


         </div>
       </div>




        <div>
            <h2 className="description-title"> Description</h2>
            <p className="car-description">{this.props.car.description}</p>
        </div>

        <div className="review-outline">

        <div>

          <div className="write-review-flex">
            <h2 className="description-title">{this.props.car.make} {this.props.car.model} Reviews</h2>
            <a className="submit-review" >Write a Review</a>
          </div>


          {this.props.car.reviews.map(review =>

          <div className="review-content-flex">

              <div className="reviewer-corner" >
                <p className="reviewer-name">{this.findUsername(review.user_id)}</p>
              </div>

              <div className="review-rating-flex">

                <div className="rating-wrap">
                  <div style={{ color: '#666666'  }}>Rating:</div>
                  <div className="review-rating">{review.user_rating}</div>
                </div>
                <p className="review-content">{review.body}</p>

                <div className="reaction-buttons">
                  <div>
                    <a className="review-button" >Helpful</a>
                  </div>
                  <div>
                    <a className="review-button" >Funny</a>
                  </div>
                  <div>
                    <a className="review-button" >Cool</a>
                  </div>
                </div>


              </div>
          </div>
        )}



        </div>

        </div>

        </div>


      </div>
    );
  }
}

export default CarShow;
