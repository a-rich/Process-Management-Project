import React from 'react'
import { Component } from 'react';
import '../stylesheets/Home.scss'
import VideoPlayer from '../components/VideoPlayer';
import SearchBar from '../components/SearchBar'
import {Grid, Row, Col} from 'react-bootstrap'


class MainBar extends Component {

  render() {
 return(
  <Grid bsClass="videoPlayer">
  <Row>
    <Col>
      <VideoPlayer/>
      <div className = "mainbar">
        <SearchBar/>
      </div>
    </Col>
  </Row>
  </Grid>
 )
}
};

export default MainBar;