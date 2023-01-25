
// @desc    Register new user 
// @route   POST /api/user/ 
// @access  public
const registerUser = (req,res) => { 
    res.json({message: 'Register a new user'})
}

// @desc    Authenticate a user 
// @route   POST /api/user/login 
// @access  public
const loginUser = (req,res) => { 
    res.json({message: 'Login a user'})
}

// @desc    Get user data 
// @route   GET /api/user/me 
// @access  public
const getMe = (req,res) => { 
    res.json({message: 'User data display'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}