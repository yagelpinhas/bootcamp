import datetime

print(datetime.datetime.today().strftime("%d/%m/%Y, %H:%M:%S"))

def getYear():
    print("The year is : ")
    print(datetime.datetime.today().strftime("%Y"))

def getDay():
    print("The day is : ")
    now = datetime.datetime.now()
    print(now.strftime("%A"))


getYear()
getDay()
