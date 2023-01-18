// @desc    Get goals 
// @route   GET /api/goals 
// @access  private

const getGoals = (req,res) => { 
    res.status(200).json({msg:'Get goals'})
}

// @desc    Set goal 
// @route   POST /api/goals 
// @access  private

const setGoal = (req,res) => { 
    res.status(200).json({msg:'Create goal'})
}

// @desc    Update goal
// @route   PUT /api/goals/id 
// @access  private

const updateGoal = (req,res) => { 
    res.status(200).json({msg:`Update goals ${req.params.id}`})
}

// @desc    Delete goal
// @route   DELETE /api/goals/id
// @access  private

const deleteGoal = (req,res) => { 
    res.status(200).json({msg:`Delete goals ${req.params.id}`})
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}