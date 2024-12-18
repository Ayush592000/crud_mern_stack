const UserModel = require('../models/user');

const storeUserData = async (req, res) => {
  try {
    console.log('Receiving data:', req.body);
    const { name, email, age } = req.body;

    const newUser = await UserModel.create({
      name: name,
      email: email,
      age: age,
    })

    res.status(201).json({
      message: 'sucessfully get data',
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Internal Server Error did not get data',
      success: false,
    });
  }
};
const fetchData = async (req, res) => {
  try {
    const data = await UserModel.find()
    console.log(data);
    res.status(201).json({
      message: 'sucessfully get data',
      success: true,
      data: data
    });
  } catch (error) {
    res.status(400).json({
      message: 'Internal Server Error did not get data',
      success: false,
    });
  }
}

const singleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UserModel.findById({ _id: id })
    // console.log(data);
    res.status(201).json({
      // message: 'sucessfully get single User',
      // success: true,
      data: data
    });
  } catch (error) {
    res.status(400).json({
      message: 'Internal Server Error did not get data',
      success: false,
    });
  }
}


const updatedUser = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  console.log(id, "", updateData)
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found', success: false });
    }

    res.status(200).json({ message: 'User updated successfully', success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', success: false, error });
  }
};


const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id)
    const deletedData = await UserModel.deleteOne({ _id: id });
    res.status(201).json({
      message: 'sucessfully deleted data',
      success: true,
      data: deletedData
    });
  } catch (error) {
    res.status(400).json({
      message: 'Internal Server Error did not find data',
      success: false,
    });
  }
}

module.exports = {
  storeUserData,
  fetchData,
  singleUser,
  updatedUser,
  deleteUser
};
