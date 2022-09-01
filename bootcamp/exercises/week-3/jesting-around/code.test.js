
/*
const add = require('./code')

test("add should return sum of a + b", () => {
    let sum = add(1,2)
    expect(sum).toBe(3)
})
*/


/*
const calculateHyp = require('./code')
test("should return the root square of a^2 + b^2",() => {
    let result = calculateHyp(3,4)
    expect(result).toBe(5)
})
*/


/*
const clearLowPriority = require('./code')

test("should keep only HIGH priority tasks", () => {
    let tasks = [{ text: "dummy", priority: "HIGH" }, { text: "dummy", priority: "LOW" }]
    let filteredTasks = clearLowPriority(tasks)

    filteredTasks.forEach(t => {
        expect(t.priority).toBe("HIGH")
    })
})
*/

/*
const PM = require('./code')

test("addPicture should add a picture URL to the pictureURLs array", function () {
  //sanity 
  const picManager = new PM()
  expect(picManager.pictureURLs.length).toBe(0)
  
  picManager.addPicture("some_url")
  expect(picManager.pictureURLs.length).toBe(1)           //test
  expect(picManager.pictureURLs).toContain("some_url")    //double check 
})


test("removePicture should receive a picture URL and remove it from the pictureURLs array", function () {
    //sanity
    const picManager = new PM()
    expect(picManager.pictureURLs.length).toBe(0)

    picManager.addPicture("some_url")
    picManager.addPicture("some_url2")
    picManager.addPicture("some_url3")

    picManager.removePicture("some_url2")
    expect(picManager.pictureURLs.length).toBe(2)
    expect(picManager.pictureURLs).not.toContain("some_url2") //here this isn't double checking, this is necessary
})
*/


/*
const AM = require('./code')
test("should convert two arrays of equal length to a single object with key-values from the arrays", () => {
    let arrayManipulator = new AM()
    let x = ["food", "item", "location"]
    let y = ["cherry", "lightbulb", "Tazmania"]

    let result = arrayManipulator.manipulate(x, y)

    expect(result).toEqual({
        food: "cherry",
        item: "lightbulb",
        location: "Tazmania"
    })
})

test("should return a message when array lengths don't match", () => {
    let arrayManipulator = new AM()
    let x = ["food", "item", "location"]
    let y = ["cherry", "lightbulb"]

    let result = arrayManipulator.manipulate(x, y)

    expect(result).toEqual({ error: "Array lengths don't match" })
})
*/

const EX = require('./code')


test('Exercise 1 : checks the isEven Function', () => {
    let exj = new EX()
    let result = exj.isEven(4)
    expect(result).toBeTruthy();
  });

test('Exercise 2 : should remove at least one element from an array', () => {
    let exj = new EX()
    let arr = [0,1,2,3,4]
    let len = arr.length
    let result = exj.removeAtLeastOne(arr)
    expect(result.length).toBeLessThan(len);
})

test('Exercise 3: should remove special chars from a string',() => {
    let exj = new EX()
    let str = "Hello,there!#"
    let resultStr = exj.simplify(str)
    expect(resultStr).toEqual("Hellothere")
    expect(resultStr).not.toContain("!")
})

test('Exercise 4: check an array of booleans - 1 at least',() => {
    let exj = new EX()
    let arrThatDoesntContainBooleans = [2,3]
    expect(exj.validate(arrThatDoesntContainBooleans)).toEqual({error: "Need at least one boolean"})

    let moreTruths = [true,true,false]
    expect(exj.validate(moreTruths)).toBeTruthy();

    let moreFalses = [false,true,false]
    expect(exj.validate(moreFalses)).toBeFalsy();

    let nullArr = null
    expect(exj.validate(nullArr)).toEqual({error: "Need at least one boolean"})

    let wrongType=true
    expect(exj.validate(wrongType)).toEqual({error: "Need at least one boolean"})
})
