const express = require('express');
const router = express.Router();

const messages = [];

router.get('/', (req, res) => {
  res.render('pages/home');
});

// router.get('/about', (req, res) => {
//   res.render('pages/about');
// });
router.get('/about', (req, res) => {
  const team = [
    {
      name: 'Tiaan Wessels',
      role: 'Backend Developer - Building HTTP Server (Node.js), Setting up routing with Express, Importing/Exporting modules, setting up document structure'
    },
    {
      name: 'Trevor Tanaka Mutendera',
      role: 'Frontend Developer - Gathering media, creating HTML pages with components, applying styling with CSS'
    },
    {
      name: 'Ryan Payne',
      role: 'Data Manager - Setting up database and sample data, SQL, form creation, and URL configuration'
    },
    {
      name: 'Wynand du Plessis',
      role: 'Document Manager - Documenting variables, functions, callbacks, ensuring clean and understandable code'
    }
  ];

  res.render('pages/about', { team }); // 👈 pass the team array to the EJS view
});



router.get('/events', (req, res) => {
  res.render('pages/events');
});

router.get('/contact', (req, res) => {
  res.render('pages/contact');
});

// ✅ POST route to handle form submissions
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (name && email && message) {
    messages.push({ name, email, message, date: new Date().toLocaleString() });
    res.redirect('/thankyou'); // ✅ Redirect to thankyou page
  } else {
    res.status(400).send("All fields are required.");
  }
});

router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou');
});

module.exports = router;
