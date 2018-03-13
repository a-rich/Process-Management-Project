import json
from pprint import pprint

with open('../../utils/hotel_data.json') as f:
	data = json.load(f)
#print(data.keys())
#pprint(data)

#for d in data:
for location in data:
	print("location:{0}".format(location))
	for hotel in data[location]:
#		print(type(hotel), len(hotel))
		hid = hotel['id']
		phone = hotel['display_phone']
		name = hotel['name']
		image_url = hotel['image_url']
		coordinates = str(hotel['coordinates']['latitude'])+', '+str(hotel['coordinates']['longitude'])
		rating = hotel['rating']
		price = hotel['price']
		address = ", ".join([work for work in hotel['location']['display_address']])
		print(address)

