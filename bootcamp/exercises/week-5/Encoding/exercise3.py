def get_word_value(word):
    sum=0
    for i in range(0,len(word)):
        sum+=(ord(word[i])-96)
    return sum

print(get_word_value("day"))
