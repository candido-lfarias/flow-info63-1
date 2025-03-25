const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());



app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

app.get('/api/rafael-6585019', async (req, res) => {
	
  const fs = require('fs').promises;
  const data =await fs.readFile('rafael.txt','utf-8')

  console.log(data)
  
  res.json({ data });
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});