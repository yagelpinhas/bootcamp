import os
quizzes = [
  {"name": "Guillermo", "quiz1": 80, "quiz2": 85, "quiz3": 82},
  {"name": "Jamie", "quiz1": 78, "quiz2": 72, "quiz3": 80},
  {"name": "Otto", "quiz1": 92, "quiz2": 89, "quiz3": 96},
  {"name": "Christina", "quiz1": 91, "quiz2": 85, "quiz3": 94},
  {"name": "Ceasar", "quiz1": 62, "quiz2": 65, "quiz3": 73},
  {"name": "Barbara", "quiz1": 78, "quiz2": 68, "quiz3": 78},
  {"name": "Rosan", "quiz1": 84, "quiz2": 85, "quiz3": 81},
  {"name": "Marco", "quiz1": 79, "quiz2": 72, "quiz3": 87},
] 



for i in range(0,len(quizzes)):
  name_file=str(i)+".txt"
  filepath = os.path.join(os.path.dirname(__file__), name_file)

  with open(filepath,"w+") as the_file:
    quiz1=quizzes[i]["quiz1"]
    quiz2=quizzes[i]["quiz2"]
    quiz3=quizzes[i]["quiz3"]
    avg = (quiz1+quiz2+quiz3)/3
    the_file.write(f"Quiz1: {quiz1}\n")
    the_file.write(f"Quiz1: {quiz2}\n")
    the_file.write(f"Quiz1: {quiz3}\n")
    the_file.write(f"Average: {avg}\n") 