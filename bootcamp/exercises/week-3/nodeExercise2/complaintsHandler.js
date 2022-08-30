const consts = require('./consts')

const handleComplaint = function(complaint){
    if(complaint.type==consts.finance){
        console.log("Money doesn't grow on trees you know");
    }
    if(complaint.type==consts.weather){
        console.log("can't control weather");
    }
    if(complaint.type==consts.emotions){
        console.log("it'll pass. it will.")
    }
}

module.exports.handleComplaint = handleComplaint;