import Jwt from "jsonwebtoken";
export const isAuthenticated=(req,res,next)=>{
    
    const {token}=req.cookie;
    console.log(token);
    if(!token)
    return res.status(404).json({
        success:false,
        manage:"Login First",
    });
    const decoded=Jwt.verify(token,process.env.Jwt_SECRET)
}