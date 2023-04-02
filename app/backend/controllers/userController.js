import asyncHandler from 'express-async-handler'

// @desc    get Users
// @route   Get /users
// @access  Private
export const getUsers = asyncHandler(async (req, res) => {
    res.json({ message: 'Get users'})
})

// @desc    get Users by id
// @route   Get /users/:id
// @access  Private
export const getUsersByID = asyncHandler(async (req, res) => {
    res.json({ message: `Get user ${req.params.id}`})
})

// @desc    set Users
// @route   Post /users
// @access  Private
export const postUsers = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.json({ message: 'Set users'})
})

// @desc    Update Users
// @route   Put /users
// @access  Private
export const putUsers = asyncHandler(async (req, res) => {
    res.json({ message: `Update user ${req.params.id}`})
})

// @desc    delete Users
// @route   Delete /users
// @access  Private
export const deleteUsers = asyncHandler(async (req, res) => {
    res.json({ message: `Delete user ${req.params.id}`})
})