const db = require("../data/config")


module.exports = {
    find,
    findById
}

function find() {
    return db('schemes')
}

async function findById(id) {
    const scheme = await db("schemes").where('id', id).first();
    
    if(scheme) {
        return scheme
    } else { 
        return null
    }
}

// function findSteps(id) {
// //    
// }