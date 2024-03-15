import React from 'react';

const HomePage = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img src="static/images/profile.jpg" alt="Profile Image" className="img-fluid profile-image" />
      </div>
      <div className="col-md-8">
        <div className="card teal-bg">
          <div className="card-body text-white">
            <h1 className="custom-card-title">AI Solutions</h1>
            <h2 className="custom-card-text">
              Do you have data you don't know what to do with? Are you struggling to keep up with competitors due to
              a lack of AI? Are you looking for something more advanced than simple decision trees, CNNs, and RNNs? Keep up to date with the
              future of transformer technology and let my AI power your business into higher sales, customer relations, and employee satisfaction.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
