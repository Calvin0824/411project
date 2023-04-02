import express from 'express'
const router = express.Router()
import { getUsers, getUsersByID, postUsers, putUsers, deleteUsers } from '../controllers/userController.js'

router.route('/').get(getUsers).post(postUsers)
router.route('/:id').get(getUsersByID).put(putUsers).delete(deleteUsers)

export default router