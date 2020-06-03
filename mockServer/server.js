const express = require('express');
const cors = require('cors')

const utils = require('./utils/utils');

const PORT = 5001;
const app = express();

app.use(cors())

app.get('/grid', async (req, res, next) => {
  const sendInfoData = require('./mocks/grid.json');

  await utils.delay(1000);

  res.send(sendInfoData);

  next();
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
