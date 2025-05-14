const express = require('express');
const router = express.Router();

const messages = [];

// Shared event data
const events = [
  {
  title: "Community Hackathon",
  date: "2025-05-25", 
  location: "Durban, South Africa",
  image: "/images/hackathon.jpg"
},

  {
    title: "Tech Conference 2025",
    date: "2025-06-20",
    location: "Johannesburg, South Africa",
    image: "/images/techConference.jpg"
  },
  {
    title: "Startup Pitch Day",
    date: "2025-07-10",
    location: "Cape Town, South Africa",
    image: "/images/PitchDay.jpg"
  },
  {
    title: "AI & ML Workshop",
    date: "2025-08-15",
    location: "Pretoria, South Africa",
    image: "/images/AIandMLWorkshop.jpg"
  }
];

// Home page – Upcoming Events This Month
router.get('/', (req, res) => {
  const currentMonth = new Date().getMonth();
  const upcomingEvents = events.filter(event => new Date(event.date).getMonth() === currentMonth);
  res.render('pages/home', { upcomingEvents });
});

//  About page
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

  res.render('pages/about', { team });
});

// Events page
router.get('/events', (req, res) => {
  res.render('pages/events', { events });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('pages/contact');
});

// Handle contact form submission
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (name && email && message) {
    messages.push({ name, email, message, date: new Date().toLocaleString() });
    res.redirect('/thankyou');
  } else {
    res.status(400).send("All fields are required.");
  }
});

// Thank You page
router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou');
});

module.exports = router;
