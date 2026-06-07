import jwt from 'jsonwebtoken'

export const getToken=async (userId)=>{
     try {
        const token=jwt.sign({userId}, Process.env.JWT_SECRET,{expireIn:"7d"})
                console.log(token)

        return token
     } catch (error) {
        console.log(error)
     }
}