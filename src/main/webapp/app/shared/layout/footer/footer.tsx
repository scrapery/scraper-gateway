import './footer.css';

import React from 'react';
import { Translate } from 'react-simlife';
import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
        <p>
          <Translate contentKey="footer">Your footer</Translate>
        </p>
      </Col>
    </Row>
  </div>
);

export default Footer;
