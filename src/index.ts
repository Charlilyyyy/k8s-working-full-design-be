import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/pi', (req: Request, res: Response) => {
  res.json({ pi: Math.PI });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 