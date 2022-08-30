const complaintsHandler = require('./complaintsHandler')
let complaint1 = {
    text: "I'm not getting enough money",
    type: "finance"
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: "finance"
}

let complaint3 = {
    text: "I'm always full of energy",
    type: "emotions"
}

complaintsHandler.handleComplaint(complaint1) //should print "Money doesn't grow on trees, you know."
complaintsHandler.handleComplaint(complaint2) //should print "Money doesn't grow on trees, you know."
complaintsHandler.handleComplaint(complaint3) //should print "It'll pass, as all things do, with time."