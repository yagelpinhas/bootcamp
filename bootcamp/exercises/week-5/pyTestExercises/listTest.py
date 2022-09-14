my_list = ["I", 2, "Love", 4, 56, "Cojing", "Python", "in", [8,9,10]]

def test_number():
  assert 3 not in my_list # Should assert if number 3 is in my_list
  assert 56 in my_list # Should assert if number 56 is in my_list
  
def test_str():
  assert "I" in my_list
  assert "Love" in my_list
  assert "Cojing" in my_list

def test_upper_str():
  strs = [x for x in my_list if type(x)==str]
  upperCase = [x for x in strs if x[0].isupper()==True]  
  assert len(strs) != len(upperCase) # Should assert if all the strings in my_list are in upper case﻿

def test_negative():
  assert 6 not in my_list # Should assert if number 6 is no﻿t in﻿ my_list - result should be true