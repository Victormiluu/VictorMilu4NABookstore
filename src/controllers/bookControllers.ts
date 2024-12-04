import { Request, Response } from 'express';
import { BookRepository } from '../repositories/bookRepository';

const bookRepository = new BookRepository();

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookRepository.getAllBooks();
    res.status(200).json(books); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Erro ao buscar livros.' }); 
  }
};

export const addBook = async (req: Request, res: Response) => {
  const { name, image, price } = req.body;

  try {
    
    const book = await bookRepository.addBook(name, image, price);
    res.status(201).json(book); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Erro ao adicionar o livro.' }); 
  }
};


export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const book = await bookRepository.deleteBook(Number(id));
    res.status(200).json(book); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Erro ao deletar o livro.' }); 
  }
};

export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, image, price } = req.body;

  try {
    const book = await bookRepository.updateBook(Number(id), name, image, price);
    res.status(200).json(book); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Erro ao atualizar o livro.' }); 
  }
};
