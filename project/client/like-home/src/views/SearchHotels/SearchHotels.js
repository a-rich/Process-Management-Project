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
import SearchBar from '../../components/SearchBar'
import TableView from '../../components/TableView'
import { withRouter } from "react-router-dom"
import { connect as reduxConnect } from 'react-redux'
import scrollToComponent from 'react-scroll-to-component'

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

const mapStateToProps = (locations) => ({
    SearchBar, TableView, locations
})

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

class SearchHotels extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }

    update= (e) => {
        this.props.history.push('/SearchHotels');
    }

    componentDidMount() {
        scrollToComponent(this.Top, { offset: 0, align: 'top', duration: 1})
    }

    render() {
      return (
        
        <div class="contentListView">
        
            <Grid>
            <section className='top' ref={(section) => { this.Top = section; }}>
            </section>
                <Row>
                    <Col>
                   
                        <div className="searchBarContainer">
                            <SearchBar />
                        </div>
                     
                    </Col>
                </Row>

                <Row >

                    <Col md={12}>
                        <div className="ListViewContainer">
                            <TableView />
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
      );
    }
  }



export default withRouter(reduxConnect(mapStateToProps, mapDispatchToProps)(SearchHotels));;
