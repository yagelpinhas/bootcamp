import csv
with open('expenses.csv') as csv_file:
  csv_reader = csv.reader(csv_file)
  next(csv_reader)
  for row in csv_reader:
    print(row) 