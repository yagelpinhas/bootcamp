
from turtle import hideturtle
from fastapi import Request
from fastapi import FastAPI , status ,  HTTPException
import uvicorn

app = FastAPI()
dictionary={}

@app.get('/dictionary/{word}')
def get_wonders(word):
    for element in dictionary:
        if element == word:
            return {"count" : dictionary[word]}





@app.post('/addsentence',status_code=201)
async def create_wonder(request: Request):
    existed=0
    new = 0
    new_wonder = await request.json()
    sentence = new_wonder["sentence"]
    for word in sentence.split(" "):
        if word in dictionary.keys():
            existed+=1
            dictionary[word]+=1
        else:
            new+=1
            dictionary[word]=1
    return {"text": f"Added {new} new words. {existed} already existed."}

@app.post('/addword',status_code=201)
async def create_wonder(request: Request):
    new_wonder = await request.json()
    word = new_wonder["word"]
    if word in dictionary.keys():
        dictionary[word]+=1
    else:
        dictionary[word]=1
    return {"text" : f"Added {word}", "currentCount": {dictionary[word]} }


@app.delete('/deleteword/{word}')
def delete_word(word):
    if word in dictionary.keys():
        del dictionary[word]
        return "deleted"
    else:
        raise HTTPException(status_code=404, detail="Item not found")


@app.get('/mostcommonword')
def get_most_common_word():
    max = -1
    most_common_word="" 
    for word in dictionary.keys():
        if dictionary[word]>max:
            max=dictionary[word]
            most_common_word=word
    return {"text": most_common_word, "count": dictionary[most_common_word]}

@app.get('/5mostcommon')
def get_five_most_common():
    sortedList = list(dict(sorted(dictionary.items(), key=lambda item: item[1])))
    five_most_common_list = sortedList[-5:]
    five_most_common_list_fixed = reversed(five_most_common_list)
    sortedListObjs=[]
    for i in range(0,len(five_most_common_list)):
        sortedListObjs.append({f"{five_most_common_list[i]}": {dictionary[five_most_common_list[i]]}})
    return {"ranking": sortedListObjs}
    
@app.get('/total')
def get_total():
    return sum(dictionary.values())

@app.get('/')
def root():
    return {"message":"Server is up and running"}




if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
