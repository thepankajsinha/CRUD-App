import express from 'express';
import {createUser, deleteUser, getAllUser, getUserByID, updateUser} from '../Controller/userController.js';

const route = express.Router();

route.post('/createUser', createUser);
route.get('/getAllUsers', getAllUser);
route.get('/getUser/:id', getUserByID);
route.put('/updateUser/:id', updateUser);
route.delete('/deleteUser/:id', deleteUser);

export default route;