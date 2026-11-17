import { useState } from 'react';
import './App.css';
import { BookList } from './components/BookingList/BookList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { InfoCard } from './components/InfoCard/InfoCard';
import { books as initialBooks } from './data/book.ts';
import type { Book } from './type/type.ts';
import { BookForm } from './components/BookForm/BookForm.tsx';
 

function App() {
   
  const [books, setBooks] = useState<Book[]>(initialBooks);
 



const deleteBook = (id: string) => {
  setBooks((prev) => prev.filter((book) => book.id !== id));
};

const addBook = (newBook: Book) => {
  setBooks((prev) => [...prev, newBook]);
};

  return (
    <>
      <Header />
      <h1>My Book</h1>
      <BookForm  addBook={addBook}/>
      <BookList books={books} deleteBook={deleteBook} />
      
      <InfoCard books={books} />
      <Footer />
    </>
  );
}

export default App;
