import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchboxContainer from '../searchbox/searchbox_container';




class splashPage extends React.Component {

  render() {
    return (
    <div className="splash-page">

      <ul className="homepage-questions">
        <li>
          <h1 className="welcome-page-wheelio">WHEELIO</h1>
        </li>
        <li>
          <p >Car reviews from actual owners</p>
        </li>
      </ul>

      <div className="homepage-search">
        <SearchboxContainer
          className="search-input"
        />
      </div>

      <div className="car-search-wrapper-padding">

      <div className="featured-cars">
        <p>Featured Cars</p>
      </div>

        <div className="wrap-homepage-items">

          <div className="search-item-container">
            <div className="homepage-car-wrapper">
                  <div>
                      <img src="http://res.cloudinary.com/aazaiez/image/upload/v1517625361/camry_05_dw6mya.jpg" className="car-images-homepage"/>
                  </div>
                  <h1 className="car-homepage-titles">
                    2016 Toyota Camry
                  </h1>
                  <div className="learn-more-flex">
                    <Link to={`/cars/1`} className="search-link-to-car"> Learn more </Link>
                  </div>
                </div>

                <div className="homepage-car-wrapper">
                      <div>
                          <img src="http://res.cloudinary.com/aazaiez/image/upload/v1517625341/corolla_01_uzshwe.jpg" className="car-images-homepage"/>
                      </div>
                      <h1 className="car-homepage-titles">
                        2016 Toyota Corolla
                      </h1>
                      <div className="learn-more-flex">
                        <Link to={`/cars/2`} className="search-link-to-car"> Learn more </Link>
                      </div>
                    </div>


                    <div className="homepage-car-wrapper">
                          <div>
                              <img src="http://res.cloudinary.com/aazaiez/image/upload/v1517625307/accord_01_vtt3cq.jpg" className="car-images-homepage"/>
                          </div>
                          <h1 className="car-homepage-titles">
                            2016 Honda Accord
                          </h1>
                          <div className="learn-more-flex">
                            <Link to={`/cars/3`} className="search-link-to-car"> Learn more </Link>
                          </div>
                        </div>



              </div>
     </div>

     </div>


    </div>
  );
  }

}
export default splashPage;
