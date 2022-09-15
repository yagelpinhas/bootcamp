import json
import csv

thelist=[]

txt_file = open("txtobj.txt")
obj_list = txt_file.read().split("\n")
final_list=[]
for i in range(0,len(obj_list)):
  name_value=obj_list[i].split("-")
  dictionary={}
  dictionary[name_value[0]]=name_value[1]
  thelist.append(dictionary)
  

with open("exercise3.json", "w") as the_file:
  json.dump(thelist, the_file) 


with open("exercise3.csv", "w") as csv_file:
  csv_writer = csv.writer(csv_file)
  csv_writer.writerow(["item","price"]) 
  for i in range(0,len(thelist)):
    key_i=list(thelist[i].keys())[0]
    value_i = thelist[i][key_i]
    row_in_list = [key_i,value_i]
    csv_writer.writerow(row_in_list) 