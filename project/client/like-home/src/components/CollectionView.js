import React from 'react';
import {Link} from 'react-router-dom';
//import './newitems.css';
import '../stylesheets/CollectionView.scss';

export class CollectionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1,2,3,4,5,6,7,8]
    }
  }

  componentDidMount() {
    /*fetch(`https://picsum.photos/400/250`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const items = data.results;
          this.setState({ items });
        });

      })
      .catch(err => {
        console.log('Fetch Error :-S', err);
      })*/
  }

  render() {
    return(
      <section>
        <div className="items">
          {this.state.items.map((item, index) => {
            return (
              <Link to={`/item/${this.state.items[index].id}`} key={index} className="itemLink">
                <img src={'http://via.placeholder.com/400x250'}/>

                <div className="itemInfo">
                  <h3>Destination Name</h3>
                  <p>Destination Location</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    );
  }
}

export default CollectionView;
