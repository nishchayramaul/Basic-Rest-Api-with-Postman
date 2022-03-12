const express =  require('express');
const app = express();

const PORT =  3000;

app.get('/post' , (req, res)=>(res.send({

  
"id" : "1911981170",
"name" :"nishchay"


})) );

app.listen(PORT, () =>(console.log(`Server is running successfully`)));