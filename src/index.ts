import * as express from 'express'
import * as bodyParser from 'body-parser'

import MoviesDB from './resources/MoviesDB'
import MoviesService from "./resources/MoviesService";

const app = express();
const moviesService = new MoviesService();

app.use(bodyParser.json());

app.post('/movies', (req: express.Request, res: express.Response) => {
  moviesService.create(req.body)
    .then(movie => res.json(movie));
});

app.get('/movies', (req: express.Request, res: express.Response) => {
  moviesService.findMany()
    .then(movies => res.json(movies))
});

app.listen(5000, () => {
  console.log('server started on port 5000')
});