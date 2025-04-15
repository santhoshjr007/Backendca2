const express=require('express')
const app = express();
const PORT = 3000;
app.use(express.json())

app.get('/login',(req,res)=>{
    const email =res.send;
    const password=res.send;
    if(!email ){
        return res.status(404).json({message:"Email cannot be empty"})

    }else if(!password){
      return res.status(404).json({message:"Password cannot be empty"})
    
    }
})


app.listen(PORT,()=>{
    console.log("Server running succesfully on http://localhost:3000/")
})
