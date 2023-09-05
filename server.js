const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const fs = require('fs'); // this engine requires the fs module like we did Saturday

// make sure you change the references of madeline and hypatia to "portal"
app.engine('portal', (filePath, options, callback) => {
  // define the view engine called portal
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<div>" + options.content + "</div>")
      .replace('#url#', options.url)
    return callback(null, rendered);
  });
});
app.set('views', './views');
app.set('view engine', 'portal');


app.get('/0', (req, res) => {
  res.render('template2', {
    title: 'Joke',
    message: 'Day 1!',
    content: 'Work jokes',
    url: 'https://pun.me/jokes/funny/funny-joke-about-work.jpg'
  });
});


app.get('/1', (req, res) => {
  res.render('template2', {
    title: 'Joke',
    message: 'Day 2!',
    content: 'Knock Knock',
    url: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-07/knock-knock-jokes-6-swl-230720-50a55c.jpg'
  });
});


app.get('/2', (req, res) => {
  res.render('template2', {
    title: 'Joke',
    message: 'Day 3!',
    content: 'Birthday',
    url: 'https://hips.hearstapps.com/hmg-prod/images/funny-birthday-jokes4-1647533709.jpg'
  });
});

app.get('/3', (req, res) => {
  res.render('template2', {
    title: 'Joke',
    message: 'Day 4!',
    content: 'The most underated Rapper in the pizza game',
    url: ''
  });
});



app.get('/4', (req, res) => {
  res.render('template2', {
    title: 'Joke',
    message: 'Day 5!',
    content: 'The most underated Rapper in the pizza game',
    url: ''
  });
});



app.get('/5', (req, res) => {
  res.render('template2', {
    title: 'Joke',
    message: 'Day 6!',
    content: 'The most underated Rapper in the pizza game',
    url: ''
  });
});



app.get('/6', (req, res) => {
  res.render('template2', {
    title: 'Joke',
    message: 'Day 7!',
    content: 'The most underated Rapper in the pizza game',
    url: ''
  });
});



app.get('/7', (req, res) => {
  res.render('template2', {
    title: 'Joke',
    message: 'Day 8!',
    content: 'The most underated Rapper in the pizza game',
    url: ''
  });
});



app.get('/8', (req, res) => {
  res.render('template2', {
    title: 'Joke',
    message: 'Day 9!',
    content: 'The most underated Rapper in the pizza game',
    url: ''
  });
});



app.get('/9', (req, res) => {
  res.render('template2', {
    title: 'Money',
    message: 'Get rich!',
    content: 'Money Over Love !',
    url: 'https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481_1280.jpg'
  });
});






















app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// // Week 11 Day 2 Lab Review

// //Greetings
// app.get('/greetings/:name', (req, res) => {
//   res.send(`Hello there, ${req.params.name}!!!`);
// });

// // Tip Calculator
// app.get('/tip/:total/:tipPercentage', (req, res) => {
//   const { total, tipPercentage } = req.params;
//   const tip = (parseInt(total) * parseInt(tipPercentage)) / 100;
//   const result = tip + parseInt(total);

//   res.send(
//     `<h1>The tip will be $${tip}. Resulting a total bill cost of $${result}</h1>`
//   );
// });

// app.get('/magic/:question', (req, res) => {
//   const answers = [
//     'It is certain',
//     'It is decidedly so',
//     'Without a doubt',
//     'Yes definitely',
//     'You may rely on it',
//     'As I see it yes',
//     'Most likely',
//     'Outlook good',
//     'Yes',
//     'Signs point to yes',
//     'Reply hazy try again',
//     'Ask again later',
//     'Better not tell you now',
//     'Cannot predict now',
//     'Concentrate and ask again',
//     "Don't count on it",
//     'My reply is no',
//     'My sources say no',
//     'Outlook not so good',
//     'Very doubtful',
//   ];

//   const random = answers[Math.floor(Math.random() * answers.length)];

//   res.send(`<h3>${req.params.question}?</h3> <br/> <h1>${random}</h1>`);
// });

