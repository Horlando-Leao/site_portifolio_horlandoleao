import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div className="project-info">
              <h4>{projects.title}</h4>
              <span className="category">{projects.category}</span>
              <a className="project-link" target="_blank" rel="noopener noreferrer" href={projects.url}>
                <i className="fa fa-external-link"></i> Visualizar Projeto
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade bottom duration={1000}>
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Projetos em Destaque</h1>

              <div id="portfolio-wrapper">
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
