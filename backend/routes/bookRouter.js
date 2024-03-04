import  express  from "express";
import { Book} from  "../models/bookModel.js"

const router=express.Router();



//save new book
router.post('/',async(req,res)=>{
    try{
        if(
       !req.body.title ||
       !req.body.author||
       !req.body.publishYear
        ){
    return res.status(400).send({
        message:'send all required fields:title,author,publishYear',
    })
        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
        }
        const book= await Book.create(newBook)
        return res.status(201).send(book)
        
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
    })
    //get data of books
    
    router.get('/',async(req,res)=>{
        try{
            const books=await Book.find({});
            return res.status(200).json({
                count:books.length,
                data:books
            })
        } catch(error){
            console.log(error.message);
            res.status(500).send({message:error.message})
        }
    })
    //route for get book from databse by id
    router.get('/:id',async(req,res)=>{
        try{
            const { id } = req.params;
            const book=await Book.findById(id);
            return res.status(200).json(book)
        } catch(error){
            console.log(error.message);
            res.status(500).send({message:error.message})
        }
    })
    //update book
    router.put('/:id',async(req,res)=>{
        try{
            if(
                !req.body.title ||
                !req.body.author ||
                !req.body.publishYear
            ){
                return res.status(400).send(
                    {
                        message:'send all required fields :title,authoe,publishYear',
                    }
                )
            }
            const{id} =req.params;
            const result=await Book.findByIdAndUpdate(id,req.body)
            if(!result){
                return res.status(404).json({message:'Book Not Found'})
            }
                
            return res.status(200).send({message:'Book updated successfully'})
    
        }catch(error){
            console.log(error.meassage);
            res.status(500).send({message:error.meassage})
        }
    })
    //delete bookid
    router.delete('/:id',async(req,res)=>{
        try{
            const {id}=req.params;
            const result=await Book.findByIdAndDelete(id);
            if(!result){
                return res.status(404).json({meassage:'Book not found'})
            }
            return res.status(200).send({meassage:'Book deleted successfully'})
    
    
        }catch(error){
    console.log(error.meassage)
    response.status(500).send({message:error.message})
        }
    })
    


  export default router;  
    
    
    
    
    