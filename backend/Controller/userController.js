import User from '../Model/userModel.js';

//create user
export const createUser = async (req, res) => {
    try {
        const {email} = req.body;
        const userData = await User.findOne({email}); 

        if (userData) {
            return res.status(400).json({ message: 'User already exists' });
        }
        else{
            const newUser = await User.create(req.body);
            return res.status(201).json(newUser);
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//get all users
export const getAllUser = async (req, res) => {
    try {
        const userData = await User.find({}); 

        if (!userData) {
            return res.status(404).json({ message: 'Users data not found' });
        }
        else{
            return res.status(200).json(userData);
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

//get user by id
export const getUserByID = async (req, res) => {
    try {
        const {id} = req.params;
        const userData = await User.findById(id);

        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
        else{
            return res.status(200).json(userData);
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//update user
export const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const userData = await User.findById(id);

        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
        else{
            const updateUserData = await User.findByIdAndUpdate(id, req.body);
            return res.status(204).json(updateUserData);
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//delete user
export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const userData = await User.findById(id);

        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
        else{
            await User.findByIdAndDelete(id, req.body);
            return res.status(204).json("User deleted successfully");
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}