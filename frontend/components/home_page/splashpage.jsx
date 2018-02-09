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
                <Link to={"/cars/1"}>
                  <div>
                      <img src="http://res.cloudinary.com/aazaiez/image/upload/v1518149773/2016-Toyota-Camry-02_juw3kd.jpg" className="car-images-homepage"/>
                  </div>
                  <h1 className="car-homepage-titles">
                    2016 Toyota Camry
                  </h1>
                  <div className="learn-more-flex">
                  </div>
                </Link>
                </div>


                <div className="homepage-car-wrapper">
                  <Link to={"/cars/2"}>

                      <div>
                          <img src="http://res.cloudinary.com/aazaiez/image/upload/v1518145859/2016-Toyota-Corolla-01_lkxrql.jpg" className="car-images-homepage"/>
                      </div>
                      <h1 className="car-homepage-titles">
                        2016 Toyota Corolla
                      </h1>
                      <div className="learn-more-flex">
                      </div>
                      </Link>
                    </div>


                    <div className="homepage-car-wrapper">
                      <Link to={"/cars/3"}>
                          <div>
                              <img src="http://res.cloudinary.com/aazaiez/image/upload/v1518149489/2016-Honda-Accord-01_li72dq.jpg" className="car-images-homepage"/>
                          </div>
                          <h1 className="car-homepage-titles">
                            2016 Honda Accord
                          </h1>
                          <div className="learn-more-flex">
                          </div>
                        </Link>
                        </div>



              </div>
     </div>

     </div>


    </div>
  );
  }

}
export default splashPage;
