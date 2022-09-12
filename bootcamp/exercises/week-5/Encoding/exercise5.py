def stringToInt(s,b):
    for i in range(0,len(s)):
        if(ord(s[i])>57 or ord(s[i])<48):
            return
    res=0
    base=1
    for j in reversed(range(0,len(s))):
        currChar = s[j]
        
        res+= base*(ord(currChar)-48)
        base=base*b
    return res

print(stringToInt("123",8))
