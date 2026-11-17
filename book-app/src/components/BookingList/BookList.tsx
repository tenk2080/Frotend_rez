 
import styled from '@emotion/styled';
import type { Book } from '../../type/type';
import { BookCard } from '../BookCard/BookCard';

const Wrapper = styled.section`
  padding: 20px 0;
  overflow-x: auto;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
`;

const Title = styled.h2`
  margin: 0 0 16px 0;
  font-weight: 600;
  color: #ffffff;
`;

const List = styled.div`
color: #fdfbfb;
  border: none;
  
  display: flex;
  gap: 16px;
`;

 
const EmptyMessage = styled.div`
  padding: 40px 20px;
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  max-width: 300px;
  margin: 0 auto;

  h4 {
    margin-bottom: 8px;
    color: #333;
  }

  p {
    margin: 0;
    line-height: 1.5;
  }
`;

interface BookListProps {
  books: Book[];
  deleteBook: (id: string) => void;
}

export function BookList({ books, deleteBook }: BookListProps) {
  // проверка длины массива
  if (books.length === 0) {
    return (
      <Wrapper>
        <Title>Book List</Title>
        <EmptyMessage>
          <h4>Библиотека пуста 😔</h4>
          <p>Добавьте первую книгу, чтобы начать вести учёт прочитанного.</p>
        </EmptyMessage>
      </Wrapper>
    );
  }

 
  return (
    <Wrapper>
      <Title>Book List</Title>
      <List>
        {books.map((book) => (
          <BookCard 
            key={book.id} 
            book={book} 
            deleteBook={deleteBook} 
          />
        ))}
      </List>
    </Wrapper>
  );
}
