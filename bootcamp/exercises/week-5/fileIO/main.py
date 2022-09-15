the_file = open("attendance.txt")
names = the_file.read().split("\n") 
dictionary={}
for i in range(0,len(names)):
    if names[i] in dictionary:
        dictionary[names[i]]+=1
    else:
        dictionary[names[i]]=1
print(dictionary)