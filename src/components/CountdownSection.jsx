import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";

export default function CountdownSection () {
  const dealEndDate = new Date("2025-03-03T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = dealEndDate - now;
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, );

  return (
    <section className="deal-section d-flex align-items-center py-5">
      <Container>
        <Row className="deal-info align-items-center">
          <Col xl={6} sm={12} md={12} className="w-xs">
            <p className="text-danger text-uppercase fw-bold mb-1 mb-4">
              Deal of the Week
            </p>
            <h2 className="deal-title mb-3">Oversized denim jacket</h2>
            <div className="d-flex align-items-center mb-3">
              <span className="deal-price text-decoration-line-through fs-5 me-3">
                $120.00
              </span>
              <span className="deal-price fs-5 fw-bold">$79.00</span>
            </div>
            <Badge bg="danger" className="deal-badge mb-4">
              $50 off
            </Badge>

            {/* Countdown Display */}
            <div className="countdown-container m-md-0 mr-4">
            <div className="countdown-box d-flex m-0 mb-4 row flex-wrap">
              <div className="countdown-item col-sm-6 col-lg-3 col-6">
                <h3>{timeLeft.days}</h3>
                <span>days</span>
              </div>
              <div className="countdown-item col-sm-6 col-lg-3 col-6">
                <h3>{timeLeft.hours}</h3>
                <span>hours</span>
              </div>
              <div className="countdown-item col-sm-6 col-lg-3 col-6">
                <h3>{timeLeft.minutes}</h3>
                <span>minutes</span>
              </div>
              <div className="countdown-item col-sm-6 col-lg-3 col-6">
                <h3>{timeLeft.seconds}</h3>
                <span>seconds</span>
              </div>
            </div>
            </div>

            <Button className="btn">
              SHOP NOW
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

