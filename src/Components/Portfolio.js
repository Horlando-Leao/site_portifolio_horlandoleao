import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let id = 0;
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 992
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ isMobile: window.innerWidth <= 992 });
  }

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
      className: this.state.isMobile ? "" : "center",
      centerMode: !this.state.isMobile,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: this.state.isMobile ? 1 : 3,
      speed: 500,
      focusOnSelect: true,
      arrows: true
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
