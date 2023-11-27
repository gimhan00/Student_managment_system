import React, { useEffect } from "react";
import "./Features.css";
import { HiAcademicCap } from "react-icons/hi";

import Feature from "./Feature";
import { FeatureList } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="title" data-aos="fade-up">
          <HiAcademicCap color="orangered" size={40} />
          <h2>Faculties</h2>
          <div className="u-text-small">
          <p alingn="justify">The University of Oxford was established on 10th March 1992 by the Honourable Minister of Education and Higher Education primarily to conduct Degrees and other Diploma level courses at the University of Moratuwa.</p>
          </div>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
          <img src="https://media.istockphoto.com/photos/beautiful-female-college-graduate-holding-diploma-picture-id539214953?k=6&m=539214953&s=612x612&w=0&h=l2Z_pdUHOAKHgGEo2lYLHey7S-M89MZI6lV8pQBqXKU=" alt="Graduate Student Photo"/><br/><br/><br/><br/>
          <img src="https://th.bing.com/th/id/R.08c541f8afa7729d4f568b4e8a40cf79?rik=cWeivYyHs2pc7w&pid=ImgRaw&r=0" alt="Graduate Student Photo"/>
          </div>
          <div className="features-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;