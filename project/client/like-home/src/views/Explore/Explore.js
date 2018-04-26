import React from 'react';
import Mainbar from '../../components/MainBar'
import CollectionView from '../../components/CollectionView'
import {Grid, Row, Col} from 'react-bootstrap'
import './Explore.scss'

const Explore = () => (
  <Grid bsClass="exploreContainer">
    <Row>
      <Col>
        <Mainbar/>
        <CollectionView/>
      </Col>
    </Row>
  </Grid>
);

export default Explore;
