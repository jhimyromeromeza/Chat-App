import User from "../models/auth.models.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (confirmPassword !== password) {
      res.status(400).json("password don't match");
    }
    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "username already exists" });
    }

    //HASH PASSWORD HERE

    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt);


    //https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: passwordHash,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if(newUser) {

      generateToken({id: newUser._id}, res);

      const userSave = await newUser.save();

      res.status(201).json({
        id: userSave._id,
        fullName: userSave.fullName,
        userName: userSave.userName,
        gender: userSave.gender,
        profilePic: userSave.profilePic,
      });
    }else {
        res.status(400).json({error: 'invalid user data'})
    }
    
  } catch (error) {
    console.log("error in singup controller: ", error.message);
    res.status(500).json({ error: "internal error" });
  }
};

export const login =async (req, res) => {
  try {
    const {userName, password} = req.body;
    const userFound = await User.findOne({userName});
    if(!userFound) {
      console.log('usuario no encontrado');
      return res.status(404).json({Error: 'user not fount'});
    }
    const isMatchPassword = await bcrypt.compare(password, userFound.password);
    if(!isMatchPassword) {
      console.log('password incorrect');
      return res.status(404).json({error: 'password incorrect'})
    }

    generateToken({id: userFound._id}, res);

    res.status(200).json({
      id: userFound._id,
      fullName: userFound.fullName,
      userName: userFound.userName,
      profilePic: userFound.profilePic
    })


  }catch (error) {
    console.log("error in login: ", error.message);
    res.status(500).json({error: "internal error"});
  }


};

export const logout = (req, res) => {
  try {
    res.cookie("token", "", {expires: new Date(0)})
    console.log("logout succel");
    res.status(200).json({message: 'logget successfully'});
  }catch (error) {
    console.log('Error in logout', error.message);
    res.status(500).json({error: 'internal error'});
  }
};
