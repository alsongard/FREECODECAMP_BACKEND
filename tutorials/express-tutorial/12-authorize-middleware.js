const authorize = (request, response, next)=>{
    const {user} = request.query;
    console.log(user);
    if (user === "john")
    {
        // create new property
        request.user = {username: "john", id:3};
        next();
    }
    else
    {
        response.status(401).send("<h1>Unauthorized</h1>");
    }
}

module.exports = authorize;