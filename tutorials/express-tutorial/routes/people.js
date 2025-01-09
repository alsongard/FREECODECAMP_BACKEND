const express = require("express");
const router = express.Router();
const {people}  = require("../new_data.js");

router.get("/",(request,response)=>{
    console.log(people);
    response.status(200).json({success: true, data:people})
});


router.post("/", (request, response)=>{
    console.log("this is request body: ")
    console.log(request.body)
    const {name} = request.body;
    // console.log(`Type of request body is : ${request.body} and data is : ${request.body}`)
    console.log(name); // prints out the value inpute by the user as an object
    if (name)
    {
        response.status(201).json({sucess:true, data: name})
    }
    else{
        response.status(400).json({success:false, msg:"please provide value"})
    }
});


router.post("/postman", (request, response)=>{
    console.log(`Type of poepleData is : ${typeof(peopleData)}`)
    const {name} = request.body;
    console.log(request.body);
    console.log(name);
    if (!name)
    {
        return response.status(400).send({sucess: false, msg: "please provide a name"})
    }
    else
    {
        response.status(200).send({sucess: true, data :[...people, name]});

    }
});

router.put("/:id", (request, response)=>{
    const {id} = request.params;
    const {names} = request.body;
    console.log(id);
    console.log(typeof(id))
    // perform type  conversion
    const new_id = Number(id);

    const personFound =  people.find((peopleItem)=>{
        if (peopleItem.id === new_id)
        {
            return peopleItem.name = names;
        }
    })
    console.log(personFound);

    if (!personFound)
    {
        return response.status(400).send({success: false, msg: "Person Not found"})
    }
    else{

        response.status(200).json({success: true, data: people})
    }
});




router.delete("/:id", (request, response)=>{
    const {id} = request.params;
    const new_id = Number(id);

    const person = people.find((peopleItem)=>{
        if (peopleItem.id === new_id)
            {
                return peopleItem;
            }
    });

    // const newPeople = people.filter(peopleItem => peopleItem.id !== new_id)
    const newPeople = people.filter((peopleItem)=>{
        if (peopleItem.id !== new_id)
        {
            return peopleItem;
        }
    })
    console.log(newPeople);
        
    if (!person)
    {
        return response.status(400).send({success:false, msg:`User with id ${id} not found `} )
    }
    response.status(200).json({success: true, data: newPeople})
});


module.exports = router;