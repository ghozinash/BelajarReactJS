import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="Netflix Clone Project"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat
          optio sequi aspernatur quae non cum?
        </p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Netflix Clone Project",
        },
      },
    });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix Clone Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={cityGuide}
          alt="City Guide Project"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat
          optio sequi aspernatur quae non cum?
        </p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "City Guide Project",
        },
      },
    });
  };

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Portfolio React and Material UI
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="Portfolio React and Material UI Project"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat
          optio sequi aspernatur quae non cum?
        </p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Portfolio React and Material UI Project",
        },
      },
    });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Portfolio React and Material UI Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Task Manager React and Redux
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={taskManager}
          alt="Task Manager React and Redux Project"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat
          optio sequi aspernatur quae non cum?
        </p>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Task Manager React and Redux Project",
        },
      },
    });
  };

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Task Manager React and Redux Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img
              className="portfolio-image"
              src={netflix}
              alt="Netflix Clone Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img
              className="portfolio-image"
              src={cityGuide}
              alt="City Guide Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img
              className="portfolio-image"
              src={portfolio}
              alt="Portfolio React and Material UI Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div
            className="portfolio-image-box"
            onClick={openPopupboxTaskManager}
          >
            <img
              className="portfolio-image"
              src={taskManager}
              alt="Task Manager React and Redux Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  );
};

export default Portfolio;
