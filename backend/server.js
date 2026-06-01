const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    message: 'Portfolio API is running',
    author: 'Grace Joachim',
    status: 'success'
  });
});

app.get('/api/skills', (req, res) => {
  res.json({
    skills: [
      'SQL',
      'Power BI',
      'Tableau',
      'Python',
      'Pandas',
      'Data Visualization',
      'Statistics',
      'Stakeholder Communication'
    ]
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required' });
  }

  console.log('New contact request:', { name, email, message });

  res.json({
    status: 'success',
    message: `Thanks ${name}, your message has been received.`
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Portfolio backend listening on port ${port}`);
});
