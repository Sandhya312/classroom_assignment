const express = require("express");
const authenticateToken  = require('../middleware/auth');

const router = express.Router();
 const {
    getAllAssignment,
    addNewAssignment,
    updateAssignment,
    deleteAssignment
} = require('../controllers/assignmentController');

router.get('/',getAllAssignment);

router.post('/create-assignment',authenticateToken,addNewAssignment);

router.put('/update-assignment/:id',authenticateToken,updateAssignment);

router.delete('/delete-assignment/:id',authenticateToken,deleteAssignment);

module.exports = router;