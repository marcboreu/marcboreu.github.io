import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
import Arrow from "../../assets/portfolio/arrow.svg";
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";
import {data} from "../../data/data";



class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: data,
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "Más recientes"
    };
  }
  

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "todo") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "Más recientes" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if(event) {
      this.setState({ filterMenuActive: true });
    }else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "Más recientes") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    }else if (filter === "Más antiguos") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result});
  }

  // RENDER
  render() {
    
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if(this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p className="font12" onClick={() => this.filterDropDownHandler("Más recientes")}>
          Más recientes
          </p>
          <p className="font12" onClick={() => this.filterDropDownHandler("Más antiguos")}>
          Más antiguos
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="PROYECTOS" />
          <Row>
            <Col xs={12}>
              <div className="portfolio__nav">
                <ul>
                  <li className={
                                  this.state.pickedFilter === "todo" ?
                                  "portfolio__nav-active font12"
                                  : "font12"
                                } 
                      onClick={() => this.filterGallery("todo")}
                  >
                    TODO
                  </li>
                  <li className={
                                  this.state.pickedFilter === "html/css" ?
                                  "portfolio__nav-active font12"
                                  : "font12"
                                }
                        onClick={() => this.filterGallery("html/css")}
                  >
                    HTML / CSS
                  </li>
                  <li className={
                                  this.state.pickedFilter === "javascript" ?
                                  "portfolio__nav-active font12"
                                  : "font12"
                                }
                      onClick={() => this.filterGallery("javascript")}
                  >
                    JAVASCRIPT
                  </li>
                  <li className={
                                  this.state.pickedFilter === "react" ?
                                  "portfolio__nav-active font12"
                                  : "font12"
                                }
                      onClick={() => this.filterGallery("react")}
                  >
                    REACT
                  </li>
                  <li className={
                                  this.state.pickedFilter === "firebase" ?
                                  "portfolio__nav-active font12"
                                  : "font12"
                                }
                      onClick={() => this.filterGallery("firebase")}
                  >
                    FIREBASE
                  </li>
                  <li className={
                                  this.state.pickedFilter === "node" ?
                                  "portfolio__nav-active font12"
                                  : "font12"
                                }
                      onClick={() => this.filterGallery("node")}
                  >
                    NODE
                  </li>
                  <li className={
                                  this.state.pickedFilter === "mern" ?
                                  "portfolio__nav-active font12"
                                  : "font12"
                                }
                      onClick={() => this.filterGallery("mern")}
                  >
                    MERN
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12}>
              <div className="portfolio__filter" onMouseEnter={() => this.filterMenuHover(true)} onMouseLeave={() => this.filterMenuHover(false)}>
                <p className="font12">{this.state.pickedFilterDropdown} primero</p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="TIENES TRABAJO PARA MI?" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
