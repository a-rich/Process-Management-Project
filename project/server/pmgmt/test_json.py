import json
from pprint import pprint

with open('testing.json') as f:
	data = json.load(f)
#print(data.keys())
pprint(data)

#for d in data:
for location in data:
	print("location:{0}".format(location))
#		print(type(hotel)); print(len(hotel))
	for hotel in data[location]:
#			print(type(r3)); print(r3.keys()); print(len(r3))
		hid = hotel['id']
		print(hotel_id)

