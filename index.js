const express = require('express'),
fs = require('fs'),
path = require('path'),

app = express(),
port = 3000;

require('dotenv').config();

fs.readdirSync('./routes').forEach(file => {
  const fileName = path.basename(file, '.js'),
  routePath = `/${fileName}`;

  if (fs.statSync(`./routes/${file}`).isDirectory()) {
    const folderPath = `./routes/${file}`,
    filesInFolder = fs.readdirSync(folderPath);

    filesInFolder.forEach(subFile => {
      const subFileName = path.basename(subFile, '.js'),
      subRoutePath = `/${fileName}/${subFileName}`,
      subRoute = require(`${folderPath}/${subFile}`);

      app.use(subRoutePath, subRoute);
    });
  } else {
    const route = require(`./routes/${file}`);
    app.use(routePath, route);
  }
});

app.listen(port, () => console.log(`http://localhost:${port}`));