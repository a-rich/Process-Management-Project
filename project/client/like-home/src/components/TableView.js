import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom';
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon, Carousel} from 'react-bootstrap';
import '../stylesheets/TableView.scss'
import {searchHotels, showHotelRooms} from '../actions/Search'
import {selectedHotel, setSelectedHotelClientPrice} from '../actions.js'
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

class TableView extends Component {
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
    showDetail= (h, id) => {
      window.store.dispatch(selectedHotel({h}))
      window.store.dispatch(setSelectedHotelClientPrice(window.store.getState().selectedHotel.h.price))
      this.props.history.push('/Detailed');
  }

  componentWillMount() {
    this.setState({items:  window.store.getState().searchResults.searchResults })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: window.store.getState().searchResults.searchResults })
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   var result = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
   console.log(typeof result)
   return result;
  }


  render() {
    const { items } = this.state;
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
                  width: 150,
                  Cell: (row) => {
                    return <div className="tableImg zoomHover"><img src={row.original.image_url} onClick={this.showDetail.bind(this, row.original)}/></div>
                  },
                  filterable: false,
                  sortable: false
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
                  Header: "Address",
                  id: "location",
                  accessor: a => a.location.address1,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["location"] }),
                    filterAll: true
                },
                {
                  Header: "City",
                  id: "city",
                  accessor: a => a.location.city,
                  width: 150,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["city"] }),
                    filterAll: true
                },
                {
                  Header: "Zip",
                  id: "zip",
                  width: 100,
                  accessor: a => a.location.zip_code,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["zip"] }),
                    filterAll: true
                  
                },
                {
                  Header: "Rating",
                  id: "rating",
                  width: 60,
                  accessor: a => a.rating,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["rating"] }),
                    filterAll: true
                  
                },
                {
                  Header: "# Review",
                  id: "review",
                  width: 80,
                  accessor: a => a.review_count,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["review"] }),
                    filterAll: true
                  
                },
                {
                  Header: "($) Price",
                  id: "price",
                  accessor: a => a.price,
                  width: 80,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["price"] }),
                    filterAll: true,
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
export default withRouter(reduxConnect(mapStateToProps, mapDispatchToProps)(TableView))