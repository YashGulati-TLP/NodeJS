const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('', (req, res) => {
    res.send('hello this is home page')
});
app.get('/profile', (req, res) => {
    const persons = [{ name: 'yash', email: 'yash@1212.com' }, {
        name:'raghav',email:'raghav@1212.com'
    }, { name: 'karan', email: 'karan@1212.com' }, { name: '3456789', email: '234567@1212.com' }
    ];
    res.render('profile',{persons});
});
app.get('/about', (req, res) => {
    res.send('hello this is about page')
});
app.listen(4500);