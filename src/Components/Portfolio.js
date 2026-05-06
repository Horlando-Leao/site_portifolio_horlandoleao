import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="portfolio-item-carousel">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div className="project-info">
              <h4>{projects.title}</h4>
              <span className="category">{projects.category}</span>
              
              {projects.description && (
                <p className="project-description">{projects.description}</p>
              )}
              
              {projects.techs && (
                <div className="project-techs">
                  {projects.techs.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}

              <a className="project-link" target="_blank" rel="noopener noreferrer" href={projects.url}>
                <i className="fa fa-external-link"></i> Visualizar Projeto
              </a>
            </div>
          </div>
        </div>
      );
    });

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 500,
      focusOnSelect: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            arrows: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            arrows: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            arrows: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            arrows: true
          }
        }
      ]
    };

    return (
      <section id="portfolio">
        <Fade bottom duration={1000}>
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Projetos em Destaque</h1>

              <div id="portfolio-wrapper" className="carousel-wrapper">
                <Slider {...settings}>
                  {projects}
                </Slider>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
