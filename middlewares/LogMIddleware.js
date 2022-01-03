const fs = require('fs')
module.exports = (req, res, next) => {
    
    fs.writeFileSync('log.txt', `${(new Date()).toISOString()} \n`, {flag:'a'});
    next();
    
}