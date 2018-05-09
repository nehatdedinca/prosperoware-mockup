import React from 'react';
import { Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import DropDownList from './DropDownList';

export default props =>
  <Col xs={6}>
    <FlatButton label="Add Procedure"/>
    <FlatButton label="Add Milestone"/>
    <FlatButton label="Add Phase"/>
    <FlatButton label="Delete"/>
    <DropDownList/>
  </Col>
