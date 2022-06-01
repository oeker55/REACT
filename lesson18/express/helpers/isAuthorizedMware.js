



const isAuthorizedMware = (req, res, next)=>{

    const isAuthorized = false
    if(isAuthorized){
        next()

    }else{
        res.send("User is not Athorized Please Login !!!")
    }

}


module.exports = isAuthorizedMware