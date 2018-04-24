import React from 'react'
import { Component } from 'react';
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, buttonStyle, Checkbox , Glyphicon} from 'react-bootstrap';


class SearchFilter extends Component {

  render(title, i) {
 return(
     <div id="SearchFilterContainer">

        <label>Price$
        <select class = "room-text" ref="priceFilter" >
        <option value="default"></option>
        <option value="highPrice">high to low</option>
        <option value="lowPrice">low to high</option>
        </select>
        </label>

        <label>Rating
        <select class = "room-text" ref="rateFilter" >
        <option value="default"></option>
        <option value="highRate">high to low</option>
        <option value="lowRate">low to high</option>
        </select>
        
        </label>
        <ListGroup>
            <ListGroupItem header="Hotel Name">
                <input placeholder="Hotel name..." class="borderline"></input>
                <Button type="submit" bsStyle="default" bsSize="xsmall" className="searchHotel">Details</Button>
            </ListGroupItem>

            <ListGroupItem header="Additional Filter">
                
                <dl>
                    <dt><Checkbox>swimming pool</Checkbox></dt>
                    <dt><Checkbox>Free Breakfast</Checkbox></dt>
                    <dt><Checkbox>Free Parking</Checkbox></dt>
                    <dt><Checkbox>Free Wifi</Checkbox></dt>
                    <dt><Checkbox>Pet Friendly</Checkbox></dt>
                    </dl>
            </ListGroupItem>

            <ListGroupItem header="Rating">
                    <dl>
                    <dt><Checkbox><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/></Checkbox></dt>
                    <dt><Checkbox><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/></Checkbox></dt>
                    <dt><Checkbox><Glyphicon glyph="star"/><Glyphicon glyph="star"/><Glyphicon glyph="star"/></Checkbox></dt>
                    <dt><Checkbox><Glyphicon glyph="star"/><Glyphicon glyph="star"/></Checkbox></dt>
                    <dt><Checkbox><Glyphicon glyph="star"/></Checkbox></dt>
                    </dl>
            </ListGroupItem>
        </ListGroup>
    </div>
 )
}
};

export default SearchFilter;