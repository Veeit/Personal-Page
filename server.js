const express=require('express');
const path = require('path');
const app=express();
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, './index.html'));
})
app.use('/image', express.static('image'))
const port =8081;
app.listen(port,()=>{
console.log(`App running on ${port}`);
})