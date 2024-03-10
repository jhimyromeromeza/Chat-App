import jwt from "jsonwebtoken"


export const generateToken = (payload, res) => {
    try {
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '15d'
        })

        res.cookie("token", token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true, //prevenir ataques cross-site scripting
            sameSite: "strict" //CSRF ATTACKS CROSS SITE REQUEST FORGERY ATTACK
        })

    }catch (error) {
        console.log('error generate token: ', error)
    }

}