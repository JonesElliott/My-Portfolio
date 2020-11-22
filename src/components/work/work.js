import React from "react";
import { Container, Row, Col } from "../Grid";
import './work.css';

export function Work({ children }) {
  return (
    <div className="work-container" id="work">
      <h1 className="work-title">Projects</h1>
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function Projects({ data: { img, deployedLink, repoLink, description, title }}) { 
  console.log('Deployed: ' + deployedLink);
  console.log('Repo: ' + repoLink);

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <img className="project-image" alt={title + " example"} src={img}></img>
            <p className="description-text">
              {description}
            </p>
            <a className="deployed-link" target="_blank" href={ deployedLink }><button className="link-button">Deployed Site</button></a>
            <a className="repo-link" target="_blank" href={ repoLink }><button className="link-button">The Code</button></a>
          </Col>
        </Row>
      </Container>
    </li>
  );

}
