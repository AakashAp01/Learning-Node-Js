module.exports = middleware = (req,resp,next)=>{
    if(req.query.role !=='admin'){
        resp.send('You are not authorized to access this page (require admin role)');
    }else{
        next();
    }
} 