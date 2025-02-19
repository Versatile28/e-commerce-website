import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function HistorySection(){
  return (
    <section className="history-section">
      <Container>
        <Row className="justify-content-center w-xs">
          <Col md={12}>
            <h5 className="section-title mb-4">OUR HISTORY</h5>
            <p className="mb-4">
              One morning, when Gregor Samsa woke from troubled dreams, he found himself 
              transformed in his bed into a horrible vermin. He lay on his armour-like 
              back, and if he lifted his head a little he could see his brown belly, 
              slightly domed and divided by arches into stiff sections.
            </p>
            <p>
              He must have tried it a hundred times, shut his eyes so that he wouldn’t 
              have to look at the floundering legs, and only stopped when he began to 
              feel a mild, dull pain there that he had never felt before.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

