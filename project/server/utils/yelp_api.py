import os
import sys
import json
from yelpapi import YelpAPI

# The Yelp API key to one of my registered apps.
key = "2beSt99udBL_fCxZI2VmKCv2HgfuZrkgQjFOmYXDPdY9GyVaH-J122leeQzuGrr2N3YzLEhk2TMOPjpgbo6bSkfTVMS9VdcZHyM7LNdCKPC9GoY4TNFdTeSDwrn_WHYx"

# Authenticate API access.
api = YelpAPI(key)

# Cities to search for hotels
locations = ['chicago il', 'san francisco ca', 'los angeles ca', 'san jose ca',
        'washington dc', 'new york ny', 'miami fl', 'las vegas nv', 'austin tx']

# If there's already a JSON file with hotel data, load it.
if os.path.isfile('hotel_data.json'):
    data = json.load(open('hotel_data.json', 'r'))
    initial_key_count = len(data.keys())
    locations = [loc for loc in locations if loc not in data.keys()]
    new_keys = dict.fromkeys(locations, [])
    data = {**data, **new_keys}
    if len(data.keys()) == initial_key_count:
        sys.exit('No new information was scraped. Exiting program.')
else:
    data = dict.fromkeys(locations, [])

limit = 50
radius = 40000

for loc in locations:
    print('Searching for hotels in {}...'.format(loc))

    first_result = api.search_query(location=loc, radius=radius, limit=limit,
            categories='hotels', offset=0)

    data[loc] = first_result['businesses']
    count = first_result['total']
    offset = limit

    print('\tCollection information on {} hotels in {}'.format(count, loc),
            end='')

    while offset < count and offset+limit <= 1000:
        next_result = api.search_query(location=loc, radius=radius,
                limit=limit, categories='hotels', offset=offset)
        data[loc] += next_result['businesses']
        offset += limit
        print('.', end='')
        sys.stdout.flush()

    print('\n\tFinished collection information on {} hotels in {}\n'.format(
            len(data[loc]), loc))

print('Collected hotel information on the following locations:\n\t{}'.format(
        '\n\t'.join(locations)))

print('Writting these results to file: hotel_data.json')
json.dump(data, open('hotel_data.json', 'w'))
