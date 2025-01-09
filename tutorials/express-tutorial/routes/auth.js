const express = require("express");
const router  = express.Router();


router.post("/", (request, response)=>{
    // console.log(request.body) // prints [Object: null prototype] { fullName: 'Arcade VI Jinx' }
    const {fullName} = request.body;
    // response.send("<p>POST working</p>");
    if (!fullName)
    {
        return response.status(404).send("<p>Enter full name </p>");

    }
    else{
        response.status(200).send(`My body is on the line now i can't feel this time now from  ${fullName}`)
    }
});

module.exports = router;