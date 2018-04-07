import React, { Component } from 'react';
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon} from 'react-bootstrap';
import './SearchHotels.scss';
import Calendar from 'react-icons/lib/fa/calendar'
import MdLocationOn from 'react-icons/lib/md/location-on'
import TiLocationOutline from 'react-icons/lib/ti/location-outline'
import Bed from 'react-icons/lib/fa/bed'
import FaDollar from 'react-icons/lib/fa/dollar'
import Search from 'react-icons/lib/fa/search'
import Autocomplete from '../../components/Autocomplete'
import DateRange from '../../components/DateRange'
import SearchBar from '../../components/SearchBar'
import SearchFilter from '../../components/SearchFilter'
import ListView from '../../components/ListView'

const locations = [
    "chicago",
    "san francisco",
    "los angeles",
    "san jose",
    "washington",
    "new york",
    "miami",
    "las vegas"
]

class SearchHotels extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }

    render() {
      return (
        <div class="contentListView">
            <Grid>
                <Row>
                    <Col>
                        <div className="searchBarContainer">
                            <SearchBar />
                        </div>
                    </Col>
                </Row>

                <Row>
                    
                        <Col md={4}>
                            <div class="SearchFilterContainer" align="center">
                                <SearchFilter />
                            </div>
                        </Col>

                        <Col md={8}>
                            <div className="ListViewContainer">
                                <ListView />
                            </div>
                        </Col>
                </Row>
            </Grid>
        </div>
      );
    }
  }



export default SearchHotels;
