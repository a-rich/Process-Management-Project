from flask import Blueprint, request, jsonify
from pmgmt import ma
from flask_marshmallow import Marshmallow
from pmgmt.models import Hotel
import itertools


search_blueprint = Blueprint('search', __name__)

class HotelSchema(ma.ModelSchema):
    class Meta:
        model = Hotel


locations = ['chicago il', 'san francisco ca', 'los angeles ca', 'san jose ca','washington dc', 'new york ny', 'miami fl', 'las vegas nv', 'austin tx']

searchable_locations = [place.rsplit(' ', 1) for place in locations]

merged_locations = list(itertools.chain(*searchable_locations))

states = ['illinois', 'california', 'district of columbia', 'new york', 'florida', 'texas', 'nevada']

merged_locations += states


@search_blueprint.route('/api/hotels/', methods=['POST'])
def search():
    """
    Search currently requires city or state to match a location in the database 
    """
    word = request.form['query']

    if word not in merged_locations:
        return 'Sorry, we do not currently have any hotels in that area.'
    else:
        try:
            #print(word)
            query_result = Hotel.query.filter(Hotel.location.like("%"+word+"%")).all()
            #print(query_result)

            # serializes search results
            search_schema = HotelSchema(many=True)
            output = search_schema.dump(query_result)

            # return json representation of search results
            return jsonify(output.data)
        except:
            return 'failed query'

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
