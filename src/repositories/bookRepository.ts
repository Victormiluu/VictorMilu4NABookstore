import { Pool } from 'pg';
import pool from '../config/database';
import { Book } from '../models/bookModel';

export class BookRepository {
  private pool: Pool = pool;

  async getAllBooks(): Promise<Book[]> {
    try {
      const { rows } = await this.pool.query<Book>('SELECT * FROM books');
      return rows;
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
      throw new Error('Não foi possível buscar os livros.');
    }
  }


  async addBook(name: string, image: string, price: number): Promise<Book> {
    const query = `
      INSERT INTO books (name, image, price)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    try {
      const { rows } = await this.pool.query<Book>(query, [name, image, price]);
      return rows[0];
    } catch (error) {
      console.error('Erro ao adicionar o livro:', error);
      throw new Error('Não foi possível adicionar o livro.');
    }
  }

  async deleteBook(id: number): Promise<Book> {
    const query = `
      DELETE FROM books
      WHERE id = $1
      RETURNING *;
    `;

    try {
      const { rows } = await this.pool.query<Book>(query, [id]);
      return rows[0];
    } catch (error) {
      console.error('Erro ao excluir o livro:', error);
      throw new Error('Não foi possível excluir o livro.');
    }
  }
  async updateBook(id: number, name: string, image: string, price: number): Promise<Book> {
    const query = `
      UPDATE books
      SET name = $1, image = $2, price = $3
      WHERE id = $4
      RETURNING *;
    `;

    try {
      const { rows } = await this.pool.query<Book>(query, [name, image, price, id]);
      return rows[0];
    } catch (error) {
      console.error('Erro ao atualizar o livro:', error);
      throw new Error('Não foi possível atualizar o livro.');
    }
  }
}