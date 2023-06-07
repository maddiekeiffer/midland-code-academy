module.exports = function(req, res, next) {
    console.log('Middleware');
    //continues to the next function
    next();
}