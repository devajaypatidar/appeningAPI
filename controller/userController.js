const bcrypt = require('bcrypt');

const User = require('../model/user');
const login = async (req,res) =>{
    const {username,password} = req.body;
    try{
        const user = await User.findOne({username: username});
        if(!user){
            return res.status(400).json({message:"Invalid Creadentials"});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Creadentials"});
        }

        const token = jwt.sign({
            _id:user._id, 
            role:user.role, 
        }, process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({token : token});

    }catch(err){
        res.status(500).json({message:"Internal Server Error"});
    }
}

const register = async (req,res)=>{
    const {username,password,role} = req.body;
    try{
        const toFind = await User.findOne({username: username});
        if(toFind){
            return res.status(400).json({message:"User Already Present"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const user = new User({
            username,
            password:hashedPassword,
            role
        });

        await user.save();
        res.status(201).json({message: 'User Created successfully Login Now'});

    }catch(err){
        res.status(501).json({message:"Internal Server Error"});
    }
}

const listUsers = (req,res)=>{
    console.log("Listing User");
}
module.exports = {
    login,
    register,
    listUsers
}