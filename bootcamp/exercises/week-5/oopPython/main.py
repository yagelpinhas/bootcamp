class YouTubeLessonManager:
    def __init__(self):
        self.lessons={}
        self.counters={}
    def save(self,name,url):
        self.lessons[name] = url
    def get(self,name):
        keysList = self.lessons.keys()
        for key in keysList:
            if key.lower() == name.lower():
                if(key in self.counters):
                    self.counters[key]+=1
                else:
                    self.counters[key]=1
                return self.lessons[key]

    def get_counts(self,name):
        return self.counters[name]
    def get_most_popular_lesson(self):
        return sorted(self.counters.keys())[-1]
        
""""


print(lesson_manager.lessons) # outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}  
print(lesson_manager.lessons["For-Loops"]) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 
print(lesson_manager.get("For-Loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("fOr-LooPS")) 
"""
lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
lesson_manager.save("Dictionaries","www.youtube.com/sss")
lesson_manager.get("For-Loops")
lesson_manager.get("For-Loops")
lesson_manager.get("Dictionaries")
lesson_manager.get("For-Loops")
lesson_manager.get("Dictionaries") 
print(lesson_manager.get_counts('For-Loops')) # outputs: 3
print(lesson_manager.get_counts('Dictionaries')) # outputs: 2
print(lesson_manager.get_most_popular_lesson()) # outputs: 'For-Loops'