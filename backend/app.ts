import express from 'express';

const app: express.Application = express();

const port = 3000;

app.get('/', (_req, _res) => {
    _res.send("Hello, World!");
});

app.listen(port, () => {
    console.log(`Server is up at: http://localhost:${port}/`);
});
