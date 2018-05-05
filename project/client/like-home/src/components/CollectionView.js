import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Col, Row} from 'react-bootstrap';
//import './newitems.css';
import '../stylesheets/CollectionView.scss';
import {withRouter} from 'react-router-dom';
import { connect as reduxConnect } from 'react-redux'
import {searchHotels} from '../actions/Search'

const mapStateToProps = () => ({
  
})

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export class CollectionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        //chicago il', 'san francisco ca', 'los angeles ca', 'san jose ca',
        //'washington dc', 'new york ny', 'miami fl', 'las vegas nv', 'austin tx
        {'name':"Chicago",
          'photo': "https://thehealingclinic.org/wp-content/uploads/2014/09/home-slide-colorful-chicago.jpg"
        },
        {'name':"San Francisco",
        'photo': "https://dr5dymrsxhdzh.cloudfront.net/blog/images/a18496/2015/04/SanFrancisco.jpg"
        },
        {'name':"Los Angeles",
        'photo': "https://www.lacity.org/sites/g/files/wph781/f/styles/tiled_homepage_blog/public/bigstock-Los-Angeles-5909078.jpg?itok=Pu2dewLz"
        },
        {
          'name': "San Jose",
          'photo': "https://www.mercurynews.com/wp-content/uploads/2016/08/20150213__0215downtownsj1.jpg?w=620"
        },
        {'name':"Washington D.C.",
          'photo': "https://media-cdn.tripadvisor.com/media/photo-s/0d/f4/d9/92/washington-dc-day-tour.jpg"
        },
        {'name':"New York",
         'photo': "https://s2.15min.lt/images/photos/2016/05/11/original/laisves-statula-niujorke-57333e1ac8175.jpg"
        },
        {'name':"Miami",
        'photo': "http://www.pullmanhotels.com/imagerie/destinations/city/miami-1400x788-1.jpg"
        },
        {'name':"Las Vegas",
        'photo': "http://www.vegaslegalmagazine.com/wp-content/uploads/2016/05/las-vegas-backgrounds_030839316_281.jpg"
        },
        {'name':"Austin",
        'photo': "https://austinot.com/wp-content/uploads/2012/06/Downtown-Austin-Texas-1024x543.jpg"
        },
      ]
    }
  }

  showHotel= (e, id) => {
    console.log("SHOW HOTEL e: ", e);
    searchHotels({"query": e})
    this.props.history.push('/SearchHotels');
}

  render() {
    //const { item } = this.state;
    var row = '';
    return(
      <section>
      <b>Popular Destinations</b>
        <div className="items">
          {this.state.items.map((item, index) => {
            return (
                <div className="itemLink" onClick={this.showHotel.bind(this, item.name)}>
                <div key={index} className="">
                  <img src={item.photo}/>
                  <div className="info">
                    <h3>{item.name}</h3>
                  </div>
                </div>
                </div>
            )
          })}
        </div>
      </section>
    );
  }
}

export default withRouter(reduxConnect(mapStateToProps, mapDispatchToProps)(CollectionView));
