import pytest

def isAnagram(s1,s2):
    if(sorted(s1)== sorted(s2)):
        return True
    else:
        return False

def test_anagram():
  assert isAnagram("hi","ih")==True

def test_not_anagram():
    assert isAnagram("hi","bx")==False