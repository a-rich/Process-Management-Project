import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Counter from './components/Counter';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'
import { currentUser } from './store/reducers.js'
import C from './constants'
import appReducer from './store/reducers'
import { createStore } from 'redux'
import storeFactory from './store'
import { setcurrentuser, setSearchResults, setCityData } from './actions'
import { Provider } from 'react-redux'
import { searchHotels } from './actions/Search';

const initialState = (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']) : {}
const store = storeFactory(initialState)
window.React = React
window.store = store
window.store.dispatch(setCityData({"sanjose":[{
            "id": "ONg16hbHi8j1uITxIeQRZQ",
            "alias": "hotel-valencia-santana-row-san-jose",
            "name": "Hotel Valencia Santana Row",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/pdG2AnG1tBZB4WppBFov6Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hotel-valencia-santana-row-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 523,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.32095,
                "longitude": -121.94808
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "355 Santana Row",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95128",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "355 Santana Row",
                    "San Jose, CA 95128"
                ]
            },
            "phone": "+14085510010",
            "display_phone": "(408) 551-0010",
            "distance": 5613.3691159376
        },
        {
            "id": "MiuHFLpfUBZVDHaYfxybrg",
            "alias": "fairmont-san-jose-san-jose",
            "name": "Fairmont San Jose",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/GHe-F7QcCVqadzRUpf9vRw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/fairmont-san-jose-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 831,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.333,
                "longitude": -121.88898
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "170 South Market St",
                "address2": null,
                "address3": "",
                "city": "San Jose",
                "zip_code": "95113",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "170 South Market St",
                    "San Jose, CA 95113"
                ]
            },
            "phone": "+14089981900",
            "display_phone": "(408) 998-1900",
            "distance": 1869.76616259082
        },
        {
            "id": "HDyEDsf5L1AkIqJ5KcLIWQ",
            "alias": "dolce-hayes-mansion-san-jose",
            "name": "Dolce Hayes Mansion",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/oH_xfMciIp_rtDQK6uBWOw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/dolce-hayes-mansion-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 402,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.262356,
                "longitude": -121.820315
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "200 Edenvale Ave",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95136",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "200 Edenvale Ave",
                    "San Jose, CA 95136"
                ]
            },
            "phone": "+18669813300",
            "display_phone": "(866) 981-3300",
            "distance": 8308.949499765433
        },
        {
            "id": "xHUWdPO6U-VD2AMEBfov8Q",
            "alias": "hotel-de-anza-san-jose",
            "name": "Hotel De Anza",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/pJZtDTZRK54qaitNuWgAMg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hotel-de-anza-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 288,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.33441,
                "longitude": -121.89511
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "233 W Santa Clara St",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95113",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "233 W Santa Clara St",
                    "San Jose, CA 95113"
                ]
            },
            "phone": "+14082861000",
            "display_phone": "(408) 286-1000",
            "distance": 2161.4813860197173
        },
        {
            "id": "hrmZSqyU2VC9qamseoKhlA",
            "alias": "san-jose-marriott-san-jose",
            "name": "San Jose Marriott",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/nQaaMqjDpiOtrfGxrhOrgA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/san-jose-marriott-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 288,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.3303788756706,
                "longitude": -121.888289451599
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "301 South Market St",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95113",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "301 South Market St",
                    "San Jose, CA 95113"
                ]
            },
            "phone": "+14082801300",
            "display_phone": "(408) 280-1300",
            "distance": 1571.3441892143474
        },
        {
            "id": "qH7ifdpVitPRUa6nWDVuVA",
            "alias": "four-points-by-sheraton-san-jose-downtown-san-jose",
            "name": "Four Points by Sheraton San Jose Downtown",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/3-j28yltShyM_3Jpw-Dy4Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/four-points-by-sheraton-san-jose-downtown-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 308,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.33215,
                "longitude": -121.88805
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "211 S. First Street",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95113",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "211 S. First Street",
                    "San Jose, CA 95113"
                ]
            },
            "phone": "+14082828800",
            "display_phone": "(408) 282-8800",
            "distance": 1758.1892905982124
        },
        {
            "id": "STlGN78IsC35WrOIVkZ9jw",
            "alias": "hyatt-house-san-jose-silicon-valley-san-jose",
            "name": "Hyatt House San Jose/ Silicon Valley",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/3_scMzzDsVd4h97qhBYnEQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hyatt-house-san-jose-silicon-valley-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 94,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.4165,
                "longitude": -121.95296
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "75 Headquarters Drive",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95134",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "75 Headquarters Drive",
                    "San Jose, CA 95134"
                ]
            },
            "phone": "+14083241155",
            "display_phone": "(408) 324-1155",
            "distance": 12638.880592897483
        },
        {
            "id": "cCaGQGb6_LiJ41zqfQ6nJg",
            "alias": "hyatt-place-san-jose-downtown-san-jose-2",
            "name": "Hyatt Place San Jose Downtown",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/GOVvvbyla2JwiIFkIJEoKA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hyatt-place-san-jose-downtown-san-jose-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 168,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 37.330208,
                "longitude": -121.891091
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "282 Almaden Blvd",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95113",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "282 Almaden Blvd",
                    "San Jose, CA 95113"
                ]
            },
            "phone": "+14089980400",
            "display_phone": "(408) 998-0400",
            "distance": 1616.5204570123692
        },
        {
            "id": "TL9XiZjj3ybCh2shcMSHOg",
            "alias": "fairfield-inn-and-suites-by-marriott-san-jose-airport-san-jose",
            "name": "Fairfield Inn & Suites by Marriott San Jose Airport",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/_-Hgo1Ttz96wT26JXsPULw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/fairfield-inn-and-suites-by-marriott-san-jose-airport-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 116,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.369819,
                "longitude": -121.917981
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1755 North First St",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95112",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1755 North First St",
                    "San Jose, CA 95112"
                ]
            },
            "phone": "+14084533133",
            "display_phone": "(408) 453-3133",
            "distance": 6606.028075291438
        },
        {
            "id": "2rQdoGhIRV6GCQMOtFJ2ow",
            "alias": "best-western-plus-airport-plaza-san-jose",
            "name": "Best Western Plus Airport Plaza",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/YVe-EflEfSFqNk2EBs_qGg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/best-western-plus-airport-plaza-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 45,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.3438747,
                "longitude": -121.9286435
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "2118 The Alameda",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95126",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "2118 The Alameda",
                    "San Jose, CA 95126"
                ]
            },
            "phone": "+14082432400",
            "display_phone": "(408) 243-2400",
            "distance": 4911.264233245274
        },
        {
            "id": "WqrMqQaLiYd1OCsl6cDxVA",
            "alias": "doubletree-by-hilton-hotel-san-jose-san-jose",
            "name": "DoubleTree by Hilton Hotel San Jose",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/CYbsiLoDopg_aeEzMXdfcw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/doubletree-by-hilton-hotel-san-jose-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 464,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 2.5,
            "coordinates": {
                "latitude": 37.3716926574707,
                "longitude": -121.922760009766
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "2050 Gateway Pl",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95110",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "2050 Gateway Pl",
                    "San Jose, CA 95110"
                ]
            },
            "phone": "+14084534000",
            "display_phone": "(408) 453-4000",
            "distance": 6997.838377343068
        },
        {
            "id": "N698pP3Qmh5RadbSPZlFrw",
            "alias": "hilton-san-jose-san-jose-3",
            "name": "Hilton San Jose",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/W8mThh4GwLicSoh4YB2IZg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hilton-san-jose-san-jose-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 199,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 37.329185152515,
                "longitude": -121.89057248995
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "300 Almaden Blvd",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95110",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "300 Almaden Blvd",
                    "San Jose, CA 95110"
                ]
            },
            "phone": "+14082872100",
            "display_phone": "(408) 287-2100",
            "distance": 1494.0429333059396
        },
        {
            "id": "9SuEsZsTUIBjyjEtCSoJIQ",
            "alias": "courtyard-by-marriott-san-jose-airport-san-jose",
            "name": "Courtyard by Marriott San Jose Airport",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/SMu8Tlj17qKr7xvOTQ1b-Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/courtyard-by-marriott-san-jose-airport-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 89,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.3654849014316,
                "longitude": -121.918431553581
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1727 Technology Dr",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95110",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1727 Technology Dr",
                    "San Jose, CA 95110"
                ]
            },
            "phone": "+14084416111",
            "display_phone": "(408) 441-6111",
            "distance": 6195.899147025544
        },
        {
            "id": "oxuEXSguOCo4dEsArG1VkA",
            "alias": "la-quinta-inn-and-suites-san-jose-airport-san-jose",
            "name": "La Quinta Inn & Suites San Jose Airport",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/GwDqLrlM8PkaEQXvaM3F3g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/la-quinta-inn-and-suites-san-jose-airport-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 108,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.378175,
                "longitude": -121.939132
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "2585 Seaboard Ave",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95131",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "2585 Seaboard Ave",
                    "San Jose, CA 95131"
                ]
            },
            "phone": "+14084358800",
            "display_phone": "(408) 435-8800",
            "distance": 8360.46477954744
        },
        {
            "id": "_f1eYykgDBm0MemagBGEEA",
            "alias": "residence-inn-by-marriott-san-jose-airport-san-jose-3",
            "name": "Residence Inn by Marriott San Jose Airport",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/f6o7R21jzdplxa3SlnYH6g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/residence-inn-by-marriott-san-jose-airport-san-jose-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 33,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.3663769906799,
                "longitude": -121.913750767721
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "10 Skyport Dr",
                "address2": null,
                "address3": "",
                "city": "San Jose",
                "zip_code": "95110",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "10 Skyport Dr",
                    "San Jose, CA 95110"
                ]
            },
            "phone": "+14086500580",
            "display_phone": "(408) 650-0580",
            "distance": 6100.032261344506
        },
        {
            "id": "XCWjH3xDD-oUzvEXB-OZiA",
            "alias": "arena-hotel-san-jose-2",
            "name": "Arena Hotel",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/OfrbnGie-AnVd-jZCBNRJQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/arena-hotel-san-jose-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 186,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 37.3325042724609,
                "longitude": -121.906135559082
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "817 The Alameda",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95126",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "817 The Alameda",
                    "San Jose, CA 95126"
                ]
            },
            "phone": "+14082946500",
            "display_phone": "(408) 294-6500",
            "distance": 2577.0335659839066
        },
        {
            "id": "cvYMDdkOlSDzkG6bjBGDOw",
            "alias": "the-westin-san-jose-san-jose",
            "name": "The Westin San Jose",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ZON4v-QX-6D8eCAvlEpQlA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-westin-san-jose-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 62,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.3307531660751,
                "longitude": -121.887687295771
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "302 S Market St",
                "address2": null,
                "address3": "",
                "city": "San Jose",
                "zip_code": "95113",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "302 S Market St",
                    "San Jose, CA 95113"
                ]
            },
            "phone": "+14082952000",
            "display_phone": "(408) 295-2000",
            "distance": 1603.7499334254112
        },
        {
            "id": "B2LexibWvFN92lv9U13Y6A",
            "alias": "ac-hotel-by-marriott-san-jose-downtown-san-jose",
            "name": "AC Hotel by Marriott San Jose Downtown",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/wlBZA-EsHGgsYeEipvLreQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/ac-hotel-by-marriott-san-jose-downtown-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 61,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.3331993513461,
                "longitude": -121.896172384741
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "350 W Santa Clara St",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95113",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "350 W Santa Clara St",
                    "San Jose, CA 95113"
                ]
            },
            "phone": "+14089240900",
            "display_phone": "(408) 924-0900",
            "distance": 2102.238942556953
        },
        {
            "id": "iV-yv1Tqe69TxAay321q6w",
            "alias": "towneplace-suites-by-marriott-san-jose-cupertino-san-jose",
            "name": "TownePlace Suites by Marriott San Jose Cupertino",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/m3gjwI3Qgzah3W8fNXf83g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/towneplace-suites-by-marriott-san-jose-cupertino-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 37,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.3195746614335,
                "longitude": -121.972237903706
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "440 Saratoga Ave",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95129",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "440 Saratoga Ave",
                    "San Jose, CA 95129"
                ]
            },
            "phone": "+14089845903",
            "display_phone": "(408) 984-5903",
            "distance": 7715.972180729046
        },
        {
            "id": "d2UVg5KvpBm8ECvevQs28g",
            "alias": "hampton-inn-and-suites-san-jose-san-jose",
            "name": "Hampton Inn & Suites San Jose",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/iIj21LUtZIxtvAajyMP8zw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hampton-inn-and-suites-san-jose-san-jose?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 64,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.301931,
                "longitude": -121.857786
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "55 Old Tully Rd",
                "address2": "",
                "address3": "",
                "city": "San Jose",
                "zip_code": "95112",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "55 Old Tully Rd",
                    "San Jose, CA 95112"
                ]
            },
            "phone": "+14082987373",
            "display_phone": "(408) 298-7373",
            "distance": 2905.2923782028
        }], "chicago": [ {
            "id": "9zyVPStnDbZS2bP7w7sizw",
            "alias": "the-peninsula-chicago-chicago",
            "name": "The Peninsula Chicago",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/OhpLRUumjOnU8xQbgQK6HQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-peninsula-chicago-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 297,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 41.8959532,
                "longitude": -87.6251194
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "108 E Superior St",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60611",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "108 E Superior St",
                    "Chicago, IL 60611"
                ]
            },
            "phone": "+13123372888",
            "display_phone": "(312) 337-2888",
            "distance": 4475.727303635226
        },
        {
            "id": "cR6XWEvbAKoG3tgbigUl5A",
            "alias": "the-langham-chicago-chicago",
            "name": "The Langham Chicago",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/A5TU4yOTHtvDeRqNPwv-5g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-langham-chicago-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 252,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 41.88906,
                "longitude": -87.62757
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "330 N Wabash Ave",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60611",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "330 N Wabash Ave",
                    "Chicago, IL 60611"
                ]
            },
            "phone": "+13129239988",
            "display_phone": "(312) 923-9988",
            "distance": 4551.216800813066
        },
        {
            "id": "K4g2iDkrxdhlwCGq3lyd5g",
            "alias": "kimpton-hotel-palomar-chicago-chicago",
            "name": "Kimpton Hotel Palomar Chicago",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ju2zFW3r-O-ahEoz1AQuBw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimpton-hotel-palomar-chicago-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 353,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                },
                {
                    "alias": "wedding_planning",
                    "title": "Wedding Planning"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 41.89111,
                "longitude": -87.62754
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "505 N State St",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60654",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "505 N State St",
                    "Chicago, IL 60654"
                ]
            },
            "phone": "+13127559703",
            "display_phone": "(312) 755-9703",
            "distance": 4453.162160374819
        },
        {
            "id": "DC1sD5TsqljP_BIAV6S-pw",
            "alias": "the-james-chicago-chicago",
            "name": "The James Chicago",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UDrO_HGPQF0GY8Gs2gz-Pg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-james-chicago-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 418,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 41.8931814103866,
                "longitude": -87.6257629325409
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "55 E Ontario St",
                "address2": null,
                "address3": "",
                "city": "Chicago",
                "zip_code": "60611",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "55 E Ontario St",
                    "Chicago, IL 60611"
                ]
            },
            "phone": "+13123371000",
            "display_phone": "(312) 337-1000",
            "distance": 4505.2914079157745
        },
        {
            "id": "Py3h9oe2Dl2vKmbZL2KbUg",
            "alias": "four-seasons-hotel-chicago-chicago",
            "name": "Four Seasons Hotel Chicago",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/KbqTLFavm6-6DGRxV9ai2Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/four-seasons-hotel-chicago-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 227,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 41.8993191,
                "longitude": -87.6251117
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "120 E Delaware Pl",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60611",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "120 E Delaware Pl",
                    "Chicago, IL 60611"
                ]
            },
            "phone": "+13122808800",
            "display_phone": "(312) 280-8800",
            "distance": 4400.656296636648
        },
        {
            "id": "k69U-UwdHLtY_cZW3FldHg",
            "alias": "virgin-hotels-chicago-chicago-2",
            "name": "Virgin Hotels Chicago",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ZjQB1II-ujUQUCXrJwToQQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/virgin-hotels-chicago-chicago-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 264,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 41.8860699,
                "longitude": -87.62603
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "203 N Wabash",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60601",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "203 N Wabash",
                    "Chicago, IL 60601"
                ]
            },
            "phone": "+13129404400",
            "display_phone": "(312) 940-4400",
            "distance": 4792.696636290463
        },
        {
            "id": "qnizyJQ7u7bgGqSJAH62xA",
            "alias": "sofitel-chicago-magnificent-mile-chicago-2",
            "name": "Sofitel Chicago Magnificent Mile",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/R7JEBwZIK-pCWQ8_x5Pv1A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sofitel-chicago-magnificent-mile-chicago-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 345,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 41.898654,
                "longitude": -87.627307
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "20 E Chestnut St",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60611",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "20 E Chestnut St",
                    "Chicago, IL 60611"
                ]
            },
            "phone": "+13123244000",
            "display_phone": "(312) 324-4000",
            "distance": 4238.136603006657
        },
        {
            "id": "NdkoP46IILVL37AeKKNWfA",
            "alias": "trump-international-hotel-and-tower-chicago-chicago-2",
            "name": "Trump International Hotel & Tower Chicago",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/iGKDXnB5xyop2tmdAlpz3w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/trump-international-hotel-and-tower-chicago-chicago-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 367,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 41.8892137356442,
                "longitude": -87.626560916989
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "401 N Wabash Ave",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60611",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "401 N Wabash Ave",
                    "Chicago, IL 60611"
                ]
            },
            "phone": "+13125888000",
            "display_phone": "(312) 588-8000",
            "distance": 4593.960513472198
        },
        {
            "id": "DAmwxF36pTeI2sZWdASfpg",
            "alias": "chicago-athletic-association-hotel-chicago",
            "name": "Chicago Athletic Association Hotel",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/STFlfC1vLGE2lN3w_t8r7A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/chicago-athletic-association-hotel-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 257,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 41.8816255,
                "longitude": -87.6249418
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "12 S Michigan Ave",
                "address2": null,
                "address3": "",
                "city": "Chicago",
                "zip_code": "60603",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "12 S Michigan Ave",
                    "Chicago, IL 60603"
                ]
            },
            "phone": "+13129403552",
            "display_phone": "(312) 940-3552",
            "distance": 5095.551073785951
        },
        {
            "id": "d-fDbmNXWAS4MIL9LSY2Lw",
            "alias": "kimpton-hotel-monaco-chicago-chicago",
            "name": "Kimpton Hotel Monaco Chicago",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/MWrM2tzbA92K6nKviYWvsA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimpton-hotel-monaco-chicago-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 278,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                },
                {
                    "alias": "wedding_planning",
                    "title": "Wedding Planning"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 41.8864681337098,
                "longitude": -87.6265341082282
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "225 N Wabash Ave",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60601",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "225 N Wabash Ave",
                    "Chicago, IL 60601"
                ]
            },
            "phone": "+13129608500",
            "display_phone": "(312) 960-8500",
            "distance": 4722.275124137187
        },
        {
            "id": "NkOir65b_YAAQVlJR_zmJA",
            "alias": "hyatt-regency-chicago-chicago-3",
            "name": "Hyatt Regency Chicago",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/2Ozdfzeb3QiPz4zf-dvZww/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hyatt-regency-chicago-chicago-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 738,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 41.8877606539862,
                "longitude": -87.6216910678688
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "151 E Wacker Dr",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60601",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "151 E Wacker Dr",
                    "Chicago, IL 60601"
                ]
            },
            "phone": "+13125651234",
            "display_phone": "(312) 565-1234",
            "distance": 5028.207693377367
        },
        {
            "id": "Bsxv6Z8mc6cASwHewdHAUQ",
            "alias": "the-blackstone-autograph-collection-chicago",
            "name": "The Blackstone, Autograph Collection",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/okwnAZWPXwU1vcRG7h9YWw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-blackstone-autograph-collection-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 273,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 41.8732819301618,
                "longitude": -87.6247443334887
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "636 S Michigan Ave",
                "address2": null,
                "address3": "",
                "city": "Chicago",
                "zip_code": "60605",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "636 S Michigan Ave",
                    "Chicago, IL 60605"
                ]
            },
            "phone": "+13124470955",
            "display_phone": "(312) 447-0955",
            "distance": 5641.514287385742
        },
        {
            "id": "zx8Y6GI_YiIo4xQSbHblEA",
            "alias": "the-palmer-house-a-hilton-hotel-chicago",
            "name": "The Palmer House - A Hilton Hotel",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/YulYVPutpJhznQ3BqSYRtg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-palmer-house-a-hilton-hotel-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 1028,
            "categories": [
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                },
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 41.8802817321187,
                "longitude": -87.6270550489426
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "17 E Monroe St",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60603",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "17 E Monroe St",
                    "Chicago, IL 60603"
                ]
            },
            "phone": "+13127267500",
            "display_phone": "(312) 726-7500",
            "distance": 5026.963875313103
        },
        {
            "id": "HTBxJPblBauNNCm_qSQjSQ",
            "alias": "radisson-blu-aqua-chicago",
            "name": "Radisson Blu Aqua",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/NrMNaT8DG7CouoTpt7FuTg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/radisson-blu-aqua-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 269,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 41.8863283820531,
                "longitude": -87.620290517807
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "221 N Columbus Dr",
                "address2": null,
                "address3": "",
                "city": "Chicago",
                "zip_code": "60601",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "221 N Columbus Dr",
                    "Chicago, IL 60601"
                ]
            },
            "phone": "+13125655258",
            "display_phone": "(312) 565-5258",
            "distance": 5197.539213929641
        },
        {
            "id": "fH7EwQ9j_Ab1NJNYMoHA3w",
            "alias": "the-wit-a-doubletree-by-hilton-chicago",
            "name": "The Wit - A DoubleTree By Hilton",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/_AgV2b0n9dMpQDI4fluioQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-wit-a-doubletree-by-hilton-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 421,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 41.8860699,
                "longitude": -87.6276199
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "201 N State St",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60601",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "201 N State St",
                    "Chicago, IL 60601"
                ]
            },
            "phone": "+13124670200",
            "display_phone": "(312) 467-0200",
            "distance": 4673.705114197987
        },
        {
            "id": "ayC4pXwDxIHbxTi7emVmCg",
            "alias": "park-hyatt-chicago-chicago-3",
            "name": "Park Hyatt Chicago",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Pjf8GhbJErP1-pnuG_duig/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/park-hyatt-chicago-chicago-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 158,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 41.896953,
                "longitude": -87.625112
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "800 N Michigan Ave",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60611",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "800 N Michigan Ave",
                    "Chicago, IL 60611"
                ]
            },
            "phone": "+13123351234",
            "display_phone": "(312) 335-1234",
            "distance": 4452.182297943335
        },
        {
            "id": "ojCaK0Z7nSMB8gPGbyjzAw",
            "alias": "the-alise-chicago",
            "name": "The Alise",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/cf4jVNKBciRsPSikoR_zOQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-alise-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 145,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 41.88304,
                "longitude": -87.62826
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1 W Washington St",
                "address2": null,
                "address3": "",
                "city": "Chicago",
                "zip_code": "60602",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "1 W Washington St",
                    "Chicago, IL 60602"
                ]
            },
            "phone": "+13129407997",
            "display_phone": "(312) 940-7997",
            "distance": 4781.121063991235
        },
        {
            "id": "Ol9NPdz1yWaTszso0JrqHg",
            "alias": "acme-hotel-company-chicago-2",
            "name": "ACME Hotel Company",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ZCKzYfWAie-rnauHJc_wyA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/acme-hotel-company-chicago-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 220,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 41.89226,
                "longitude": -87.6275
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "15 E Ohio St",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60611",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "15 E Ohio St",
                    "Chicago, IL 60611"
                ]
            },
            "phone": "+13128940800",
            "display_phone": "(312) 894-0800",
            "distance": 4401.188088991323
        },
        {
            "id": "LDze56Nd8rRljNDMaD1sbA",
            "alias": "dana-hotel-and-spa-chicago",
            "name": "Dana Hotel & Spa",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ouJvd_udz9tNANs-AY_Y_g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/dana-hotel-and-spa-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 422,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 41.8942645,
                "longitude": -87.6283025
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "660 North State St",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60654",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "660 North State St",
                    "Chicago, IL 60654"
                ]
            },
            "phone": "+13122026000",
            "display_phone": "(312) 202-6000",
            "distance": 4263.983554977037
        },
        {
            "id": "S_qmb0Uzm_cNoRjSvZ6y1w",
            "alias": "the-talbott-hotel-chicago",
            "name": "The Talbott Hotel",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/mVKzeqXkn6EdscwnRYkEmQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-talbott-hotel-chicago?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 151,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 41.8993868,
                "longitude": -87.6275053
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "20 E Delaware Pl",
                "address2": "",
                "address3": "",
                "city": "Chicago",
                "zip_code": "60611",
                "country": "US",
                "state": "IL",
                "display_address": [
                    "20 E Delaware Pl",
                    "Chicago, IL 60611"
                ]
            },
            "phone": "+18008252688",
            "display_phone": "(800) 825-2688",
            "distance": 4208.748317960024
        }], "sanfrancisco":[{
            "id": "sEoSdQUjmShqU6cas4AP9Q",
            "alias": "omni-san-francisco-hotel-san-francisco",
            "name": "Omni San Francisco Hotel",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/l0tot1eLgn70zChbEYWsAA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/omni-san-francisco-hotel-san-francisco?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 572,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.792877,
                "longitude": -122.4028272
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "500 California St",
                "address2": null,
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94104",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "500 California St",
                    "San Francisco, CA 94104"
                ]
            },
            "phone": "+14156779494",
            "display_phone": "(415) 677-9494",
            "distance": 3604.487083727041
        },
        {
            "id": "Ky5Y1JbytbUvxyIfJZ03EQ",
            "alias": "the-st-regis-san-francisco-san-francisco",
            "name": "The St. Regis San Francisco",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/xkqRgJWV2tMDZgHlMTj4QQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-st-regis-san-francisco-san-francisco?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 406,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.78629,
                "longitude": -122.40138
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "125 3rd St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "125 3rd St",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+14152844000",
            "display_phone": "(415) 284-4000",
            "distance": 3161.1252623042806
        },
        {
            "id": "Bab9bdd3SUkXPo6jIVO55Q",
            "alias": "w-san-francisco-san-francisco",
            "name": "W San Francisco",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/lJlmTdjTT6AXWDw2-ZzjJQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/w-san-francisco-san-francisco?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 1049,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.7853691,
                "longitude": -122.4006895
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "181 3rd St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "181 3rd St",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+14157775300",
            "display_phone": "(415) 777-5300",
            "distance": 3141.725160592321
        },
        {
            "id": "5c8wh5-BXxbKrCEg1uGuxw",
            "alias": "intercontinental-san-francisco-san-francisco",
            "name": "InterContinental San Francisco",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/ePP5g5PtpAEjucx_qtREew/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/intercontinental-san-francisco-san-francisco?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 702,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7816711247802,
                "longitude": -122.404625415802
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "888 Howard St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "888 Howard St",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+14156166500",
            "display_phone": "(415) 616-6500",
            "distance": 2609.48305931595
        },
        {
            "id": "LW4VZkeEuh6xbrqmWw45rg",
            "alias": "fairmont-san-francisco-san-francisco",
            "name": "Fairmont San Francisco",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/15kjxaLZaz58ebb97QJUew/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/fairmont-san-francisco-san-francisco?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 934,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.7924352804106,
                "longitude": -122.410663910663
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "950 Mason St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94108",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "950 Mason St",
                    "San Francisco, CA 94108"
                ]
            },
            "phone": "+14157725000",
            "display_phone": "(415) 772-5000",
            "distance": 3180.958856470736
        },
        {
            "id": "7cdBaOXvimQr38tW6ZG2fg",
            "alias": "argonaut-hotel-san-francisco-4",
            "name": "Argonaut Hotel",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/8AAioPjLbihIVM3VQfp1rg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/argonaut-hotel-san-francisco-4?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 525,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.8075058942468,
                "longitude": -122.420507050817
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "495 Jefferson St",
                "address2": null,
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94109",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "495 Jefferson St",
                    "San Francisco, CA 94109"
                ]
            },
            "phone": "+14155630800",
            "display_phone": "(415) 563-0800",
            "distance": 4509.159736072659
        },
        {
            "id": "kmkM0EFlpK1HM_Tk4AlZ2w",
            "alias": "the-westin-st-francis-san-francisco-on-union-square-san-francisco",
            "name": "The Westin St. Francis San Francisco on Union Square",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Jx5vTW9x_K0kll7XcDc5rA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-westin-st-francis-san-francisco-on-union-square-san-francisco?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 1261,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.7877520297158,
                "longitude": -122.408389763786
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "335 Powell St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94102",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "335 Powell St",
                    "San Francisco, CA 94102"
                ]
            },
            "phone": "+14153977000",
            "display_phone": "(415) 397-7000",
            "distance": 2854.5255365580056
        },
        {
            "id": "l9Jjhf6etOB1k5SDrmfO5A",
            "alias": "palace-hotel-a-luxury-collection-hotel-san-francisco-san-francisco",
            "name": "Palace Hotel, A Luxury Collection Hotel, San Francisco",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/vo4AxvsHc7xvayNpyD1Eog/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/palace-hotel-a-luxury-collection-hotel-san-francisco-san-francisco?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 1007,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.788111,
                "longitude": -122.401775
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "2 New Montgomery St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94105",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "2 New Montgomery St",
                    "San Francisco, CA 94105"
                ]
            },
            "phone": "+14155121111",
            "display_phone": "(415) 512-1111",
            "distance": 3270.096993017224
        },
        {
            "id": "sV9Q7DwiQO6H7ej5j7I6zA",
            "alias": "le-meridien-san-francisco-san-francisco-2",
            "name": "Le Meridien San Francisco",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/LRRZ_ROOB-8qbAey_yLPLg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/le-meridien-san-francisco-san-francisco-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 723,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.794490903616,
                "longitude": -122.400290966034
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "333 Battery St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94111",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "333 Battery St",
                    "San Francisco, CA 94111"
                ]
            },
            "phone": "+14152962900",
            "display_phone": "(415) 296-2900",
            "distance": 3892.5564008047804
        },
        {
            "id": "Vq77UqVmI39JeLY8ocseLA",
            "alias": "hotel-nikko-san-francisco-san-francisco-2",
            "name": "Hotel Nikko San Francisco",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/tPMozjjC6-C0cIfisnGeOw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hotel-nikko-san-francisco-san-francisco-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 730,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.785789,
                "longitude": -122.409351
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "222 Mason St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94102",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "222 Mason St",
                    "San Francisco, CA 94102"
                ]
            },
            "phone": "+14153941111",
            "display_phone": "(415) 394-1111",
            "distance": 2630.889737807085
        },
        {
            "id": "I7qM3f_vBtI3VC7jYK37NA",
            "alias": "san-francisco-marriott-marquis-san-francisco-2",
            "name": "San Francisco Marriott Marquis",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/uxB4mjnZq6fD3FT8lk5Spg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/san-francisco-marriott-marquis-san-francisco-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 888,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.7852269082415,
                "longitude": -122.404481490667
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "780 Mission St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "780 Mission St",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+14158961600",
            "display_phone": "(415) 896-1600",
            "distance": 2876.0752106675964
        },
        {
            "id": "JS-IJCxe6dtL9jRH1eO1UA",
            "alias": "marines-memorial-club-and-hotel-san-francisco-4",
            "name": "Marines' Memorial Club & Hotel",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Rbv_f5nhoEqcCs8OvFECdA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/marines-memorial-club-and-hotel-san-francisco-4?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 292,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.788858,
                "longitude": -122.41041
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "609 Sutter St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94102",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "609 Sutter St",
                    "San Francisco, CA 94102"
                ]
            },
            "phone": "+14156736672",
            "display_phone": "(415) 673-6672",
            "distance": 2851.784366227008
        },
        {
            "id": "ndQ46wDvko5VwEWeiIZTVA",
            "alias": "hotel-vitale-san-francisco-4",
            "name": "Hotel Vitale",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/8H_QV9OkXWxpmmhDRGsi_g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hotel-vitale-san-francisco-4?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 463,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7936187,
                "longitude": -122.392735183239
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "8 Mission Street",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94105",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "8 Mission Street",
                    "San Francisco, CA 94105"
                ]
            },
            "phone": "+14152783700",
            "display_phone": "(415) 278-3700",
            "distance": 4267.2462140475645
        },
        {
            "id": "2T4BY8xtdkJT5TjS-R3GUA",
            "alias": "grand-hyatt-san-francisco-san-francisco",
            "name": "Grand Hyatt San Francisco",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/TNewHnyfqy-irNtRPzqwxg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/grand-hyatt-san-francisco-san-francisco?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 630,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7887472977753,
                "longitude": -122.407129131949
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "345 Stockton St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94108",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "345 Stockton St",
                    "San Francisco, CA 94108"
                ]
            },
            "phone": "+14153981234",
            "display_phone": "(415) 398-1234",
            "distance": 3009.868603069825
        },
        {
            "id": "E0dY10IWql1J6FOUnbsQ5Q",
            "alias": "hyatt-regency-san-francisco-san-francisco-2",
            "name": "Hyatt Regency San Francisco",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/zfG_nDat1IZKihsh5_ilJg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hyatt-regency-san-francisco-san-francisco-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 821,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.7942537009417,
                "longitude": -122.395849227905
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "5 Embarcadero Ctr",
                "address2": null,
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94111",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "5 Embarcadero Ctr",
                    "San Francisco, CA 94111"
                ]
            },
            "phone": "+14157881234",
            "display_phone": "(415) 788-1234",
            "distance": 4122.421622518793
        },
        {
            "id": "fLDCEHARDXiGYiOsHisQ5w",
            "alias": "the-ritz-carlton-san-francisco-san-francisco-2",
            "name": "The Ritz-Carlton, San Francisco",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/81SypEklVyRYm2x0y5k_cg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-ritz-carlton-san-francisco-san-francisco-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 435,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7918190322579,
                "longitude": -122.407137304544
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "600 Stockton St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94108",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "600 Stockton St",
                    "San Francisco, CA 94108"
                ]
            },
            "phone": "+14152967465",
            "display_phone": "(415) 296-7465",
            "distance": 3285.3763507247386
        },
        {
            "id": "s17UpNt-CaHbA3QaarI_7A",
            "alias": "four-seasons-hotel-san-francisco-san-francisco",
            "name": "Four Seasons Hotel San Francisco",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/CelbipgaFv3A0zPXcT9Dlg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/four-seasons-hotel-san-francisco-san-francisco?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 296,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7863857630215,
                "longitude": -122.404476803829
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "757 Market St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "757 Market St",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+14156333000",
            "display_phone": "(415) 633-3000",
            "distance": 2966.5715520892463
        },
        {
            "id": "-gUxYX1lnebBrTIHL0wFUA",
            "alias": "parc-55-san-francisco-a-hilton-hotel-san-francisco",
            "name": "Parc 55 San Francisco - A Hilton Hotel",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/7n4UB1Ufa5Ok93UC_v18ag/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/parc-55-san-francisco-a-hilton-hotel-san-francisco?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 1156,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.784731,
                "longitude": -122.40872
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "55 Cyril Magnin St",
                "address2": null,
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94102",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "55 Cyril Magnin St",
                    "San Francisco, CA 94102"
                ]
            },
            "phone": "+14153928000",
            "display_phone": "(415) 392-8000",
            "distance": 2577.1289381223646
        },
        {
            "id": "2LEE2V3Ea5Tgo-_3ATXBIQ",
            "alias": "the-scarlet-huntington-san-francisco",
            "name": "The Scarlet Huntington",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/6jtDqw8W286IxA6zzMzMvA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-scarlet-huntington-san-francisco?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 278,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.79137,
                "longitude": -122.41205
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1075 California St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94108",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1075 California St",
                    "San Francisco, CA 94108"
                ]
            },
            "phone": "+14154745400",
            "display_phone": "(415) 474-5400",
            "distance": 3015.377255020731
        },
        {
            "id": "ZAEI2S5XUP2Kizr7fTgaMA",
            "alias": "galleria-park-hotel-san-francisco-3",
            "name": "Galleria Park Hotel",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/8bXokc5CZqrp26FsW2wCDg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/galleria-park-hotel-san-francisco-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 426,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7896607,
                "longitude": -122.4034966
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "191 Sutter St",
                "address2": null,
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94104",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "191 Sutter St",
                    "San Francisco, CA 94104"
                ]
            },
            "phone": "+14157813060",
            "display_phone": "(415) 781-3060",
            "distance": 3291.838865920292
        }], "losangeles":[{
            "id": "Nh3L9PtJZTSGhfeAxKO3Gg",
            "alias": "jw-marriott-los-angeles-l-a-live-los-angeles",
            "name": "JW Marriott Los Angeles L.A. LIVE",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/PCo-3pQEC3sQu-JmW_-87A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/jw-marriott-los-angeles-l-a-live-los-angeles?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 704,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 34.0451789217829,
                "longitude": -118.266663551331
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "900 West Olympic Blvd",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90015",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "900 West Olympic Blvd",
                    "Los Angeles, CA 90015"
                ]
            },
            "phone": "+12137658600",
            "display_phone": "(213) 765-8600",
            "distance": 5361.016876951925
        },
        {
            "id": "8rQxNDNJ4-FCjn6XXCB6kw",
            "alias": "four-seasons-hotel-los-angeles-at-beverly-hills-los-angeles-3",
            "name": "Four Seasons Hotel Los Angeles at Beverly Hills",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/cwNafN0Hiqx4fnvHO3Zd-w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/four-seasons-hotel-los-angeles-at-beverly-hills-los-angeles-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 316,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 34.072578,
                "longitude": -118.389457
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "300 S Doheny Dr",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90048",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "300 S Doheny Dr",
                    "Los Angeles, CA 90048"
                ]
            },
            "phone": "+13102732222",
            "display_phone": "(310) 273-2222",
            "distance": 6388.571641465314
        },
        {
            "id": "u6wFTRE9RUY_LGNnIDbrzQ",
            "alias": "omni-los-angeles-hotel-at-california-place-los-angeles",
            "name": "Omni Los Angeles Hotel at California Place",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/IWTBXO_pQjSPpvqMbiL66w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/omni-los-angeles-hotel-at-california-place-los-angeles?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 574,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 34.052563,
                "longitude": -118.25056
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "251 S Olive St",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90012",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "251 S Olive St",
                    "Los Angeles, CA 90012"
                ]
            },
            "phone": "+12136173300",
            "display_phone": "(213) 617-3300",
            "distance": 6600.940268941819
        },
        {
            "id": "ZCFoBTJyEJUoMAF49zQzfA",
            "alias": "magic-castle-hotel-los-angeles",
            "name": "Magic Castle Hotel",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Vh77ykOrn_qcWaxqoNsCmQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/magic-castle-hotel-los-angeles?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 219,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 34.10447,
                "longitude": -118.34252
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "7025 Franklin Ave",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90028",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "7025 Franklin Ave",
                    "Los Angeles, CA 90028"
                ]
            },
            "phone": "+13238510800",
            "display_phone": "(323) 851-0800",
            "distance": 5144.0623558175585
        },
        {
            "id": "Z5zIvT1uYC5PpA5d3q1ZSg",
            "alias": "chateau-marmont-los-angeles-2",
            "name": "Chateau Marmont",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/h8KHa3QV8cEUl047-dSutg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/chateau-marmont-los-angeles-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 647,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.09827,
                "longitude": -118.3677
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "8221 W Sunset Blvd",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90046",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "8221 W Sunset Blvd",
                    "Los Angeles, CA 90046"
                ]
            },
            "phone": "+13236561010",
            "display_phone": "(323) 656-1010",
            "distance": 5948.588922572366
        },
        {
            "id": "NVI8ohZ-o68vF2BqYU3HEg",
            "alias": "sls-hotel-a-luxury-collection-hotel-beverly-hills-los-angeles-2",
            "name": "SLS Hotel, a Luxury Collection Hotel, Beverly Hills",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/xOI9TrTVaTPPCYnAZJPQmg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sls-hotel-a-luxury-collection-hotel-beverly-hills-los-angeles-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 743,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.069669,
                "longitude": -118.3765221
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "465 S La Cienega Blvd",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90048",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "465 S La Cienega Blvd",
                    "Los Angeles, CA 90048"
                ]
            },
            "phone": "+13102470400",
            "display_phone": "(310) 247-0400",
            "distance": 5187.021119206127
        },
        {
            "id": "kfaj8WG-vsnj_8kwtpwBaA",
            "alias": "the-westin-bonaventure-hotel-and-suites-los-angeles-los-angeles",
            "name": "The Westin Bonaventure Hotel & Suites, Los Angeles",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/j-QSppIU7KfdJ7vPOc1xww/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-westin-bonaventure-hotel-and-suites-los-angeles-los-angeles?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 1039,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.0528527584702,
                "longitude": -118.255921580179
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "404 S Figueroa St",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90071",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "404 S Figueroa St",
                    "Los Angeles, CA 90071"
                ]
            },
            "phone": "+12136241000",
            "display_phone": "(213) 624-1000",
            "distance": 6108.004313379851
        },
        {
            "id": "6qLp5ZDaVm9L1UDjULVAKA",
            "alias": "the-hollywood-roosevelt-los-angeles-2",
            "name": "The Hollywood Roosevelt",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/WrDVzRpbNONJRuymBPSh7Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-hollywood-roosevelt-los-angeles-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 881,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.1012699,
                "longitude": -118.3417471
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "7000 Hollywood Blvd",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90028",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "7000 Hollywood Blvd",
                    "Los Angeles, CA 90028"
                ]
            },
            "phone": "+13238561970",
            "display_phone": "(323) 856-1970",
            "distance": 4794.382601825274
        },
        {
            "id": "hntDO89McLQLKLbT4B8mig",
            "alias": "the-standard-downtown-la-los-angeles-2",
            "name": "The Standard, Downtown LA",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/MULydc9DuJ2zf5dPHWB9TQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-standard-downtown-la-los-angeles-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 1301,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 34.050158,
                "longitude": -118.256975
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "550 S Flower St",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90071",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "550 S Flower St",
                    "Los Angeles, CA 90071"
                ]
            },
            "phone": "+12138928080",
            "display_phone": "(213) 892-8080",
            "distance": 6067.935501518702
        },
        {
            "id": "cnUB6GfKnMT73RXf-S_h9g",
            "alias": "kimpton-hotel-palomar-los-angeles-beverly-hills-los-angeles",
            "name": "Kimpton Hotel Palomar Los Angeles Beverly Hills",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/nJqHpD4Y0PCjaX8X5XOaRQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimpton-hotel-palomar-los-angeles-beverly-hills-los-angeles?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 431,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 34.0600499,
                "longitude": -118.43738
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "10740 Wilshire Blvd",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90024",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "10740 Wilshire Blvd",
                    "Los Angeles, CA 90024"
                ]
            },
            "phone": "+13104758711",
            "display_phone": "(310) 475-8711",
            "distance": 10684.085273763776
        },
        {
            "id": "kvhmfXZ-JSkUUlsod_34OA",
            "alias": "ace-hotel-los-angeles",
            "name": "Ace Hotel",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/1YNm_DWi-rIzP93QFkofyQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/ace-hotel-los-angeles?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 519,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.0417407368323,
                "longitude": -118.25679388103
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "929 S Broadway",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90015",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "929 S Broadway",
                    "Los Angeles, CA 90015"
                ]
            },
            "phone": "+12136233233",
            "display_phone": "(213) 623-3233",
            "distance": 6346.423174053336
        },
        {
            "id": "Wh5ix84uh6MO5Rs1kI02gw",
            "alias": "the-line-la-los-angeles",
            "name": "The LINE LA",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/g8e-yHS2naN-eFRqp-xYhw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-line-la-los-angeles?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 677,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                },
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.06213,
                "longitude": -118.300995
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3515 Wilshire Blvd",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90010",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "3515 Wilshire Blvd",
                    "Los Angeles, CA 90010"
                ]
            },
            "phone": "+12133817411",
            "display_phone": "(213) 381-7411",
            "distance": 1878.8329292071526
        },
        {
            "id": "-PFj_K_yS_IbPKsORGILZw",
            "alias": "hotel-figueroa-los-angeles-2",
            "name": "Hotel Figueroa",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/KUtuF9yDcGc0Lx5oo1bulQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hotel-figueroa-los-angeles-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 518,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.045529,
                "longitude": -118.2640141
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "939 S Figueroa St",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90015",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "939 S Figueroa St",
                    "Los Angeles, CA 90015"
                ]
            },
            "phone": "+18777241973",
            "display_phone": "(877) 724-1973",
            "distance": 5578.551149518222
        },
        {
            "id": "Ehb0HOOKJKJ43oPkzqYCzg",
            "alias": "loews-hollywood-hotel-los-angeles",
            "name": "Loews Hollywood Hotel",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/jINzhHOVhxD-d66x73yJLA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/loews-hollywood-hotel-los-angeles?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 379,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.1027794,
                "longitude": -118.3394699
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1755 N Highland Ave",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90028",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1755 N Highland Ave",
                    "Los Angeles, CA 90028"
                ]
            },
            "phone": "+13238561200",
            "display_phone": "(323) 856-1200",
            "distance": 4880.6187028486775
        },
        {
            "id": "VJou5-oG2fnWDJrvG6wGzg",
            "alias": "sofitel-los-angeles-los-angeles",
            "name": "Sofitel Los Angeles",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/zlJigip3UQgmGuchyujRHA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sofitel-los-angeles-los-angeles?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 396,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.0762031,
                "longitude": -118.3779835
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "8555 Beverly Blvd",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90048",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "8555 Beverly Blvd",
                    "Los Angeles, CA 90048"
                ]
            },
            "phone": "+13102785444",
            "display_phone": "(310) 278-5444",
            "distance": 5414.572709223623
        },
        {
            "id": "oSqNlNpKImKF69GJ67-rCg",
            "alias": "millennium-biltmore-los-angeles-los-angeles",
            "name": "Millennium Biltmore Los Angeles",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/sROB1jUffHV8wJ29YupXPQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/millennium-biltmore-los-angeles-los-angeles?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 845,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 34.049828,
                "longitude": -118.25394
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "506 South Grand Avenue",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90071",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "506 South Grand Avenue",
                    "Los Angeles, CA 90071"
                ]
            },
            "phone": "+12136241011",
            "display_phone": "(213) 624-1011",
            "distance": 6349.067405350019
        },
        {
            "id": "9ta6U2F5ma2UauHBS-i1dg",
            "alias": "w-los-angeles-west-beverly-hills-los-angeles",
            "name": "W Los Angeles - West Beverly Hills",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/sQFiy59XWo6TX--1sXIgsw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/w-los-angeles-west-beverly-hills-los-angeles?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 513,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.06324204753,
                "longitude": -118.44101599607
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "930 Hilgard Ave",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90024",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "930 Hilgard Ave",
                    "Los Angeles, CA 90024"
                ]
            },
            "phone": "+13102088765",
            "display_phone": "(310) 208-8765",
            "distance": 11021.969090712284
        },
        {
            "id": "sRY__do6TgV_-I2D1WmeLw",
            "alias": "mama-shelter-los-angeles",
            "name": "Mama Shelter",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/7I9Xk4DMhNr06Tu4Vv6BxQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/mama-shelter-los-angeles?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 303,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 34.09961,
                "longitude": -118.33135
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "6500 Selma Ave",
                "address2": null,
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90028",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "6500 Selma Ave",
                    "Los Angeles, CA 90028"
                ]
            },
            "phone": "+13237856666",
            "display_phone": "(323) 785-6666",
            "distance": 4325.822534713246
        },
        {
            "id": "hMoFC3fmCEN-bRAB_c_Ujw",
            "alias": "the-ritz-carlton-los-angeles-los-angeles-6",
            "name": "The Ritz-Carlton - Los Angeles",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/jt584-cTK3oO9XtAyYSgug/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-ritz-carlton-los-angeles-los-angeles-6?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 190,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 34.0452632224665,
                "longitude": -118.266620451555
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "900 W Olympic Blvd",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90015",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "900 W Olympic Blvd",
                    "Los Angeles, CA 90015"
                ]
            },
            "phone": "+12137438800",
            "display_phone": "(213) 743-8800",
            "distance": 5361.567059762034
        },
        {
            "id": "OZPmZP6S7H77-EvPDB9Sag",
            "alias": "intercontinental-los-angeles-century-city-los-angeles-2",
            "name": "InterContinental Los Angeles Century City",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/acAokts0yvap5EOZuzBOhw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/intercontinental-los-angeles-century-city-los-angeles-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 247,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 34.05413,
                "longitude": -118.41229
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "2151 Avenue Of The Stars",
                "address2": "",
                "address3": "",
                "city": "Los Angeles",
                "zip_code": "90067",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "2151 Avenue Of The Stars",
                    "Los Angeles, CA 90067"
                ]
            },
            "phone": "+13102846500",
            "display_phone": "(310) 284-6500",
            "distance": 8436.691490806334
        }], "washington":[{
            "id": "i4v2LHo0nkuWkDttMGRNxA",
            "alias": "kimpton-hotel-palomar-washington-dc-washington",
            "name": "Kimpton Hotel Palomar Washington DC",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/MpclfoNqdJqCg54U8nUvOw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimpton-hotel-palomar-washington-dc-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 420,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                },
                {
                    "alias": "wedding_planning",
                    "title": "Wedding Planning"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.909809,
                "longitude": -77.047455
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "2121 P St NW",
                "address2": "NW",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20037",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "2121 P St NW",
                    "NW",
                    "Washington, DC 20037"
                ]
            },
            "phone": "+12024481800",
            "display_phone": "(202) 448-1800",
            "distance": 3434.9481825486328
        },
        {
            "id": "2I3PNfi8S3-6xPEW4xoV5Q",
            "alias": "the-willard-washington",
            "name": "The Willard",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Uynoz9I02N9dTnoGmQXW2Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-willard-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 196,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.8965,
                "longitude": -77.0323499
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1401 Pennsylvania Ave NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20004",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "1401 Pennsylvania Ave NW",
                    "Washington, DC 20004"
                ]
            },
            "phone": "+12026289100",
            "display_phone": "(202) 628-9100",
            "distance": 1617.7496356903778
        },
        {
            "id": "EjPGwOalWkYIjn45J09ZBA",
            "alias": "mandarin-oriental-washington-washington-2",
            "name": "Mandarin Oriental - Washington",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/UyVO_I0mAU8fxkrf6hA-5Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/mandarin-oriental-washington-washington-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 201,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.88342,
                "longitude": -77.03041
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "1330 Maryland Ave SW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20024",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "1330 Maryland Ave SW",
                    "Washington, DC 20024"
                ]
            },
            "phone": "+12025548588",
            "display_phone": "(202) 554-8588",
            "distance": 1787.0082880556004
        },
        {
            "id": "Ai_kpX_tM9rbdRfYi5-kcw",
            "alias": "park-hyatt-washington-washington",
            "name": "Park Hyatt Washington",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Z_2R2SxRxJ7FDBEuyxbo-w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/park-hyatt-washington-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 136,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.905891418457,
                "longitude": -77.0510406494141
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1201 24th St NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20037",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "1201 24th St NW",
                    "Washington, DC 20037"
                ]
            },
            "phone": "+12027891234",
            "display_phone": "(202) 789-1234",
            "distance": 3512.328772013244
        },
        {
            "id": "kl1LzY7Qjd0eW2UCsfxQwg",
            "alias": "kimpton-george-hotel-washington",
            "name": "Kimpton George Hotel",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/aIvzmK_wkAdK6x_3OR2CiA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimpton-george-hotel-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 161,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.89642,
                "longitude": -77.0099
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "15 E St NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20001",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "15 E St NW",
                    "Washington, DC 20001"
                ]
            },
            "phone": "+12023474200",
            "display_phone": "(202) 347-4200",
            "distance": 521.722806878381
        },
        {
            "id": "YhElcOag4jyIg_ihMOqiNA",
            "alias": "the-dupont-circle-washington",
            "name": "The Dupont Circle",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/1MnhvQ3xvs3GXKQZW2MOKQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-dupont-circle-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 307,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.9104479481578,
                "longitude": -77.0428711161911
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1500 New Hampshire Ave NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20036",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "1500 New Hampshire Ave NW",
                    "Washington, DC 20036"
                ]
            },
            "phone": "+12024836000",
            "display_phone": "(202) 483-6000",
            "distance": 3152.97255079348
        },
        {
            "id": "5fsDFsgjs4-IQxjy7HzUQw",
            "alias": "sofitel-lafayette-square-washington-dc-washington",
            "name": "Sofitel Lafayette Square Washington DC",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CrMo4AZDqWY0fhkoAWx7JQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sofitel-lafayette-square-washington-dc-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 170,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.9003657708795,
                "longitude": -77.0337715731464
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "806 15th St NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20005",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "806 15th St NW",
                    "Washington, DC 20005"
                ]
            },
            "phone": "+12027308800",
            "display_phone": "(202) 730-8800",
            "distance": 1884.9795311464177
        },
        {
            "id": "bhq0y8oXaOYj670P9_xQTQ",
            "alias": "four-seasons-hotel-washington-washington-2",
            "name": "Four Seasons Hotel Washington",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/VPa0D64IFF4hv5pYpRUuWA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/four-seasons-hotel-washington-washington-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 129,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.9044508285146,
                "longitude": -77.0575662467342
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "2800 Pennsylvania Ave NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20007",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "2800 Pennsylvania Ave NW",
                    "Washington, DC 20007"
                ]
            },
            "phone": "+12023420444",
            "display_phone": "(202) 342-0444",
            "distance": 3966.588775981218
        },
        {
            "id": "msEAiTRqJGiQRmt9awjAEg",
            "alias": "kimpton-topaz-hotel-washington",
            "name": "Kimpton Topaz Hotel",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/k4gi82nf56klYzocLfauog/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimpton-topaz-hotel-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 191,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.90743,
                "longitude": -77.03971
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1733 N St NW",
                "address2": "NW",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20036",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "1733 N St NW",
                    "NW",
                    "Washington, DC 20036"
                ]
            },
            "phone": "+12023933000",
            "display_phone": "(202) 393-3000",
            "distance": 2731.005745949321
        },
        {
            "id": "jtraC27ZPdB3XdD9LCUKQQ",
            "alias": "fairmont-washington-dc-washington",
            "name": "Fairmont Washington, DC",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/ilOvmKoAitltmMCLGdNqLQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/fairmont-washington-dc-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 171,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.905305467432,
                "longitude": -77.051519069884
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "2401 M St NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20037",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "2401 M St NW",
                    "Washington, DC 20037"
                ]
            },
            "phone": "+12024292400",
            "display_phone": "(202) 429-2400",
            "distance": 3511.0391370504135
        },
        {
            "id": "VM-IO5XTndwEYWc2vmIsHQ",
            "alias": "the-mayflower-hotel-autograph-collection-washington",
            "name": "The Mayflower Hotel, Autograph Collection",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/eZZw7sOZMOo37M7tJZXhdg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-mayflower-hotel-autograph-collection-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 315,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 38.9044675,
                "longitude": -77.0397779
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1127 Connecticut Ave NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20036",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "1127 Connecticut Ave NW",
                    "Washington, DC 20036"
                ]
            },
            "phone": "+12023473000",
            "display_phone": "(202) 347-3000",
            "distance": 2558.0446933347607
        },
        {
            "id": "xu76uAHeUNKaj7ulx52CzA",
            "alias": "kimpton-hotel-monaco-washington-dc-washington",
            "name": "Kimpton Hotel Monaco Washington DC",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/GYtC3nDKoCxx_nZPtEH4QQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimpton-hotel-monaco-washington-dc-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 188,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                },
                {
                    "alias": "wedding_planning",
                    "title": "Wedding Planning"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.897,
                "longitude": -77.02247
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "700 F St NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20004",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "700 F St NW",
                    "Washington, DC 20004"
                ]
            },
            "phone": "+12026287177",
            "display_phone": "(202) 628-7177",
            "distance": 837.4020545637555
        },
        {
            "id": "NDlVywi9OAm8VI6P5ptoMA",
            "alias": "jw-marriott-washington-dc-washington",
            "name": "JW Marriott Washington, DC",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/t7eAsWhOMwrPEtfbrP9Mxw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/jw-marriott-washington-dc-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 297,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 38.89659,
                "longitude": -77.031471
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1331 Pennsylvania Ave NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20004",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "1331 Pennsylvania Ave NW",
                    "Washington, DC 20004"
                ]
            },
            "phone": "+12023932000",
            "display_phone": "(202) 393-2000",
            "distance": 1550.700843104754
        },
        {
            "id": "Ap9ARyh8EXjGkY1JVapyQg",
            "alias": "grand-hyatt-washington-washington-2",
            "name": "Grand Hyatt Washington",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/PJdFR1mnYEfHWyIu-3crVA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/grand-hyatt-washington-washington-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 349,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 38.8993301391602,
                "longitude": -77.026481628418
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1000 H St NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20001",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "1000 H St NW",
                    "Washington, DC 20001"
                ]
            },
            "phone": "+12025821234",
            "display_phone": "(202) 582-1234",
            "distance": 1293.4181464066328
        },
        {
            "id": "3ebtFZ-XAFjATQyPJck02w",
            "alias": "kimpton-donovan-hotel-washington",
            "name": "Kimpton Donovan Hotel",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/I2zwMMyMUxJzram9Aj972g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimpton-donovan-hotel-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 226,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.90507,
                "longitude": -77.03159
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1155 14th St NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20005",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "1155 14th St NW",
                    "Washington, DC 20005"
                ]
            },
            "phone": "+12027371200",
            "display_phone": "(202) 737-1200",
            "distance": 2011.2569375184694
        },
        {
            "id": "UeDKhGiZqPoEHbnaWMhg-g",
            "alias": "the-jefferson-washington-dc-washington",
            "name": "The Jefferson, Washington DC",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ZA5aPAkJzCvl3SvI-i-qvw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-jefferson-washington-dc-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 94,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 38.9059315574047,
                "longitude": -77.0368560061169
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1200 16th St NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20036",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "1200 16th St NW",
                    "Washington, DC 20036"
                ]
            },
            "phone": "+12024482300",
            "display_phone": "(202) 448-2300",
            "distance": 2434.8267827729296
        },
        {
            "id": "5MEJT4xZRd8glsttl0Awjw",
            "alias": "the-hay-adams-washington",
            "name": "The Hay-Adams",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/rjqjFLguyIKLExfkb6mR7w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-hay-adams-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 100,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.9001178042688,
                "longitude": -77.0370769500732
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "800 16th St NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20006",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "800 16th St NW",
                    "Washington, DC 20006"
                ]
            },
            "phone": "+12026386600",
            "display_phone": "(202) 638-6600",
            "distance": 2135.7607445991393
        },
        {
            "id": "fAPXlorAfvWIW86S3VHy7A",
            "alias": "w-washington-d-c-washington-2",
            "name": "W Washington D.C.",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Y-3PKqc91FUYwpEE5hLc1g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/w-washington-d-c-washington-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 472,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 38.89696,
                "longitude": -77.03339
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "515 15th St NW",
                "address2": "F St. Between 14th and 15th Street",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20004",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "515 15th St NW",
                    "F St. Between 14th and 15th Street",
                    "Washington, DC 20004"
                ]
            },
            "phone": "+12026612400",
            "display_phone": "(202) 661-2400",
            "distance": 1704.457711062947
        },
        {
            "id": "6o2vlWOsvB0tJcn5xoPVHw",
            "alias": "the-ritz-carlton-washington-d-c-washington-2",
            "name": "The Ritz-Carlton, Washington, D.C.",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/nwouQA0ICbOLG14hzb2w8Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-ritz-carlton-washington-d-c-washington-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 140,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.9047029943296,
                "longitude": -77.0491026341915
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "1150 22nd St NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20037",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "1150 22nd St NW",
                    "Washington, DC 20037"
                ]
            },
            "phone": "+12028350500",
            "display_phone": "(202) 835-0500",
            "distance": 3292.4310280513246
        },
        {
            "id": "lUhlgof1b0GrZInybBp8UA",
            "alias": "omni-shoreham-hotel-washington",
            "name": "Omni Shoreham Hotel",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/j-7Vhvda3T0vBgnTF0jLeg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/omni-shoreham-hotel-washington?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 399,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 38.923163545797,
                "longitude": -77.053684798602
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "2500 Calvert St NW",
                "address2": "",
                "address3": "",
                "city": "Washington, DC",
                "zip_code": "20008",
                "country": "US",
                "state": "DC",
                "display_address": [
                    "2500 Calvert St NW",
                    "Washington, DC 20008"
                ]
            },
            "phone": "+12022340700",
            "display_phone": "(202) 234-0700",
            "distance": 4790.954339448615
        }], "newyork":[{
            "id": "VqMuuey8_bH3sZ5qHL9tPQ",
            "alias": "ace-hotel-new-york-new-york-2",
            "name": "Ace Hotel New York",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/b5FHpzwE4JRB1tCO1Wpudw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/ace-hotel-new-york-new-york-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 669,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 40.745777,
                "longitude": -73.988286
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "20 W 29th St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10001",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "20 W 29th St",
                    "New York, NY 10001"
                ]
            },
            "phone": "+12126792222",
            "display_phone": "(212) 679-2222",
            "distance": 5525.390746565549
        },
        {
            "id": "AfhgLmyOTHTM44PIiYKTHQ",
            "alias": "kleinfeld-hotel-blocks-new-york",
            "name": "Kleinfeld Hotel Blocks",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/jibVZ_ZG2icvfsHBGWQDsw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kleinfeld-hotel-blocks-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 172,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 40.7411663979292,
                "longitude": -73.9946056902409
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "110 W 20th St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10011",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "110 W 20th St",
                    "New York, NY 10011"
                ]
            },
            "phone": "+19088990211",
            "display_phone": "(908) 899-0211",
            "distance": 5135.145057841626
        },
        {
            "id": "lot1WtUC2qYsCuL7QMgq0A",
            "alias": "kimpton-hotel-eventi-new-york",
            "name": "Kimpton Hotel Eventi",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/8fTHlKVUzDA5x6fHYj5i3A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimpton-hotel-eventi-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 351,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                },
                {
                    "alias": "wedding_planning",
                    "title": "Wedding Planning"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 40.7471919,
                "longitude": -73.9898801
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "851 Avenue Of The Americas",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10001",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "851 Avenue Of The Americas",
                    "New York, NY 10001"
                ]
            },
            "phone": "+12125644567",
            "display_phone": "(212) 564-4567",
            "distance": 5703.460188215818
        },
        {
            "id": "29qq6ZOCfxXb7TZ7W5UslQ",
            "alias": "kimpton-ink48-hotel-new-york",
            "name": "Kimpton Ink48 Hotel",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/i-bxqqq1b4EDmVOv6iHi-w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimpton-ink48-hotel-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 426,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                },
                {
                    "alias": "wedding_planning",
                    "title": "Wedding Planning"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 40.764568,
                "longitude": -73.995994
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "653 11th Ave",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10036",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "653 11th Ave",
                    "New York, NY 10036"
                ]
            },
            "phone": "+12127570088",
            "display_phone": "(212) 757-0088",
            "distance": 7692.896433211878
        },
        {
            "id": "55Ofcjm1DPf4LVr73-4-1g",
            "alias": "new-york-marriott-marquis-new-york-3",
            "name": "New York Marriott Marquis",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/3Demjprdbvrk0YGMpbvSUg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/new-york-marriott-marquis-new-york-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 760,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 40.7585862119401,
                "longitude": -73.9858202037049
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1535 Broadway",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10036",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "1535 Broadway",
                    "New York, NY 10036"
                ]
            },
            "phone": "+12123981900",
            "display_phone": "(212) 398-1900",
            "distance": 6918.856487738017
        },
        {
            "id": "GXqlI0p_NQejvDEgq0xQ9w",
            "alias": "conrad-new-york-hotel-new-york",
            "name": "Conrad New York Hotel",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/YNZBf86mw7JPNFG1-uZ09A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/conrad-new-york-hotel-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 248,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 40.7150001525879,
                "longitude": -74.0158004760742
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "102 N End Ave",
                "address2": null,
                "address3": "",
                "city": "New York",
                "zip_code": "10282",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "102 N End Ave",
                    "New York, NY 10282"
                ]
            },
            "phone": "+12129450100",
            "display_phone": "(212) 945-0100",
            "distance": 3663.262961614445
        },
        {
            "id": "jDBXpS5bX4f-tiaAz1ZZbA",
            "alias": "andaz-wall-street-new-york-6",
            "name": "Andaz Wall Street",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/xPplQ66emj6tZyKYj70IWA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/andaz-wall-street-new-york-6?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 260,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 40.7051574217701,
                "longitude": -74.0079346716969
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "75 Wall St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10005",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "75 Wall St",
                    "New York, NY 10005"
                ]
            },
            "phone": "+12125901234",
            "display_phone": "(212) 590-1234",
            "distance": 2604.8824691475634
        },
        {
            "id": "NVsI5DRm1CszltskWJvvZQ",
            "alias": "hotel-giraffe-new-york",
            "name": "Hotel Giraffe",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/TP6dbFNsl-AwSkqdWu6tyQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hotel-giraffe-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 162,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.7421,
                "longitude": -73.98461
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "365 Park Ave S",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10016",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "365 Park Ave S",
                    "New York, NY 10016"
                ]
            },
            "phone": "+12126857700",
            "display_phone": "(212) 685-7700",
            "distance": 5085.165692663355
        },
        {
            "id": "fag0oq8C4J-4KtyWjmudBg",
            "alias": "lotte-new-york-palace-new-york",
            "name": "Lotte New York Palace",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/yN5FfEuS3tqmwcBvzksxKg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/lotte-new-york-palace-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 343,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 40.758026,
                "longitude": -73.9749775
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "455 Madison Ave",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10022",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "455 Madison Ave",
                    "New York, NY 10022"
                ]
            },
            "phone": "+12128887000",
            "display_phone": "(212) 888-7000",
            "distance": 6843.148759382285
        },
        {
            "id": "SoSQhqqOaS10aUuxDr1YtA",
            "alias": "citizenm-hotel-new-york-times-square-new-york-4",
            "name": "citizenM hotel New York Times Square",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/-nOKAC4JnEn3ZwQvFTwcHg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/citizenm-hotel-new-york-times-square-new-york-4?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 140,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.761561,
                "longitude": -73.984968
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "218 W 50th St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10019",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "218 W 50th St",
                    "New York, NY 10019"
                ]
            },
            "phone": "+12124613638",
            "display_phone": "(212) 461-3638",
            "distance": 7243.421177253578
        },
        {
            "id": "ZDp1ysOVW3xQJc4SuQGSCg",
            "alias": "archer-hotel-new-york-new-york",
            "name": "Archer Hotel New York",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/c65sckQxvgkkn6otyW95tA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/archer-hotel-new-york-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 135,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.75206,
                "longitude": -73.984735
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "45 W 38th St",
                "address2": null,
                "address3": null,
                "city": "New York",
                "zip_code": "10018",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "45 W 38th St",
                    "New York, NY 10018"
                ]
            },
            "phone": "+12127194100",
            "display_phone": "(212) 719-4100",
            "distance": 6188.247205958124
        },
        {
            "id": "svW0v_j18STsq5Ua-8waZg",
            "alias": "the-dominick-new-york",
            "name": "The Dominick",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/2xkWaOmeEC45JqLC_a3omA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-dominick-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 280,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 40.72549,
                "longitude": -74.00529
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "246 Spring St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10013",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "246 Spring St",
                    "New York, NY 10013"
                ]
            },
            "phone": "+12128425500",
            "display_phone": "(212) 842-5500",
            "distance": 3903.2498453720577
        },
        {
            "id": "kRUF_Vt_zsvENf-xBAU2KA",
            "alias": "andaz-5th-avenue-a-concept-by-hyatt-new-york",
            "name": "Andaz 5th Avenue-a concept by Hyatt",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/EyR69AO_iYuAY4UeJYSnNg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/andaz-5th-avenue-a-concept-by-hyatt-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 213,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 40.7528163684503,
                "longitude": -73.9810109138489
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "485 5th Ave At 41st St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10017",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "485 5th Ave At 41st St",
                    "New York, NY 10017"
                ]
            },
            "phone": "+12126011234",
            "display_phone": "(212) 601-1234",
            "distance": 6256.553260981617
        },
        {
            "id": "PmmTXis1gCL34mg2bZ9gtw",
            "alias": "pod-51-new-york",
            "name": "Pod 51",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/3pQrny1WRGydc0ouDgeEjg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/pod-51-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 430,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 40.7558617771518,
                "longitude": -73.9691277840614
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "230 E 51st St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10022",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "230 E 51st St",
                    "New York, NY 10022"
                ]
            },
            "phone": "+18447637666",
            "display_phone": "(844) 763-7666",
            "distance": 6647.565250055611
        },
        {
            "id": "LtVO-82pFdwjq-hwMITAPg",
            "alias": "yotel-new-york-new-york",
            "name": "YOTEL New York",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/3DSgJKvdSyYJvylw3VnAyA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/yotel-new-york-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 946,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 40.7591568,
                "longitude": -73.9954561
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "570 Tenth Ave",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10036",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "570 Tenth Ave",
                    "New York, NY 10036"
                ]
            },
            "phone": "+16464497700",
            "display_phone": "(646) 449-7700",
            "distance": 7093.4251245536925
        },
        {
            "id": "P-qjkvDDyQprOWj1yV8ZYA",
            "alias": "sofitel-new-york-new-york",
            "name": "Sofitel New York",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/l3IXFribifq7GzKFRkE7ow/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sofitel-new-york-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 193,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 40.756,
                "longitude": -73.98164
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "45 W 44th St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10036",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "45 W 44th St",
                    "New York, NY 10036"
                ]
            },
            "phone": "+12123548844",
            "display_phone": "(212) 354-8844",
            "distance": 6601.315238184414
        },
        {
            "id": "nnAkMNV9Zh6G9BZLLOhfog",
            "alias": "baccarat-hotel-new-york-3",
            "name": "Baccarat Hotel",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/wC6x1O8Yg_YSRJkJ8giLZw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/baccarat-hotel-new-york-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 148,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.76091,
                "longitude": -73.97732
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "28 W 53rd St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10019",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "28 W 53rd St",
                    "New York, NY 10019"
                ]
            },
            "phone": "+12127908800",
            "display_phone": "(212) 790-8800",
            "distance": 7151.74089459474
        },
        {
            "id": "Lh-BWBcgFfHi6-zxFhqShg",
            "alias": "the-pearl-hotel-new-york",
            "name": "The Pearl Hotel",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/HWm7_h6-QUo-iEfQye8k6Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-pearl-hotel-new-york?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 108,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.76146,
                "longitude": -73.98548
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "233 W 49th St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10019",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "233 W 49th St",
                    "New York, NY 10019"
                ]
            },
            "phone": "+12122454000",
            "display_phone": "(212) 245-4000",
            "distance": 7234.653621235277
        },
        {
            "id": "FA5giJYhqdTkjsT695TqVg",
            "alias": "plaza-hotel-new-york-4",
            "name": "Plaza Hotel",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/8ugmpiQ8yf4JpqpzDhWH4w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/plaza-hotel-new-york-4?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 403,
            "categories": [
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                },
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 40.7644638970122,
                "longitude": -73.97449483766
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "Fifth Avenue At Central Park S",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10019",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "Fifth Avenue At Central Park S",
                    "New York, NY 10019"
                ]
            },
            "phone": "+12127593000",
            "display_phone": "(212) 759-3000",
            "distance": 7560.155144601702
        },
        {
            "id": "03EFU3OR6j085vqGAXwVbA",
            "alias": "gild-hall-a-thompson-hotel-new-york-4",
            "name": "Gild Hall, A Thompson Hotel",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/cVdthjZkG95IPlchph7ziQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/gild-hall-a-thompson-hotel-new-york-4?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 192,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 40.7080445,
                "longitude": -74.0071598
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "15 Gold St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10038",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "15 Gold St",
                    "New York, NY 10038"
                ]
            },
            "phone": "+12122327700",
            "display_phone": "(212) 232-7700",
            "distance": 2681.270760837767
        }], "miami":[{
            "id": "jW-Kn1wvoe9tw0xn_4uP1g",
            "alias": "mandarin-oriental-miami-miami-2",
            "name": "Mandarin Oriental, Miami",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/s0DPIXAqn3FsqphwiOFkag/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/mandarin-oriental-miami-miami-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 227,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 25.765621,
                "longitude": -80.184939
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "500 Brickell Key Dr",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33131",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "500 Brickell Key Dr",
                    "Miami, FL 33131"
                ]
            },
            "phone": "+13059138288",
            "display_phone": "(305) 913-8288",
            "distance": 10428.290227037369
        },
        {
            "id": "XhlCI_C092SSAfWaTXyRdQ",
            "alias": "four-seasons-hotel-miami-miami",
            "name": "Four Seasons Hotel Miami",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/oyzwzKXY__5QkB9UbR0Dwg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/four-seasons-hotel-miami-miami?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 116,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 25.75917,
                "longitude": -80.19235
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1435 Brickell Ave",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33131",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "1435 Brickell Ave",
                    "Miami, FL 33131"
                ]
            },
            "phone": "+13053583535",
            "display_phone": "(305) 358-3535",
            "distance": 9630.624405270497
        },
        {
            "id": "u8DmsVlpXuSXlXc-cUvoPQ",
            "alias": "kimpton-epic-hotel-miami",
            "name": "Kimpton EPIC Hotel",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/bOFDn82pZl73w2iER6MeCw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimpton-epic-hotel-miami?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 307,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                },
                {
                    "alias": "spas",
                    "title": "Day Spas"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 25.7705942338449,
                "longitude": -80.1895137107562
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "270 Biscayne Boulevard Way",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33131",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "270 Biscayne Boulevard Way",
                    "Miami, FL 33131"
                ]
            },
            "phone": "+13054245226",
            "display_phone": "(305) 424-5226",
            "distance": 10068.689198837375
        },
        {
            "id": "cvZr8QmpVMNk3hwGOI9gEQ",
            "alias": "biltmore-hotel-miami-coral-gables-coral-gables",
            "name": "Miami Biltmore Hotel",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/EHdSWyJsmzgaeTbs_D7yLA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/biltmore-hotel-miami-coral-gables-coral-gables?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 288,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 25.7408089358091,
                "longitude": -80.2786786055573
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1200 Anastasia Ave",
                "address2": "",
                "address3": "",
                "city": "Coral Gables",
                "zip_code": "33134",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "1200 Anastasia Ave",
                    "Coral Gables, FL 33134"
                ]
            },
            "phone": "+18553116903",
            "display_phone": "(855) 311-6903",
            "distance": 1628.4500717706078
        },
        {
            "id": "ZYJ6THsPx5B7EbpESwzjTA",
            "alias": "conrad-miami-miami",
            "name": "Conrad Miami",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/JH8qvhtRbyxwzK1QuOmgDg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/conrad-miami-miami?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 167,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 25.7603905,
                "longitude": -80.1920798
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1395 Brickell Ave",
                "address2": null,
                "address3": "",
                "city": "Miami",
                "zip_code": "33131",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "1395 Brickell Ave",
                    "Miami, FL 33131"
                ]
            },
            "phone": "+13055036500",
            "display_phone": "(305) 503-6500",
            "distance": 9652.193056777449
        },
        {
            "id": "qfdXkrsGoSRUjiCvfr4ZPw",
            "alias": "intercontinental-miami-miami",
            "name": "InterContinental Miami",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/aovak_Ew5HApX49XW0Z_1g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/intercontinental-miami-miami?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 338,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 25.7723799,
                "longitude": -80.18532
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "100 Chopin Plz",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33131",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "100 Chopin Plz",
                    "Miami, FL 33131"
                ]
            },
            "phone": "+13055771000",
            "display_phone": "(305) 577-1000",
            "distance": 10456.657597770754
        },
        {
            "id": "LIqcabSx9s_FkW3fkPfTCQ",
            "alias": "jw-marriott-marquis-miami-miami",
            "name": "JW Marriott Marquis Miami",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/9UktPtXXpmyqTRjGfUIS-g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/jw-marriott-marquis-miami-miami?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 164,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 25.771252487778,
                "longitude": -80.1894852519035
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "255 Biscayne Boulevard Way",
                "address2": null,
                "address3": null,
                "city": "Miami",
                "zip_code": "33131",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "255 Biscayne Boulevard Way",
                    "Miami, FL 33131"
                ]
            },
            "phone": "+13054218600",
            "display_phone": "(305) 421-8600",
            "distance": 10086.128828608473
        },
        {
            "id": "PADcqAFfq-xiR5OrAczR9A",
            "alias": "hampton-inn-and-suites-by-hilton-miami-brickell-downtown-miami-2",
            "name": "Hampton Inn & Suites by Hilton Miami Brickell Downtown",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/WOtxqKeITJFgdh-WyLFFiQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hampton-inn-and-suites-by-hilton-miami-brickell-downtown-miami-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 92,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 25.762239,
                "longitude": -80.194221
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "50 SW 12th St",
                "address2": null,
                "address3": "",
                "city": "Miami",
                "zip_code": "33130",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "50 SW 12th St",
                    "Miami, FL 33130"
                ]
            },
            "phone": "+13053779400",
            "display_phone": "(305) 377-9400",
            "distance": 9459.242620489973
        },
        {
            "id": "KKMz7WFJ2bQ8iRNZOrFJfw",
            "alias": "eb-hotel-miami-miami",
            "name": "EB Hotel Miami",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/rgDSazGBh2cU3Glh0ixqPA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/eb-hotel-miami-miami?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 82,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 25.80872,
                "longitude": -80.26607
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "4299 NW 36th St",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33166",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "4299 NW 36th St",
                    "Miami, FL 33166"
                ]
            },
            "phone": "+13053246835",
            "display_phone": "(305) 324-6835",
            "distance": 6602.995652495306
        },
        {
            "id": "N2dfGyOUhAAY_ziF_YUReA",
            "alias": "the-ritz-carlton-coconut-grove-miami-miami",
            "name": "The Ritz-Carlton Coconut Grove, Miami",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/bQoPV7LwI98akOIu25Lbgw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-ritz-carlton-coconut-grove-miami-miami?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 76,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 25.7300864507174,
                "longitude": -80.2378615736961
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "3300 SW Twenty-seventh Ave",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33133",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "3300 SW Twenty-seventh Ave",
                    "Miami, FL 33133"
                ]
            },
            "phone": "+13056444680",
            "display_phone": "(305) 644-4680",
            "distance": 5626.596527418837
        },
        {
            "id": "tEBEMp7Vaq9zEOzqhP97eQ",
            "alias": "miami-marriott-biscayne-bay-miami-2",
            "name": "Miami Marriott Biscayne Bay",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/3UUC2dG4dymkngUottKHRQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/miami-marriott-biscayne-bay-miami-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 188,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 25.79097,
                "longitude": -80.18617
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1633 N Bayshore Dr",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33132",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "1633 N Bayshore Dr",
                    "Miami, FL 33132"
                ]
            },
            "phone": "+13053743900",
            "display_phone": "(305) 374-3900",
            "distance": 11049.627087208584
        },
        {
            "id": "T75dbtEZgt5cyl-6Jij-sw",
            "alias": "vagabond-hotel-miami-3",
            "name": "The Vagabond Hotel",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/dj8ajr0wjgQvlFsKQxpXyQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/vagabond-hotel-miami-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 61,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 25.84292,
                "longitude": -80.18395
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "7301 Biscayne Blvd",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33138",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "7301 Biscayne Blvd",
                    "Miami, FL 33138"
                ]
            },
            "phone": "+13054008420",
            "display_phone": "(305) 400-8420",
            "distance": 14433.63996229844
        },
        {
            "id": "4yFf_Jm7dPIdyCp3uwcGgA",
            "alias": "trump-national-doral-miami-miami-2",
            "name": "Trump National Doral Miami",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/iKhCbvaCjDqKz5dvwBIvRw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/trump-national-doral-miami-miami-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 190,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 25.81438,
                "longitude": -80.33758
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "4400 NW 87th Ave",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33178",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "4400 NW 87th Ave",
                    "Miami, FL 33178"
                ]
            },
            "phone": "+13055922000",
            "display_phone": "(305) 592-2000",
            "distance": 8405.685324898359
        },
        {
            "id": "jMkG9sJ-ok7lqnYQfmw5YA",
            "alias": "hyatt-regency-miami-miami-3",
            "name": "Hyatt Regency Miami",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/QX5sr0ITBsD22nNd5CEFpg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hyatt-regency-miami-miami-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 245,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 25.7710569076831,
                "longitude": -80.1905126390888
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "400 SE 2nd Ave",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33131",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "400 SE 2nd Ave",
                    "Miami, FL 33131"
                ]
            },
            "phone": "+13053581234",
            "display_phone": "(305) 358-1234",
            "distance": 9980.97837094191
        },
        {
            "id": "tqvpQme1y3_B1qVnTCy_Gw",
            "alias": "hotel-urbano-miami",
            "name": "Hotel Urbano",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/20p_xHJ0ppqK_btuW6hqdw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hotel-urbano-miami?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 72,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 25.7511699,
                "longitude": -80.20367
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "2500 Brickell Ave",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33129",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "2500 Brickell Ave",
                    "Miami, FL 33129"
                ]
            },
            "phone": "+13058542070",
            "display_phone": "(305) 854-2070",
            "distance": 8456.587638413972
        },
        {
            "id": "rhU-KRslqdsdNLfgQ9Arqg",
            "alias": "element-miami-international-airport-miami",
            "name": "Element Miami International Airport",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/MwGYVSphuAXN74yJvflsBg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/element-miami-international-airport-miami?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 101,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 25.7995899,
                "longitude": -80.254
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3525 NW 25th St",
                "address2": null,
                "address3": "",
                "city": "Miami",
                "zip_code": "33142",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "3525 NW 25th St",
                    "Miami, FL 33142"
                ]
            },
            "phone": "+13056361600",
            "display_phone": "(305) 636-1600",
            "distance": 6237.16174977852
        },
        {
            "id": "e56vtvQLpVRNYNgPr_IQEQ",
            "alias": "sonesta-coconut-grove-miami-coconut-grove",
            "name": "Miami Apartment Rentals - Sonesta",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/mLU7Ws7X6jQO9fclrw19qA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sonesta-coconut-grove-miami-coconut-grove?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 84,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 25.727215708235,
                "longitude": -80.2405534
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "2889 Mcfarlane Rd",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33133",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "2889 Mcfarlane Rd",
                    "Miami, FL 33133"
                ]
            },
            "phone": "+13056063421",
            "display_phone": "(305) 606-3421",
            "distance": 5532.983713110723
        },
        {
            "id": "tiTLZfHbwRsDyHerGZG1Ug",
            "alias": "hilton-miami-downtown-miami",
            "name": "Hilton Miami Downtown",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/2ug4JNk9OPi1HLa-RGAaSA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hilton-miami-downtown-miami?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 209,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 25.79067,
                "longitude": -80.18847
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1601 Biscayne Blvd",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33132",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "1601 Biscayne Blvd",
                    "Miami, FL 33132"
                ]
            },
            "phone": "+13053740000",
            "display_phone": "(305) 374-0000",
            "distance": 10853.933953997395
        },
        {
            "id": "AeyTHy_Nvu-8qR14CvuTyA",
            "alias": "marriotts-villas-at-doral-miami",
            "name": "Marriott's Villas at Doral",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/KKIU5HjP-XvSkOley5A4uQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/marriotts-villas-at-doral-miami?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 44,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 25.812292,
                "longitude": -80.336922
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "4101 NW 87th Ave",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33178",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "4101 NW 87th Ave",
                    "Miami, FL 33178"
                ]
            },
            "phone": "+13056293400",
            "display_phone": "(305) 629-3400",
            "distance": 8230.340248972572
        },
        {
            "id": "tqcczea0axnMjp340c0XnQ",
            "alias": "hampton-inn-coconut-grove-coral-gables-miami-3",
            "name": "Hampton Inn Coconut Grove / Coral Gables",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/K88tjga6uNr9s-nQmJ0ZxQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hampton-inn-coconut-grove-coral-gables-miami-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 41,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 25.73873,
                "longitude": -80.23904
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "2800 SW 28th Ter",
                "address2": "",
                "address3": "",
                "city": "Miami",
                "zip_code": "33133",
                "country": "US",
                "state": "FL",
                "display_address": [
                    "2800 SW 28th Ter",
                    "Miami, FL 33133"
                ]
            },
            "phone": "+13054482800",
            "display_phone": "(305) 448-2800",
            "distance": 5153.837294118314
        }], "lasvegas":[{
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
            "id": "Wxxvi3LZbHNIDwJ-ZimtnA",
            "alias": "the-venetian-las-vegas-las-vegas-2",
            "name": "The Venetian Las Vegas",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/d1Zb0e641TJbTykV5rVXiQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-venetian-las-vegas-las-vegas-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 3264,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "casinos",
                    "title": "Casinos"
                },
                {
                    "alias": "resorts",
                    "title": "Resorts"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 36.121189,
                "longitude": -115.169657
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "3355 South Las Vegas Boulevard",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3355 South Las Vegas Boulevard",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+18882836423",
            "display_phone": "(888) 283-6423",
            "distance": 2632.3757312343896
        },
        {
            "id": "t-o_Sraneime4DDhWrQRBA",
            "alias": "wynn-las-vegas-las-vegas-3",
            "name": "Wynn Las Vegas",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/MmsXDPpkKmsWZQ_bzZAuKQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/wynn-las-vegas-las-vegas-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 2577,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "casinos",
                    "title": "Casinos"
                },
                {
                    "alias": "resorts",
                    "title": "Resorts"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 36.127684,
                "longitude": -115.165905
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "3131 Las Vegas Blvd S",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3131 Las Vegas Blvd S",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+17027707000",
            "display_phone": "(702) 770-7000",
            "distance": 2585.162342985166
        },
        {
            "id": "uGupeWqih0yIcCg8anM1PA",
            "alias": "the-palazzo-las-vegas-las-vegas",
            "name": "The Palazzo Las Vegas",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/xicmk6x7QitCTqcJ408HBg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-palazzo-las-vegas-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 2335,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "casinos",
                    "title": "Casinos"
                },
                {
                    "alias": "resorts",
                    "title": "Resorts"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 36.1239419535766,
                "longitude": -115.167752796129
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "3325 South Las Vegas Boulevard",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3325 South Las Vegas Boulevard",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+18774445777",
            "display_phone": "(877) 444-5777",
            "distance": 2607.1223240443996
        },
        {
            "id": "na4Th5DrNauOv-c43QQFvA",
            "alias": "bellagio-hotel-las-vegas",
            "name": "Bellagio Hotel",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/MLr0YybykUgBKAdlGdjrPg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/bellagio-hotel-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 2957,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "casinos",
                    "title": "Casinos"
                },
                {
                    "alias": "resorts",
                    "title": "Resorts"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 36.1125514,
                "longitude": -115.1732348
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "3600 S Las Vegas Blvd",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3600 S Las Vegas Blvd",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+17026937111",
            "display_phone": "(702) 693-7111",
            "distance": 2983.8044901435687
        },
        {
            "id": "WYw3Uf56DT5IwpaLNnCH5Q",
            "alias": "vdara-hotel-las-vegas-2",
            "name": "Vdara Hotel",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ditQoqh_RVoerwH92tl2rw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/vdara-hotel-las-vegas-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 2423,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "spas",
                    "title": "Day Spas"
                },
                {
                    "alias": "resorts",
                    "title": "Resorts"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 36.1093008180008,
                "longitude": -115.178147449179
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "2600 W Harmon Ave",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89158",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "2600 W Harmon Ave",
                    "Las Vegas, NV 89158"
                ]
            },
            "phone": "+18667457111",
            "display_phone": "(866) 745-7111",
            "distance": 3203.0161097295836
        },
        {
            "id": "SMPbvZLSMMb7KU76YNYMGg",
            "alias": "aria-resort-and-casino-las-vegas-5",
            "name": "ARIA Resort & Casino",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/tKSNrugyB7yqwexbYKr6bg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/aria-resort-and-casino-las-vegas-5?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 3955,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "casinos",
                    "title": "Casinos"
                },
                {
                    "alias": "resorts",
                    "title": "Resorts"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 36.107621,
                "longitude": -115.17704
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "3730 Las Vegas Blvd S",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3730 Las Vegas Blvd S",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+17025907111",
            "display_phone": "(702) 590-7111",
            "distance": 3414.298322685521
        },
        {
            "id": "jKmAswXvFVRHN4VP-88zOA",
            "alias": "mandarin-oriental-las-vegas-las-vegas",
            "name": "Mandarin Oriental Las Vegas",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Wc7e8lWgU4No-oF8NeCdWw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/mandarin-oriental-las-vegas-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 593,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 36.106212,
                "longitude": -115.174213
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "3752 Las Vegas Blvd S",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3752 Las Vegas Blvd S",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+17025908888",
            "display_phone": "(702) 590-8888",
            "distance": 3666.915787693701
        },
        {
            "id": "bsrj9_hFAql3dlSf244zpg",
            "alias": "trump-international-hotel-las-vegas-las-vegas-2",
            "name": "Trump International Hotel Las Vegas",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/zU5TfGP9qWhQT_07ttGm9Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/trump-international-hotel-las-vegas-las-vegas-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 1726,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 36.129559,
                "longitude": -115.172825
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "2000 Fashion Show Dr",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "2000 Fashion Show Dr",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+17029820000",
            "display_phone": "(702) 982-0000",
            "distance": 1929.7766140598255
        },
        {
            "id": "ZjSzUWHtnpCfjsa7CksSOg",
            "alias": "the-signature-at-mgm-grand-las-vegas-5",
            "name": "The Signature at MGM Grand",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/6UXFICsbXcq8cKN-OHeaGw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-signature-at-mgm-grand-las-vegas-5?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 1543,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "spas",
                    "title": "Day Spas"
                },
                {
                    "alias": "resorts",
                    "title": "Resorts"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 36.1062541388777,
                "longitude": -115.166586184683
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "145 E Harmon Ave",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "145 E Harmon Ave",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+17027976020",
            "display_phone": "(702) 797-6020",
            "distance": 4024.916705431825
        },
        {
            "id": "0XoTT540HMB_5q4Exj8yGA",
            "alias": "four-seasons-hotel-las-vegas-las-vegas",
            "name": "Four Seasons Hotel Las Vegas",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/kv7E17AbM7bEqilsRfMaEQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/four-seasons-hotel-las-vegas-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 417,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 36.0904354063829,
                "longitude": -115.174222740489
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "3960 S Las Vegas Blvd",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89119",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3960 S Las Vegas Blvd",
                    "Las Vegas, NV 89119"
                ]
            },
            "phone": "+17026325000",
            "display_phone": "(702) 632-5000",
            "distance": 5285.815394701841
        },
        {
            "id": "eAc9Vd6loOgRQolMXQt6FA",
            "alias": "mandalay-bay-resort-and-casino-las-vegas",
            "name": "Mandalay Bay Resort & Casino",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/51tjnZFLZ50DWCRQAQ9XXw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/mandalay-bay-resort-and-casino-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 2840,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "casinos",
                    "title": "Casinos"
                },
                {
                    "alias": "resorts",
                    "title": "Resorts"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 36.091895,
                "longitude": -115.175256
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "3950 S Las Vegas Blvd",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3950 S Las Vegas Blvd",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+18776327800",
            "display_phone": "(877) 632-7800",
            "distance": 5102.49040333772
        },
        {
            "id": "VyjyHoBg3KC5BSFRlD0ZPQ",
            "alias": "caesars-palace-las-vegas-hotel-and-casino-las-vegas",
            "name": "Caesars Palace Las Vegas Hotel & Casino",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/xF3lS3mLqGlAmlnz7jBeqg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/caesars-palace-las-vegas-hotel-and-casino-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 2558,
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
            "rating": 3,
            "coordinates": {
                "latitude": 36.116765,
                "longitude": -115.174595
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "3570 Las Vegas Blvd S",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3570 Las Vegas Blvd S",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+18662275938",
            "display_phone": "(866) 227-5938",
            "distance": 2658.9943838758086
        },
        {
            "id": "DfgZlNgKwBvCpA_0alumXw",
            "alias": "the-mirage-las-vegas-3",
            "name": "The Mirage",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/d0_4QrOMsMzLNU7tVY79dg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-mirage-las-vegas-3?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 2087,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "casinos",
                    "title": "Casinos"
                },
                {
                    "alias": "resorts",
                    "title": "Resorts"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 36.1212805515877,
                "longitude": -115.17521904078
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3400 Las Vegas Blvd S",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3400 Las Vegas Blvd S",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+17027917111",
            "display_phone": "(702) 791-7111",
            "distance": 2247.2255580226843
        },
        {
            "id": "El4FC8jcawUVgw_0EIcbaQ",
            "alias": "mgm-grand-hotel-las-vegas",
            "name": "MGM Grand Hotel",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Fq6ygvYUVOnIKv3enuarTQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/mgm-grand-hotel-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 3650,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 36.10248,
                "longitude": -115.17149
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3799 Las Vegas Blvd S",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3799 Las Vegas Blvd S",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+17028911111",
            "display_phone": "(702) 891-1111",
            "distance": 4235.72797305573
        },
        {
            "id": "BLIJ-p5wYuAhw6Pp6mh6mw",
            "alias": "planet-hollywood-las-vegas-resort-and-casino-las-vegas",
            "name": "Planet Hollywood Las Vegas Resort & Casino",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/u6roX2hRL8TklUpFrvxiWw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/planet-hollywood-las-vegas-resort-and-casino-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 2779,
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
            "rating": 3,
            "coordinates": {
                "latitude": 36.1096884078048,
                "longitude": -115.170142948067
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3667 Las Vegas Blvd S",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3667 Las Vegas Blvd S",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+18669197472",
            "display_phone": "(866) 919-7472",
            "distance": 3528.229679535997
        },
        {
            "id": "qjnJFZtsY_nfRzoL3J_UWQ",
            "alias": "new-york-new-york-hotel-and-casino-las-vegas-2",
            "name": "New York New York Hotel & Casino",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/xQ8kkvrjU24VBmQsNW2f9g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/new-york-new-york-hotel-and-casino-las-vegas-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 1932,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "casinos",
                    "title": "Casinos"
                },
                {
                    "alias": "resorts",
                    "title": "Resorts"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 36.10111783007,
                "longitude": -115.173585823718
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3790 Las Vegas Blvd S",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3790 Las Vegas Blvd S",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+18668154365",
            "display_phone": "(866) 815-4365",
            "distance": 4200.93094761643
        },
        {
            "id": "uanCi4OGc1mHLGl_AT4JhQ",
            "alias": "treasure-island-las-vegas-6",
            "name": "Treasure Island",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/EgEn7kwh57dVa3u8n7fX0g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/treasure-island-las-vegas-6?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 2344,
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
            "rating": 3,
            "coordinates": {
                "latitude": 36.1245859,
                "longitude": -115.1716132
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3300 S Las Vegas Blvd",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "3300 S Las Vegas Blvd",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+17028947111",
            "display_phone": "(702) 894-7111",
            "distance": 2272.64274623414
        },
        {
            "id": "2aoKv8DjAeVBjTT9O9sx5g",
            "alias": "marriotts-grand-chateau-las-vegas",
            "name": "Marriott's Grand Chateau",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/eEunX0ID1PWFALrzVg8iJA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/marriotts-grand-chateau-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 449,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 36.107452,
                "longitude": -115.16935
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "75 E Harmon Ave",
                "address2": null,
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89109",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "75 E Harmon Ave",
                    "Las Vegas, NV 89109"
                ]
            },
            "phone": "+17028625600",
            "display_phone": "(702) 862-5600",
            "distance": 3772.8701263773146
        },
        {
            "id": "XwV2-lISDp_5Acy72bA8Qg",
            "alias": "the-platinum-hotel-las-vegas",
            "name": "The Platinum Hotel",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/9X1GrEDfh1JOCMEZiP7h7g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-platinum-hotel-las-vegas?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 432,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "resorts",
                    "title": "Resorts"
                },
                {
                    "alias": "spas",
                    "title": "Day Spas"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 36.1138678733582,
                "longitude": -115.163103023133
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "211 E Flamingo Rd",
                "address2": "",
                "address3": "",
                "city": "Las Vegas",
                "zip_code": "89169",
                "country": "US",
                "state": "NV",
                "display_address": [
                    "211 E Flamingo Rd",
                    "Las Vegas, NV 89169"
                ]
            },
            "phone": "+17023655000",
            "display_phone": "(702) 365-5000",
            "distance": 3605.1546693857504
        }], "austin":[{
            "id": "gnTdUlBX2HiAWDFycmSuqw",
            "alias": "hotel-san-josé-austin-2",
            "name": "Hotel San José",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/qkiPGzHuamYH1CVgqT7wZQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hotel-san-jos%C3%A9-austin-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 358,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 30.25066,
                "longitude": -97.74966
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1316 S Congress Ave",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78704",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "1316 S Congress Ave",
                    "Austin, TX 78704"
                ]
            },
            "phone": "+15128522350",
            "display_phone": "(512) 852-2350",
            "distance": 6106.786423559297
        },
        {
            "id": "AkxajgbDyzswEUQvT60UrQ",
            "alias": "kimber-modern-austin",
            "name": "Kimber Modern",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/83UGER2oyzZ6UO6IJvjW_A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimber-modern-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 120,
            "categories": [
                {
                    "alias": "bedbreakfast",
                    "title": "Bed & Breakfast"
                },
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 30.250087,
                "longitude": -97.748366
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "110 The Cir",
                "address2": null,
                "address3": "",
                "city": "Austin",
                "zip_code": "78704",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "110 The Cir",
                    "Austin, TX 78704"
                ]
            },
            "phone": "+15129121046",
            "display_phone": "(512) 912-1046",
            "distance": 6187.643916419504
        },
        {
            "id": "3KMXIbGBMMMGB2dZQaMR4w",
            "alias": "the-driskill-austin-4",
            "name": "The Driskill",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/PsWlBU8GExSX-JKP7sVs1w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-driskill-austin-4?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 426,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 30.26807,
                "longitude": -97.74168
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "604 Brazos St",
                "address2": null,
                "address3": "",
                "city": "Austin",
                "zip_code": "78701",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "604 Brazos St",
                    "Austin, TX 78701"
                ]
            },
            "phone": "+15124391234",
            "display_phone": "(512) 439-1234",
            "distance": 4402.051708611771
        },
        {
            "id": "6arn-THdlXiQJ7-FAGFjEg",
            "alias": "jw-marriott-austin-austin",
            "name": "JW Marriott Austin",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ACYmXYh05gpA_mtwtcD3zA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/jw-marriott-austin-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 308,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 30.2649550044141,
                "longitude": -97.7433533978119
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "110 E. Second Street",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78701",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "110 E. Second Street",
                    "Austin, TX 78701"
                ]
            },
            "phone": "+15124744777",
            "display_phone": "(512) 474-4777",
            "distance": 4678.214406486877
        },
        {
            "id": "0ABraNehd1Vwb83-PFdXDw",
            "alias": "four-seasons-hotel-austin-2",
            "name": "Four Seasons Hotel",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/qV7wg-7NxWlw6nL5cPs1tA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/four-seasons-hotel-austin-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 169,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 30.26232,
                "longitude": -97.74232
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "98 San Jacinto Blvd",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78701",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "98 San Jacinto Blvd",
                    "Austin, TX 78701"
                ]
            },
            "phone": "+15124784500",
            "display_phone": "(512) 478-4500",
            "distance": 5063.1835656363755
        },
        {
            "id": "evr__K_VEi5o_TxYUBN4_Q",
            "alias": "hilton-austin-austin",
            "name": "Hilton Austin",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/qBSDVNznyteqTQPu0m45zA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hilton-austin-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 396,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 30.26506,
                "longitude": -97.73862
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "500 E 4th St",
                "address2": null,
                "address3": "",
                "city": "Austin",
                "zip_code": "78701",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "500 E 4th St",
                    "Austin, TX 78701"
                ]
            },
            "phone": "+15124828000",
            "display_phone": "(512) 482-8000",
            "distance": 4829.013323607459
        },
        {
            "id": "FK9TyTx-5UWe5_EwPgeE3Q",
            "alias": "hyatt-regency-austin-austin",
            "name": "Hyatt Regency Austin",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/U7BJ-1ZIwLzkgk69_BqQnw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hyatt-regency-austin-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 311,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 30.2592,
                "longitude": -97.74691
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "208 Barton Springs Rd",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78704",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "208 Barton Springs Rd",
                    "Austin, TX 78704"
                ]
            },
            "phone": "+15124771234",
            "display_phone": "(512) 477-1234",
            "distance": 5057.106095804698
        },
        {
            "id": "SVKNNaX5wCZvc8P4X8obfg",
            "alias": "archer-hotel-austin-austin",
            "name": "Archer Hotel Austin",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/g6vejod_4WtzA4i-yFIQVg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/archer-hotel-austin-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 85,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 30.4022,
                "longitude": -97.72147
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "3121 Palm Way",
                "address2": null,
                "address3": null,
                "city": "Austin",
                "zip_code": "78758",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "3121 Palm Way",
                    "Austin, TX 78758"
                ]
            },
            "phone": "+15128365700",
            "display_phone": "(512) 836-5700",
            "distance": 11376.67145374934
        },
        {
            "id": "a43PmVFOpldKhUIDfO8zwQ",
            "alias": "hyatt-place-austin-downtown-austin",
            "name": "Hyatt Place Austin Downtown",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/UHHUO9FS0e81YPU5oRG4ng/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hyatt-place-austin-downtown-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 143,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 30.2647724747658,
                "longitude": -97.7422881871462
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "211 East 3rd Street",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78701",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "211 East 3rd Street",
                    "Austin, TX 78701"
                ]
            },
            "phone": "+15124764440",
            "display_phone": "(512) 476-4440",
            "distance": 4728.660688444012
        },
        {
            "id": "d3vs99txCZrUT6Jbc-jptA",
            "alias": "kimpton-hotel-van-zandt-austin",
            "name": "Kimpton Hotel Van Zandt",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/hvu5VKrGTAEOKGsbPtTvYw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kimpton-hotel-van-zandt-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 197,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                },
                {
                    "alias": "wedding_planning",
                    "title": "Wedding Planning"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 30.2601536042207,
                "longitude": -97.7389892523869
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "605 Davis St",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78701",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "605 Davis St",
                    "Austin, TX 78701"
                ]
            },
            "phone": "+15125425300",
            "display_phone": "(512) 542-5300",
            "distance": 5317.504804850363
        },
        {
            "id": "xj9Pb1TKKAlyIwxe0lZNzg",
            "alias": "lone-star-court-austin",
            "name": "Lone Star Court",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/o_GjNYnGBHj8Gr_5qR2cyA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/lone-star-court-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 155,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 30.3948576003313,
                "longitude": -97.7266079932451
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "10901 Domain Dr",
                "address2": null,
                "address3": "",
                "city": "Austin",
                "zip_code": "78758",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "10901 Domain Dr",
                    "Austin, TX 78758"
                ]
            },
            "phone": "+15128142625",
            "display_phone": "(512) 814-2625",
            "distance": 10411.535245293746
        },
        {
            "id": "KUnZIfWqCFP2be1yGJJw5w",
            "alias": "w-austin-austin",
            "name": "W Austin",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/kbk69b9fs_nyGHHgExJZCw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/w-austin-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 290,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 30.26535,
                "longitude": -97.74671
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "200 Lavaca St",
                "address2": null,
                "address3": null,
                "city": "Austin",
                "zip_code": "78701",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "200 Lavaca St",
                    "Austin, TX 78701"
                ]
            },
            "phone": "+15125423600",
            "display_phone": "(512) 542-3600",
            "distance": 4531.134126352088
        },
        {
            "id": "eT1vtal-J3bWHnIk6ovBEw",
            "alias": "hampton-inn-and-suites-austin-at-the-university-capitol-austin-2",
            "name": "Hampton Inn & Suites Austin at The University/Capitol",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/6idVZ7XjkrP3vyZkDxX10w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hampton-inn-and-suites-austin-at-the-university-capitol-austin-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 82,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 30.27953,
                "longitude": -97.74101
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1701 Lavaca St",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78701",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "1701 Lavaca St",
                    "Austin, TX 78701"
                ]
            },
            "phone": "+15124998881",
            "display_phone": "(512) 499-8881",
            "distance": 3275.4530609293897
        },
        {
            "id": "2pkPUKKtOkp-pnyCOEz3Og",
            "alias": "at-and-t-executive-education-and-conference-center-austin",
            "name": "AT&T Executive Education and Conference Center",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/V86LgEwdTIsGwAN9m0SSqg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/at-and-t-executive-education-and-conference-center-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 177,
            "categories": [
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                },
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 30.281989739212,
                "longitude": -97.740685919422
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1900 University Ave",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78705",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "1900 University Ave",
                    "Austin, TX 78705"
                ]
            },
            "phone": "+15124041900",
            "display_phone": "(512) 404-1900",
            "distance": 3051.366394317149
        },
        {
            "id": "n2ijrloYye25BI5iiKOscw",
            "alias": "hotel-saint-cecilia-austin",
            "name": "Hotel Saint Cecilia",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/wc7GNk7_FGHalXE7JFDXOA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hotel-saint-cecilia-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 57,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 30.25212,
                "longitude": -97.74735
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "112 Academy Dr",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78704",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "112 Academy Dr",
                    "Austin, TX 78704"
                ]
            },
            "phone": "+15128522400",
            "display_phone": "(512) 852-2400",
            "distance": 5978.2632546492405
        },
        {
            "id": "M3R-WXpxAz6bV1YpswMmxg",
            "alias": "omni-austin-hotel-downtown-austin-2",
            "name": "Omni Austin Hotel Downtown",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/LR0wnrJ6RtqIU6_RU88AKA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/omni-austin-hotel-downtown-austin-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 393,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 30.26857,
                "longitude": -97.74019
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "700 San Jacinto Blvd",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78701",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "700 San Jacinto Blvd",
                    "Austin, TX 78701"
                ]
            },
            "phone": "+15124763700",
            "display_phone": "(512) 476-3700",
            "distance": 4356.350983591774
        },
        {
            "id": "QCQta3bKbUvLan5OIjnMfg",
            "alias": "intercontinental-stephen-f-austin-austin",
            "name": "InterContinental Stephen F. Austin",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/tlSTjAebLBFmpQeC_0yosQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/intercontinental-stephen-f-austin-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 168,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 30.2691040039062,
                "longitude": -97.7419586181641
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "701 Congress Ave",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78701",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "701 Congress Ave",
                    "Austin, TX 78701"
                ]
            },
            "phone": "+15124578800",
            "display_phone": "(512) 457-8800",
            "distance": 4289.145997629912
        },
        {
            "id": "mp0sS2TDdFH1uYsux76-xg",
            "alias": "the-westin-austin-at-the-domain-austin",
            "name": "The Westin Austin at The Domain",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/LehiXg_zAh9rRgzcQwv9gA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-westin-austin-at-the-domain-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 162,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 30.39923,
                "longitude": -97.72526
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "11301 Domain Dr",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78758",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "11301 Domain Dr",
                    "Austin, TX 78758"
                ]
            },
            "phone": "+15128324197",
            "display_phone": "(512) 832-4197",
            "distance": 10912.086247998273
        },
        {
            "id": "-iCylmVN2t346RH8G1SDEg",
            "alias": "austin-motel-austin-2",
            "name": "Austin Motel",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/sFVvpmuRWvqxjQy2TiS5gQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/austin-motel-austin-2?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 146,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 30.25175,
                "longitude": -97.7491
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1220 S Congress Ave",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78704",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "1220 S Congress Ave",
                    "Austin, TX 78704"
                ]
            },
            "phone": "+15124411157",
            "display_phone": "(512) 441-1157",
            "distance": 5986.954691868078
        },
        {
            "id": "YHJp4CuP6ijNeJ9hNUV1fQ",
            "alias": "hotel-ella-austin",
            "name": "Hotel Ella",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/dsS22XuBWk6f83sNjjxY1A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hotel-ella-austin?adjust_creative=-SxmL2JanjVMHYmRgJBIPQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-SxmL2JanjVMHYmRgJBIPQ",
            "review_count": 73,
            "categories": [
                {
                    "alias": "hotels",
                    "title": "Hotels"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 30.2831726074219,
                "longitude": -97.745491027832
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "1900 Rio Grande",
                "address2": "",
                "address3": "",
                "city": "Austin",
                "zip_code": "78705",
                "country": "US",
                "state": "TX",
                "display_address": [
                    "1900 Rio Grande",
                    "Austin, TX 78705"
                ]
            },
            "phone": "+18003111619",
            "display_phone": "(800) 311-1619",
            "distance": 2711.4842124440556
        }]}))

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>, document.getElementById('root')

);
registerServiceWorker();

const saveState = () => {
    const state = JSON.stringify(store.getState())
    localStorage['redux-store'] = state
 }
 const handleSearchUpdate = results => {
   store.dispatch(setSearchResults(results))
 }
 window.addEventListener("searchResults", handleSearchUpdate)
 store.subscribe(saveState)
