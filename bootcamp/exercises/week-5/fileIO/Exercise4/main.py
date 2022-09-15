from itertools import count
import json
import csv
from unicodedata import category

counters={}
owners={}
times={}
status={}
category={}
sub_category={}

def statusJson(json_data):
    for i in range(0,len(json_data)):
        status[json_data[i]["name"]]=json_data[i]["status"]
def categoryJson(json_data):
    for i in range(0,len(json_data)):
        category[json_data[i]["name"]]=json_data[i]["cat"]
def sub_categoryJson(json_data):
    for i in range(0,len(json_data)):
        sub_category[json_data[i]["name"]]=json_data[i]["sub-cat"]


def countJson(json_data):
    for i in range(0,len(json_data)):
        if(json_data[i]["name"] in counters.keys()):
            counters[json_data[i]["name"]]+=1
        else:
            counters[json_data[i]["name"]]=1
def timesJson(json_data):
    for i in range(0,len(json_data)):
        if(json_data[i]["name"] in times.keys()):
            times[json_data[i]["name"]].append(json_data[i]["time"])
        else:
            times[json_data[i]["name"]]=[]
            times[json_data[i]["name"]].append(json_data[i]["time"])

def ownersJson(json_data):
    for i in range(0,len(json_data)):
        if(json_data[i]["name"] in owners.keys()):
            owners[json_data[i]["name"]].append(json_data[i]["owner"])
        else:
            owners[json_data[i]["name"]]=[]
            owners[json_data[i]["name"]].append(json_data[i]["owner"])

the_file = open("test_reports.json")
json_data = json.load(the_file)
countJson(json_data)
timesJson(json_data)
ownersJson(json_data)
statusJson(json_data)
categoryJson(json_data)
sub_categoryJson(json_data)

def countCSV(name):
    if name in counters.keys():
        counters[name]+=1
    else:
        counters[name]=1
def timesCSV(name,time):
    if name in times.keys():
        times[name].append(time)
    else:
        times[name]=[]
        times[name].append(time)
def ownersCSV(name,owner):
    if name in owners.keys():
        owners[name].append(owner)
    else:
        owners[name]=[]
        owners[name].append(owner)


with open('test_reports.csv') as csv_file:
  csv_reader = csv.reader(csv_file)
  next(csv_reader)
  for row in csv_reader:
    countCSV(row[0])
    timesCSV(row[0],row[1])
    ownersCSV(row[0],row[2])
    status[row[0]]=row[5]
    category[row[0]]=row[3]
    sub_category[row[0]]=row[4]


with open('report.txt', 'a') as the_file:
    for name in counters.keys():
        the_file.write(f"Report: {name}")
 
       
        the_file.write("\n")
        the_file.write(f"Number: {counters[name]}")
        the_file.write("\n")
        the_file.write(f"Time: {times[name]}")
        the_file.write("\n")
        the_file.write(f"Owners: {owners[name]}")
        the_file.write("\n")
        if(status[name]=="1"):
            the_file.write("PASS")
        else:
            the_file.write("FAIL")
        the_file.write("\n")
        the_file.write(f"Category: {category[name]}")
        the_file.write("\n")
        the_file.write(f"Sub Category: {sub_category[name]}")
        the_file.write("\n")
the_file.close()