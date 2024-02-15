module.exports = {

    getAllUsers: (req, res) => {
        if(req.body && req.body.isAuth){
            res.json({"msg": "Got all users with auth."})

        }else {

            res.json({"msg": "Got all users."})
        }
    },

    addUser: (req, res) => {
        if(req.body && req.body.isAuth){
            res.json({"msg": "user added with auth."})

        }else {
            res.json({"msg": "user added."})
        }
    }
}