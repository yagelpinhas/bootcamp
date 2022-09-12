def to_upper(c):
    num = ord(c)
    if num>=97 and num<=122:
        num-=32
        return(chr(num))
    else:
        return c

def upper(s):
    res=""
    for i in range(0,len(s)):
        res+=to_upper(s[i])
    return res

print(upper('AaB!!b'))