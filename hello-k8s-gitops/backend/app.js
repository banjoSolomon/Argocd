const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!', time: new Date().toISOString() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend listening on ${port}`));
