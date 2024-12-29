const new_logger = (request, response, next)=>{
    const {url, method} = request;
    const year = new Date().getFullYear();
    console.log(url, method, year);
    next();
}

module.exports = new_logger;