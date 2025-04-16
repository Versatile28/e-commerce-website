import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function NewArrivalsSection () {
  return (
    <section className="new-arrivals-section text-center" aria-label="New Arrivals">
      <Container className="newarrivals-container">
        <Row className="justify-content-center">
          <Col sm={12} md={12} xl={8} xxl={12}>
            <h2 className="display-4 mb-5">New Arrivals</h2>
            <p className="mb-5">
              One morning, when Gregor Samsa woke from troubled dreams, he found 
              himself transformed in his bed into a horrible vermin. He lay on his 
              armour-like back, and if he lifted his head a little he could see his 
              brown belly, slightly domed and divided by arches into stiff sections.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};