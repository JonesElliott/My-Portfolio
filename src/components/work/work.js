import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function Work({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function Projects({ data: { img, hrefDeployed, hrefRepo, description, title }}) { 

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={img} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>
              Ingredients: {description}
            </p>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={hrefDeployed}
            >
              See it work!
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={hrefRepo}
            >
              See the code
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );

}
