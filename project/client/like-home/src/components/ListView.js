import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom';
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon, Carousel} from 'react-bootstrap';
import '../stylesheets/ListView.scss'
import {searchHotels, showHotelRooms} from '../actions/Search'
import { setSearchResults } from '../actions.js'
import { connect as reduxConnect } from 'react-redux'
import store from '../store'
import ReactTable from "react-table"
import "react-table/react-table.css";
import matchSorter from 'match-sorter'

const mapStateToProps = (searchHotels) => ({
  searchHotels
})

const mapDispatchToProps = dispatch => {
  return {
    setSearchResults(results) {
      dispatch(searchHotels)
    }
  }
}

class ListView extends Component {
  constructor(props) {
    console.log(window.store.getState().searchResults.searchResults)
    super(props);

    this.state = {
        items:[]
    };
  }

  static propTypes = {
    searchHotels: PropTypes.func.isRequired
  }

  static defaultProps = {
    items: new Map()
  }
    showDetail= (e, id) => {
      console.log(e);
      showHotelRooms(e);
      this.props.history.push('/Detailed');
  }

  componentWillMount() {
    this.setState({items:  window.store.getState().searchResults.searchResults })

  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   var result = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
   return result.toString();
  }


  render() {
    const { items } = this.state;
    const prices = {"$$$": this.getRandomInt(300, 500), "$$": this.getRandomInt(200, 300), "$": this.getRandomInt(100, 200)}
    console.log("TYPE: ", items)
 return(
        <div>
        <ReactTable
          data={items}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Hotel",
              columns: [
                {
                  Header: "Image",
                  id: "image",
                  accessor: a => a.image_url,
                  Cell: (row) => {
                    return <div><img src={row.original.image_url} onClick={this.showDetail}/></div>
                  },
                  filterable: false,
                },
                {
                  Header: "Name",
                  id: "name",
                  accessor: d => d.name,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["name"] }),
                  filterAll: true
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "City",
                  id: "city",
                  accessor: a => a.location.city,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["city"] }),
                    filterAll: true
                },
                {
                  Header: "Address",
                  id: "location",
                  accessor: a => a.location.address1,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["location"] }),
                    filterAll: true
                },
                {
                  Header: "Zip",
                  id: "zip",
                  accessor: a => a.location.zip_code,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["zip"] }),
                    filterAll: true
                  
                },
                {
                  Header: "($) Price",
                  id: "price",
                  accessor: a => a.price,
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["price"] }),
                    Cell: ({ value } ) => (
                      value = prices[value]
                      
                    ),
                    
                    filterAll: true,
                    //filterable: true,
                },
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
 )
}
};
export default withRouter(reduxConnect(mapStateToProps, mapDispatchToProps)(ListView))
