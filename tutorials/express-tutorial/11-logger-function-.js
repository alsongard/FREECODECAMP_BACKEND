function logger(request, response, next){
    const url = request.url;
    const method = request.method;
    const year = new Date().getFullYear();

    console.log(url, method, year);
    next();
};

module.exports = logger;
console.log(module);