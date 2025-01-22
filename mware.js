const express = require('express');
const middleware = require('./middleware/admin');
const app = express();
const route = express.Router();

route.use(middleware);
// app.use(middleware);

app.get('/',middleware,(req, resp)=>{
    resp.send('Home page');
})
app.get('/about',(req, resp)=>{
    resp.send('About us page'); 
});


route.get('/user',(req, resp)=>{
    resp.send('Users page'); 
});
route.get('/contact',(req, resp)=>{
    resp.send('Contact us page'); 
});

app.use(route);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})