import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.linkedin;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg color="#007bff" num={50} type="cobweb" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Sobre mim
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#services">
                Serviços
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resumo
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Trabalhos
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="#portfolio" className="button btn smoothscroll project-btn primary-btn">
                  <i className="fa fa-folder-open"></i> Ver Projetos
                </a>
                <a href={project} target="_blank" rel="noopener noreferrer" className="button btn github-btn">
                  <i className="fa fa-linkedin"></i> LinkedIn
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer" className="button btn github-btn">
                  <i className="fa fa-github"></i> GitHub
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
