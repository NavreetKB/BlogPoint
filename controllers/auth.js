import {db} from '../db';


export const register=(req,res)=>{
   //checking if user account already present
   const q="SELECT * FROM users where email=? OR username=?";

   db.query(q,[req.body.email, req.body.username],(err,data)=>{
    if(err) return res.json(err);
    if(data.length) return res.status(409).json({message:"Account already exists"});
     
    const q="INSERT INTO users (`username`,`email`,`password`) VALUES(?)"
    const values=[
       req.body.username,
       req.body.email,
       req.body.password
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.status(200).json("user account created!")
    })

});
}
export const login=(req,res)=>{
    
}
export const logout=(req,res)=>{
    
}
