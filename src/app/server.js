
const express  = required('express');
const app = express();
const appName = 'trabalho-angular';
const outputPath = `${__dirname}/dist/${appName}`;

app.use(express.static(outputPath));

app.get('/*', (req, res) => {
  res.sendFile(`${outputPath}/index.html`);
});

app.listen(process.env.PORT);
