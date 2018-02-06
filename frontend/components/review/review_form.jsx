import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class ReviewForm extends React.Component {

  render() {

        return (
          <div className="session-form-container">
            <h2>  HELLO HOUSTON THIS IS THE REVIEWS FORM TEST style={{color: 'yellow'}} </h2>
            <form onSubmit={this.handleSubmit} className="session-form">
              <h3 className="form-welcome-message"> Post a Review   </h3>
              <div className="greeting">
                <h2>REVIEW FORM</h2>
              </div>
              <div className="login-inputs">
                <label>Rating:
                  <input type="text"
                  />
                </label>

                  <label>Review:
                    <input type="text"
                      />
                  </label>


              </div>
              <div className="submit-button">
                <input type="submit" value="Submit" />
              </div>
              <div className="alternative-option">
              </div>
            </form>
          </div>
        );


  }




}


export default withRouter(ReviewForm);
