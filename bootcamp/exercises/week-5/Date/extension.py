import datetime
birthday = input("Please enter your birthday in DD-MM-YYYY format: ")
date_format = "%d-%m-%Y"
birthday_datetime = datetime.strptime(birthday, date_format)
today = datetime.today()
print("Your age is:", today.year - birthday_datetime.year)
next_birthday = birthday_datetime.replace(year=today.year)
    
if next_birthday < today:
    next_birthday = birthday_datetime.replace(year=today.year + 1)
time_until_next_birthday = next_birthday - today
print("The time until the next birthday is:", time_until_next_birthday) 