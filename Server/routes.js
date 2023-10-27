import { Router } from 'express'; // Import the Router from 'express'
import { adduser, alluser, deleteUser, updateClient } from './controller/CrudController.js';


const router = Router(); // Create an instance of the Router

router.post('/adduser',adduser);
router.get('/alluser',alluser);
router.post('/deleteuser',deleteUser);
router.post('/update/:id',updateClient);

export default router; // Export the router instance