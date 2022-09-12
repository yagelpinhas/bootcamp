def encode(s,r):
    orig_r=r
    res=""
    for i in range(0,len(s)):
        num=ord(s[i])
        fixedNum=num+r
        if(fixedNum > 90):
            r-=90-num +1
            fixedNum=65+r
            r=orig_r
        fixedChar = chr(fixedNum)
        res+=fixedChar
    return res

def decode(s,r):
    orig_r = r 
    res=""
    for i in range(0,len(s)):
        num=ord(s[i])
        fixedNum = num - r
        if(fixedNum< 65):
            r-= num -65
            r-=1
            fixedNum= 90 -r
            r=orig_r
        fixedChar = chr(fixedNum)
        res+=fixedChar
    return res

encoded_str = encode("ZRE",3)
print(encoded_str)

decoded_str = decode(encoded_str,3)
print(decoded_str)

