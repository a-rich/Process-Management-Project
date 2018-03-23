import json
from flask import Blueprint, request
from pmgmt.models import Hotel

search = Blueprint('search', __name__)

@search.route('/api/hotels/', methods=['POST'])
def search_hotels():
    """
        Given a search string, return a Whooshee search on the Hotel model for
        hotels with matching names and locations.
    """

    req = request.get_json()
    query = req['query']
    sort = req['sort']

    hotels = Hotel.query.whooshee_search(query).all()
    data = Hotel.hotel_schema.dump(hotels)
    return json.dumps(data)
