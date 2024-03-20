import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap

const ProjectCard = ({ title, imageSrc, carouselItems }) => {
  return (
    <div className="card mb-4">
      <h1 className="card-title teal-text ml-3 mt-1">{title}</h1>
      <div className="card-body teal-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={`${process.env.PUBLIC_URL}/${imageSrc}`} className="img-fluid fit-width" />
            </div>
            <div className="col-md-6">
              <Carousel prevLabel="" nextLabel="" indicators={false} >
                {carouselItems.map((item, index) => (
                  <Carousel.Item key={index}>
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="card-title">{item.title}</h1>
                        <div className="card-text">{item.content}</div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
