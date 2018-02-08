import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      cars: this.props.cars
    });
    this.clearState = this.clearState.bind(this);
  }

  componentDidMount() {
    const cars = this.props.cars;
    console.log( "THE STATE IS", this.state);
    console.log( "THE PROPS ARE", this.props);

  }



  componentWillReceiveProps(nextProps) {
    console.log("search is receiving props",nextProps);
    this.clearState();
    this.props = nextProps;
  }

  clearState() {
  this.setState({
    cars: []
  });
  }

  componentWillUnmount() {
    console.log("Component unmounted");
    this.clearState();
  }


  render () {
    if (this.state.cars === undefined || this.state === undefined) {
      return null;
    }
    if (this.state.cars.length < 1 ) {
      this.clearState();
      this.props.history.push("/");
    }
    return (
      <div className="car-search-wrapper-padding">

        <div className="wrap-search-items">
        {this.state.cars.map( car =>

          <div className="search-item-container">
            <div className="search-result-car-wrapper">
                  <div>
                      <img src={car.images[0].image_url} className="car-images-search"/>
                  </div>
                  <h1 className="car-search-titles">
                    {car.year} {car.make} {car.model}
                  </h1>
                  <div className="learn-more-flex">
                    <Link to={`/cars/${car.id}`} className="search-link-to-car"> Learn more </Link>
                  </div>


          </div>


      </div>
       )}
     </div>

     </div>

    );

  }
}


export default Search;
