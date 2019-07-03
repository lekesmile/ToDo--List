const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');


const app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

let items = ['React',' Scss', 'Node Js'];

app.get('/', (req, res) => {
 let today = new Date ();
 let options = {
     weekday: 'long',
     day : 'numeric',
     month: 'long'
 };

 let day = today.toLocaleDateString('en-FI', options);
    res.render('list', { kindOfDay: day, newListItems:items});

    
});

app.post('/', (req, res) =>{
   let item = req.body.newItem;
   items.push(item);
   res.redirect('/');
});




const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Our server is running on port ${port}`));


