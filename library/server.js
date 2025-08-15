const express = require("express");
const bcrypt = require("bcrypt");
require('dotenv').config();

const mongoose = require("mongoose");
const User = require("./model/user.model");
const Book = require("./model/book.model");
const BorrowedBook = require("./model/borrowedBook.model");

const genSalt=10;


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res)=>{
    res.send("<h1>Learning on how to use presave or static functions</h1>")
})

app.post("/user",  async (req, res)=>{
    const {username,admissionnumber,password} = req.body;
    console.log(`username: ${username} \nadmissionnumber: ${admissionnumber} \npassword:${password}`);
    try
    {
        if (!username || !admissionnumber || !password)
        {
            return res.status(404).json({success:false, msg:"Invalid Input"})
        }
        
        hashPasswd = await bcrypt.hash(password, genSalt);
        const new_user = await User.create({userName:username, admissionNumber:admissionnumber, password:hashPasswd})
    
        if (new_user)
        {
            console.log(new_user);
            return res.status(209).json({success:true, msg:"user successfully created", data:new_user});
        }
    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        return res.status(500).json({success:false, msg:'Server Error'})
    }
    
})

app.post("/createBook", async  (req, res)=>{
    const {bookTitle, bookGenre, bookAuthor} = req.body;
    try
    {
        if (!bookTitle || !bookGenre || !bookAuthor)
        {
            return res.status(404).json({success:false, msg:'Invalid Input'})
        }
        const new_book = await Book.create({title:bookTitle, genre:bookGenre, author:bookAuthor});
        if (new_book)
        {
            return res.status(200).json({success:true, msg:"Book successfully created", data:new_book});

        }
    }
    catch(err)
    {
        console.log(`Error: ${err}`);
        return res.status(500).json({success:false, msg:'Server Error'});

    }
    
})

app.post("/borrowbook", async (req,res)=>{
    const {bookId, userId, dateofBorrowing, dateofReturn, returnedState} = req.body;
    const session = await mongoose.startSession();
    session.startTransaction();
    try
    {
        if (!bookId || !userId || !dateofBorrowing || !dateofReturn)
        {
            return res.status(309).json({success:false, msg:"Invalid input"})
        }
        const borrowedBook = new BorrowedBook({
            bookId: bookId, 
            userId: userId,
            dateofBorrowing: dateofBorrowing,
            dateofReturn: dateofReturn,
        })

        await borrowedBook.save({session});
        // console.log(`this is session`);
        // console.log(session);


        // update the userDetails
        await User.findByIdAndUpdate(
            userId,
            { $inc: { bookNumberBorrowed: 1 } },
            {session}
        )

        //commit transaction
        await session.commitTransaction();
        console.log(`borrowedBook`)
        console.log(borrowedBook);
        if (borrowedBook)
        {

            res.status(201).json({success:true, data:borrowedBook})
        }

    }
    catch(err)
    {
        session.abortTransaction();
        session.endSession()
        console.log(`Error: ${err}`);
        return res.status(500).json({success:false, msg:'Server Error'});
    }
})
const mongouri=process.env.MONGO_URI; 
const port = process.env.PORT_NUM;
const connectDB  = async ()=>{
    try
    {
        await mongoose.connect(mongouri);
        console.log('Connected Successfully');
        app.listen(5000, ()=>{
            console.log(`Listening too port ${port}`)
        })
    }
    catch(err)
    {
        console.log(`Error: ${err}`);
    }
}

connectDB();