from flask import Blueprint, request, jsonify
from flask_marshmallow import Marshmallow
from pmgmt.models import Hotel, ma
import itertools

class HotelSchema(ma.ModelSchema):
    class Meta:
        model = Hotel

search_blueprint = Blueprint('search', __name__)

locations = ['chicago il', 'san francisco ca', 'los angeles ca', 'san jose ca','washington dc', 'new york ny', 'miami fl', 'las vegas nv', 'austin tx']

searchable_locations = [place.rsplit(' ', 1) for place in locations]

merged_locations = list(itertools.chain(*searchable_locations))

states = ['illinois', 'california', 'district of columbia', 'new york', 'florida', 'texas', 'nevada', 'washington dc']

merged_locations += states

@search_blueprint.route('/api/hotels/', methods=['POST'])
def search():
    """
    Search hotel database by city or state
    """
    # word = request.form['query']
    req = request.get_json()
    word = req['query']
    sort = req['sort']

    name_sort = sort['name']
    price_sort = sort['price']
    rating_sort = sort['rating']

    # figure all sort metriccs
    if price_sort:
        price_order = 'price asc' if price_sort == 1 else 'price desc'
    else:
        price_order = None

    if rating_sort:
        rating_order = 'rating asc' if rating_sort == 1 else 'rating desc'
    else:
        price_order = None

    if name_sort:
        name_order = 'name asc' if name_sort == 1 else 'name desc'
    else:
        name_order = None

    if word not in merged_locations:
        return 'Sorry, we do not currently have any hotels in that area. Check your spelling.'
    else:
    # if word:
        try:
            if price_sort and rating_sort and name_sort:
                query_result = Hotel.query.filter(Hotel.location.like("%"+word+"%"))\
                    .order_by(price_order+', '+rating_order+', '+name_order).all()

            # if price_sort and not rating_sort:
            #     query_result = Hotel.query.filter(Hotel.location.like("%"+word+"%"))\
            #         .order_by(price_sort).order_by(rating_sort).all()
            # serializes search results
            search_schema = HotelSchema(many=True)
            output = search_schema.dump(query_result)

            # return json representation of search results
            return jsonify(output.data)
        except:
            return 'failed query'

# @search_blueprint.route('api/hotels/', methods='POST')
# def search_filters():



    # try:
    #     results = Hotel.query.all()
    #
    #     output = []
    #
    #     for hotel in results:
    #         hotel_data = {}
    #         hotel_data['id'] = hotel.id
    #         hotel_data['hid'] = hotel.hid
    #         hotel_data['name'] = hotel.name
    #         hotel_data['image_url'] = hotel.image_url
    #         hotel_data['rating'] = hotel.rating
    #         hotel_data['coordinates'] = hotel.coordinates
    #         hotel_data['price'] = hotel.price
    #         hotel_data['tiers'] = hotel.tiers
    #         hotel_data['location'] = hotel.location
    #         hotel_data['address'] = hotel.address
    #         hotel_data['phone'] = hotel.phone
    #         output.append(hotel_data)
    #     return jsonify(output)
    #     #print(results)
    # except:
    #     return 'this is some bullshit'
