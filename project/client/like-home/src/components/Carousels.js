import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import '../stylesheets/Carousels.scss'

class Carousels extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hotelImgaes: [
            
          ]
        };
      }

      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
       var result = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
       return result;
      }

      onIncrementClick = () => {
        this.setState(this.increment);
      }

      increment(state) {
        return { ...state, counter: state.counter + 1 };
      }

      componentDidMount() {
        this.setState({hotelImgaes:
        ["https://i.ytimg.com/vi/zta2QFVhnDQ/maxresdefault.jpg",
        "https://s-ec.bstatic.com/images/hotel/max1024x768/427/42752845.jpg",
        "http://www.elitetraveler.com/wp-content/uploads/2013/06/full-room-view.jpg",
        "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/10/07/38/atlantas-top-10-hotels-w.rend.hgtvcom.1280.720.suffix/1491584477382.jpeg",
        "https://vignette.wikia.nocookie.net/yakuza-mob-roleplay/images/9/93/Hotel-Room-With-A-View.jpg/revision/latest?cb=20141121164436",
        "http://parisbym.com/wp-content/uploads/2017/03/Print_Kempinski-Ambience-Hotel-Delhi-GuestRoom.jpg",
        "https://i.pinimg.com/originals/01/d7/44/01d7440eff4830436df18e099e680aac.jpg", 
        "https://9c401805f5baa067c575-09d1411f3dd7d95893f250fe5ea1fdb3.ssl.cf1.rackcdn.com/lps/assets/u/Deluxe-Room-Hotel-Grande-Bretagne-Luxury-Collection-Athens-Greece-SPG-Marriott-Rewards.jpg",
        "http://www.hotelcitycentre.co.in/wp-content/uploads/2014/06/5241ec3d5c61d_27534-1038x576.jpg", 
        "http://www.hermitage-hotel.co.uk/wp-content/uploads/2014/05/Hermitage-Superior-Room-613-bed-1620x1080.jpg",
        "http://asbienestar.co/wp-content/uploads/2018/01/master-bedroom-suites-new-at-luxury-with-ideas-hd-gallery.jpg", 
        "http://583fade399980449fdc4-8707e592ab80f1e7a34ff172e2a30022.r58.cf1.rackcdn.com/lps/assets/u/W-Doha-Hotel---Residences---Marvelous-Room.jpg",
        "https://w-dog.net/wallpapers/1/65/454061920509178/picture-tv-sofa-chairs-apartment-table-kitchen-salon-living-room.jpg", 
        "http://banbenpu.com/wp-content/uploads/2017/05/top-hotel-room-night-home-design-awesome-fantastical-to-hotel-room-night-interior-design.jpg",]
        })
      }

      componentWillReceiveProps(){
        this.setState({hotelImgaes:
          ["https://i.ytimg.com/vi/zta2QFVhnDQ/maxresdefault.jpg",
          "https://s-ec.bstatic.com/images/hotel/max1024x768/427/42752845.jpg",
          "http://www.elitetraveler.com/wp-content/uploads/2013/06/full-room-view.jpg",
          "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/10/07/38/atlantas-top-10-hotels-w.rend.hgtvcom.1280.720.suffix/1491584477382.jpeg",
          "https://vignette.wikia.nocookie.net/yakuza-mob-roleplay/images/9/93/Hotel-Room-With-A-View.jpg/revision/latest?cb=20141121164436",
          "http://parisbym.com/wp-content/uploads/2017/03/Print_Kempinski-Ambience-Hotel-Delhi-GuestRoom.jpg",
          "https://i.pinimg.com/originals/01/d7/44/01d7440eff4830436df18e099e680aac.jpg", 
          "https://9c401805f5baa067c575-09d1411f3dd7d95893f250fe5ea1fdb3.ssl.cf1.rackcdn.com/lps/assets/u/Deluxe-Room-Hotel-Grande-Bretagne-Luxury-Collection-Athens-Greece-SPG-Marriott-Rewards.jpg",
          "http://www.hotelcitycentre.co.in/wp-content/uploads/2014/06/5241ec3d5c61d_27534-1038x576.jpg", 
          "http://www.hermitage-hotel.co.uk/wp-content/uploads/2014/05/Hermitage-Superior-Room-613-bed-1620x1080.jpg",
          "https://www.paradiseview.gr/img/home/03paradiseviewhotel-mykonos.jpg",
          "http://asbienestar.co/wp-content/uploads/2018/01/master-bedroom-suites-new-at-luxury-with-ideas-hd-gallery.jpg", 
          "http://583fade399980449fdc4-8707e592ab80f1e7a34ff172e2a30022.r58.cf1.rackcdn.com/lps/assets/u/W-Doha-Hotel---Residences---Marvelous-Room.jpg",
          "https://w-dog.net/wallpapers/1/65/454061920509178/picture-tv-sofa-chairs-apartment-table-kitchen-salon-living-room.jpg", 
          "http://banbenpu.com/wp-content/uploads/2017/05/top-hotel-room-night-home-design-awesome-fantastical-to-hotel-room-night-interior-design.jpg",]
          })
      }

    render() {
        return (
            <Carousel>
            <Carousel.Item>
              <img  width={900} height={500} src={window.store.getState().selectedHotel.h.image_url} />
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500}  src={this.state.hotelImgaes[this.getRandomInt(0, this.state.hotelImgaes.length)]}/>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500}  src={this.state.hotelImgaes[this.getRandomInt(0, this.state.hotelImgaes.length)]}/>
            </Carousel.Item>
          </Carousel>
        );
    }
}

export default Carousels;
