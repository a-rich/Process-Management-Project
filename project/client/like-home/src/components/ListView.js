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
        items: [
          {
            "id": "5LNZ67Yw9RD6nf4_UhXOjw",
            "alias": "the-cosmopolitan-of-las-vegas-las-vegas",
            "name": "The Cosmopolitan of Las Vegas",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CvChZm5SAGt5bm9IL2evog/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-cosmopolitan-of-las-vegas-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 4005,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "casinos",
                    "title": "Casinos"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 36.1097192163669,
                "longitude": -115.173992335813
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "3708 Las Vegas Blvd S",
                "address2": null,
                "address3": null,
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3708 Las Vegas Blvd S",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+17026987000",
            "display_phone": "(702) 698-7000",
            "distance": 3335.747681764089
        },
        {
          "id": "5LNZ67Yw9RD6nf4_UhXOjw",
          "alias": "the-cosmopolitan-of-las-vegas-las-vegas",
          "name": "HACKS",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CvChZm5SAGt5bm9IL2evog/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/the-cosmopolitan-of-las-vegas-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
          "review_count": 4005,
          "categories": [
              {
                  "alias": "hotels",
                  "title": "Hotels"
              },
              {
                  "alias": "casinos",
                  "title": "Casinos"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 36.1097192163669,
              "longitude": -115.173992335813
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "3708 Las Vegas Blvd S",
              "address2": null,
              "address3": null,
              "city": "Las Vegas",
              "zip_code": "89109",
              "country": "US",
              "state": "NV",
              "display_address": [
                  "3708 Las Vegas Blvd S",
                  "Las Vegas, NV 89109"
              ]
          },
          "phone": "+17026987000",
          "display_phone": "(702) 698-7000",
          "distance": 3335.747681764089
      },
      {
        "id": "5LNZ67Yw9RD6nf4_UhXOjw",
        "alias": "the-cosmopolitan-of-las-vegas-las-vegas",
        "name": "YEEEEEEEEEEEEEEEE",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CvChZm5SAGt5bm9IL2evog/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-cosmopolitan-of-las-vegas-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
        "review_count": 4005,
        "categories": [
            {
                "alias": "hotels",
                "title": "Hotels"
            },
            {
                "alias": "casinos",
                "title": "Casinos"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 36.1097192163669,
            "longitude": -115.173992335813
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "3708 Las Vegas Blvd S",
            "address2": null,
            "address3": null,
            "city": "Las Vegas",
            "zip_code": "89109",
            "country": "US",
            "state": "NV",
            "display_address": [
                "3708 Las Vegas Blvd S",
                "Las Vegas, NV 89109"
            ]
        },
        "phone": "+17026987000",
        "display_phone": "(702) 698-7000",
        "distance": 3335.747681764089
    },
        ]
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
    // this.setState({items: [ [].concat.apply([], window.store.getState().searchResults.searchResults.slice(1, 20))
    // ]})
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var result = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    return result.toString();
  }


  render() {
    const { items } = this.state;
    const prices = {"$$$": this.getRandomInt(100, 300), "$$": this.getRandomInt(100, 300), "$": this.getRandomInt(100, 300)}
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
                    return <div><img src={row.original.image_url}/></div>
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
                },
                {
                  Header: "Address",
                  id: "location",
                  accessor: a => a.location.address1,
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
                  filterAll: true,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["price"] }),
                    Cell: ({ value }) => (
                      value = prices[value]
                    )
                  
                 
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
