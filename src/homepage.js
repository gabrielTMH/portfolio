import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 mb-4 mb-md-0">
          <img src={`${process.env.PUBLIC_URL}/profile.JPG`} alt="Profile Image" className="img-fluid profile-image rounded-circle" />
        </div>
        <div className="col-md-8">
          <div className="card teal-bg">
            <div className="card-body ">
              <h1 className="custom-card-title">AI Solutions</h1>
              <p className="lead custom-card-text">Do you have data you don't know what to do with? Are you struggling to keep up with competitors due to a lack of AI? Are you looking for something more advanced than simple decision trees, CNNs, and RNNs? Keep up to date with the future of transformer technology and let my AI power your business into higher sales, customer relations, and employee satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
