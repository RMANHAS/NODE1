import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt';

export const showDataController = async(req,res)=>{
  //  res.send("dshow data working....")
   try {
    const users =await userModel.find();
    res.status(200).send({
      success:true,
      message:"list of all users",
      users,
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error while adding new user ...",
      error,
  })
}
}

export const postapiController = async (req, res) => {
  // res.send("this is post api is working now ...............apt ");
  try {
    const { name, email, password } = req.body;
    // res.send(name, email, phone);

    if (!name) return res.status(404).send({ message: "name is required" });
    else if (!email)
      return res.status(404).send({ message: "email is required" });
    // else if (!phone || phone.length !== 10)
    // return res.status(404).send({ message: "phone number is required" });
     
      else if (!password )
      return res.status(404).send({message:"password is required"})
    else {
      //adding new user
      const user = new userModel({
        name,
        email,
        password
      });

      const d= await user.save();
      console.log(d)
    
      res.status(201).send({
        success: true,
        message: "new user added successfully",
        user,
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error while adding new user ...",
      error,
    });
  }
};

export const getApiController= async(req,res)=>{
  try {
    const users =await userModel.find();
    res.status(200).send({
      success:true,
      message:"list of all users",
      users,
    })
  } catch (error) {
    
  }
}
export const deleteapiController = async (req, res) => {
  // res.send("this is deleye")
  try {
    const { _id } = req.params;
    const user = await userModel.findByIdAndDelete({ _id });
    res.status(200).send({
      success: true,
      message: "user is deleted successfully",
      user,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "user is  not deleted successfully",
    });
  }
};
// get single user by params to see the data
export const getSingleapiController = async (req, res) => {
  // res.send("this is hello ")
  try {
    const { _id } = req.params;
    const user = await userModel.findById({ _id });
    res.status(200).send({
      success: true,
      message: "user shown data  successfully",
      user,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "user is  not deleted successfully",
    });
  }
};
export const updateapiController = async (req, res) => {
  try {
    const { _id } = req.params;
    console.log(req.params._id);
    const user = await userModel.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
        },
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "update successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "update  not successfully",
      error,
    });
  }
};
