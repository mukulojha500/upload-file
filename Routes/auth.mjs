import { Router } from 'express';
const router = Router()
import { hash, compare } from 'bcrypt';
import User from '../Models/UserModel.js';

router.post('/signup', async(req,res)=>{
    try{
        const {name,email,password} = req.body;

        const hashedPassword = await hash(password,10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({message:"User registered successfully"})
    }catch(error){
        console.log(error);
        res.status(500).json({error:"User registration Failed"})
    }
})

router.post('/login', async(req,res)=>{
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({error:"User not found"})
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            return res.status(401).json({error:"Invalid Credentials"})
        }

        console.log(user)

        res.status(200).json({message:"Login successful"})
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Login failed' });
    }
})

export default router;