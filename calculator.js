const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/bmiCalculator', (req, res) => {
  res.sendFile(`${__dirname}/bmiCalculator.html`);
});

app.post('/', (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send(`Result is ${result}`);
});

app.post('/bmiCalculator', (req, res) => {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var bmi = weight / (height * height);

  res.send(`Your BMI is ${Math.round(bmi)}`);
});

app.listen(port, () => {
  console.log(`Calculator web app started on port ${port}`);
});
