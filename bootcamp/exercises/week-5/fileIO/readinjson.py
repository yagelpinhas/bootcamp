import json
the_file = open("turtles.json")
turtles_data = json.load(the_file) 

print(turtles_data[0]['gender']) 