import React from 'react';
import {Link} from 'react-router-dom';
//import './newitems.css';
import '../stylesheets/CollectionView.scss';

export class CollectionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {'name':"Las Vegas",
          'photo': "https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2016/02/LasVegasSign.Shutterstock-250x250.jpg"
        },
        {'name':"Miami",
        'photo': "http://www.djoybeat.com/wp-content/uploads/2014/07/miami3-250x250.jpg"
        },
        {'name':"Italy",
        'photo': "http://uncarvedblocktraveler.com/wp-content/uploads/2015/09/rome-italy-250x250.jpg"
        },
        {
          'name': "Malaysia",
          'photo': "https://i.pinimg.com/736x/2d/b4/8a/2db48a923748bd647190bfb6adbc9f4c--dream-vacations-vacation-places.jpg"
        },
        {'name':"London",
          'photo': "https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2017/04/best-time-to-go-to-london-feature-250x250.jpg"
        },
        {'name':"San Francisco",
         'photo': "http://tomsphotocafe.com/wp-content/uploads/2016/06/WS_130630-USA-CA-San-Francisco-8TP2935-250x250.jpg"
        },
        {'name':"Los Angeles",
        'photo': "http://www.djoybeat.com/wp-content/uploads/2014/05/Los_Angeles-250x250.jpg"
        },
        {'name':"New York",
        'photo': "http://tomsphotocafe.com/wp-content/uploads/2016/03/WS_NewYork_8TP8173_4_5_6_7E-1-250x250.jpg"
        },
        {'name':"New Zealand",
        'photo': "https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2017/01/MilfordSound.Shutterstock300-250x250.jpg"
        },
        {'name':"Paris",
        'photo': "https://paris-day-trip.com/wp-content/uploads/2016/10/Paris-Arc-De-Triomphe-Gallery-250x250.jpg"

      },
        {'name':"Tokyo",
        'photo': "https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2017/12/Tokyo-things-to-do-Feature-250x250.jpg"
      },
      ]
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
              <div className="itemLink">
              <Link to={`/item/${this.state.items[index].name}`} key={index} className="">
                <img src={item.photo}/>
                <div className="info">
                  <h3>{item.name}</h3>
                </div>
              </Link>
            </div>

            )
          })}
        </div>
      </section>
    );
  }
}

export default CollectionView;
