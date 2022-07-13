const express = require('express')
const router = require('express').Router();
const bookschema = require('../bookModel/bookschema')

//Create the Books.
router.post ('/createbooks',async(req,res)=>{
    // const book = new bookschema({
    //    title: req.body.title,
    //    isbn: req.body.isbn,
    //    pageCount: req.body.pageCount,
    //    publishedDate: req.body.publishedDate,
    //    status: req.body.status
    // })
    try{
       const savedbook = await bookschema.create(req.body)
       res.json(savedbook);
    }catch(err){
       res.json({message: err})
    }
 })

//Read all the Books.
router.get('/readbooks',async (req,res)=>{
    try{
       const books = await bookschema.find();
       res.json(books);
    }catch(err){
       res.json({message:err})
    }
 })

//Read a specific Book.
router.get('/readbook/:bookId',async(req,res)=>{
    try{
       const book = await bookschema.findById(req.params.bookId)
       res.json(book)
    }catch(err){
       res.json({message:err})
    }
})

// UPDATING A SPECIFIC BOOK
router.patch('/updatebook/:bookId',async(req,res)=>{
    try{
       const updateOne=await bookschema.findByIdAndUpdate(
        req.params.bookId, req.body, {new:true,runValidators:true}
        )
       res.json(updateOne);
 
    }catch(err){
       res.json({message:err})
    }
 })

// DELETING A SPECIFIC BOOK
router.delete('/deletebook/:bookId',async(req,res)=>{
    try{
       const removedBook = await bookschema.deleteOne({_id: req.params.bookId})
       res.json(removedBook)
    }catch(err){
       res.json({message:err})
    }
 })

module.exports = router;
