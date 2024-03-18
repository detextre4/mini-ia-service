const app = require('express')(),
fs = require('fs'),
port = 3000;

require('dotenv').config();

fs.readdirSync('./routes').forEach(file => {
  const route = require(`./routes/${file}`),
  path = `/${file.split('.')[0]}`;

  app.use(path, route);
});

app.listen(port, () => console.log(`http://localhost:${port}`));