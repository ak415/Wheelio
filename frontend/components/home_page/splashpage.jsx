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

          <div className="homepage-item-container">

            <div className="homepage-car-wrapper">
                <Link to={"/cars/7"}>
                  <div>
                      <img src="http://res.cloudinary.com/aazaiez/image/upload/v1518204865/2018-Audi-S5-Prestige-101_lhdjqp.jpg" className="car-images-homepage"/>
                  </div>
                  <h1 className="car-homepage-titles">
                    2018 Audi S5
                  </h1>
                  <div className="learn-more-flex">
                  </div>
                </Link>
                </div>


                <div className="homepage-car-wrapper">
                  <Link to={"/cars/13"}>

                      <div>
                          <img src="http://res.cloudinary.com/aazaiez/image/upload/v1518208966/2017-Cadillac-Escalade-105_czxkue.jpg" className="car-images-homepage"/>
                      </div>
                      <h1 className="car-homepage-titles">
                        2017 Cadillac Escalade
                      </h1>
                      <div className="learn-more-flex">
                      </div>
                      </Link>
                    </div>


                    <div className="homepage-car-wrapper">
                      <Link to={"/cars/10"}>
                          <div>
                              <img src="http://res.cloudinary.com/aazaiez/image/upload/v1518206249/2017-Lexus-RX350-F-Sport-101_kiamez.jpg" className="car-images-homepage"/>
                          </div>
                          <h1 className="car-homepage-titles">
                            2017 Lexus RX350
                          </h1>
                          <div className="learn-more-flex">
                          </div>
                        </Link>
                        </div>

                    <div className="homepage-car-wrapper">
                      <Link to={"/cars/14"}>
                          <div>
                              <img src="http://res.cloudinary.com/aazaiez/image/upload/v1518209336/2016-BMW-X5-xDrive40e-1_mntlfd.jpg" className="car-images-homepage"/>
                          </div>
                          <h1 className="car-homepage-titles">
                            2017 BMW X5
                          </h1>
                          <div className="learn-more-flex">
                          </div>
                        </Link>
                        </div>

                    <div className="homepage-car-wrapper">
                      <Link to={"/cars/16"}>
                          <div>
                              <img src="http://res.cloudinary.com/aazaiez/image/upload/v1518210373/2018-Ford-Mustang-GT-108_klx8q9.jpg" className="car-images-homepage"/>
                          </div>
                          <h1 className="car-homepage-titles">
                            2018 Ford Mustang GT
                          </h1>
                          <div className="learn-more-flex">
                          </div>
                        </Link>
                        </div>

                    <div className="homepage-car-wrapper">
                      <Link to={"/cars/17"}>
                          <div>
                              <img src="http://res.cloudinary.com/aazaiez/image/upload/v1518210712/2017-Volkswagen-Golf-GTI-Sport-126_yi6jcx.jpg" className="car-images-homepage"/>
                          </div>
                          <h1 className="car-homepage-titles">
                            2018 Volkswagen GTI
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
