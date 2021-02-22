import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ex
        eligendi obcaecati fuga aperiam hic quas perspiciatis dicta tenetur!
        Similique modi nisi temporibus quisquam explicabo nihil molestiae
        architecto! Numquam, minima suscipit? Vitae laudantium, hic officia
        fugiat, odit neque nostrum dolorem eius porro tempore, saepe asperiores
        quam vero. Dicta, officiis suscipit!
      </p>
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
    </section>
  );
};

export default About;
