import express from 'express';
import { getAllBooks, addBook,deleteBook,updateBook } from '../controllers/bookControllers';

const router = express.Router();

router.get('/', getAllBooks);
router.post('/add', addBook);
router.delete('/delete/:id', deleteBook);
router.put('/update/:id', updateBook);

export default router;  