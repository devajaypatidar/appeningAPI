const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

// Controller function to handle user login
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
        // Generate JWT token
        const token = jwt.sign({
            _id:user._id, 
            role:user.role, 
        }, process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({token : token});

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"});

    }
}


// Controller function to handle user registration

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

//controller function for list User (accessible only to admin)
const listUsers = async (req,res)=>{
    if(req.user.role !== 'admin'){
        return res.status(403).json({message:"Forbidden, You don't have the access of this data"});
    }

    const users = await User.find().select('-password').lean();
    return res.status(200).json(users)

}
module.exports = {
    login,
    register,
    listUsers
}