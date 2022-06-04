import express from 'express';
import cors from 'cors';

const corsOptions = {
  origin: "webchattkaczyk.netlify.app",
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}

const app = express();
app.use(cors(corsOptions));

export default app;
