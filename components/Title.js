import React from 'react';

const TitleSection = ({ title, description, image }) => {
  return (
    <section className="title-section">
      <div className="title-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="title-image-wrapper">
        <img className="title-image" src={image} alt={title} />
      </div>
    </section>
  );
};

export default TitleSection;
