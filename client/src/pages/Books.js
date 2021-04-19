import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";

import { Col, Row, Container } from "../components/Grid";


function Books() {
 
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
          
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
