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
module.exports = {
  storeUserData,
  fetchData
};
