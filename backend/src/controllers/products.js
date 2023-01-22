const product = require("../models/").products

const login = async (req, res) => {
    const user = await product.findOne({ where : {email : req.body.email }});
 if(user){
    if(req.body.password == user.password) {
        password_valid = true
    }
    else {
        password_valid = false
    }
    if(password_valid){
        
        res.status(200).json({status: "Success!"});
    } else {
      res.status(400).json({ error : "Password Incorrect" });
    }
  
  }else{
    res.status(404).json({ error : "User does not exist" });
  }
}

const register = (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    return product.create({email:email, password:password}).then(product => res.status(200).send(product))
    .catch(error => res.status(404).send(error))

}

const getUser = async (req, res) => {
    console.log(req.body)
    const user = await product.findOne({ where : {email : req.body.email }});
    if(user) {
        res.status(200).json({email: user.email})
        // Si hubiera más parametros, se mostrarian más parametros
        return {email: user.email}
    }
    }

module.exports = {
    getUser,
    register,
    login,
}