import csv
stocks = [
  {"name": "Apple", "price": 246},
  {"name": "Tesla", "price": 328},
  {"name": "Microsoft", "price": 140},
  {"name": "Amazon"},
  {"name": "Lionsgate", "price": 8},
  {"name": "Netflix", "price": 276},
  {"name": "Google"},
  {"name": "Activision", "price": 55},
] 
with open('stocks.csv',"w") as csv_file:
   csv_writer = csv.writer(csv_file)
   csv_writer.writerow(["Company","Price"]) 
   for stock in stocks:
    price=0
    if "price" in stock.keys():
        price=stock["price"]
    new_row=[stock["name"],price]
    csv_writer.writerow(new_row) 