const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());



app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

app.get('/api/candido-lfarias', (req, res) => {
	
  res.json({ version: '1.0.0' });
});

 app.get('/api/heitor', async (req, res) => {
	
  const fs = require('fs').promises;
  const data = await fs.readFile('heitor-4465564.txt', 'utf8');
  const obj = await JSON.stringify(data)
  console.log(obj);
  res.json(obj);

});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});