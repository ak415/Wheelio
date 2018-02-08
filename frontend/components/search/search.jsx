import React from 'react';
import { merge } from 'lodash';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      cars: []
    });
  }

  componentDidMount() {
    const cars = this.props.cars;
    console.log( `THE STATE IS ${this.state}`);
    console.log( `THE PROPS ARE ${this.props}`);
  }

  componentWillReceiveProps(nextProps) {

  }


  render () {
    if (this.state.cars === undefined) {
      return null;
    }
    return (
      <div>
        {this.state.cars.map( (car) =>
          <h1 className="car-search-titles">
            {car.make} {car.model} {car.year}
          </h1>
       )}

      </div>

    );

  }
}


export default Search;
