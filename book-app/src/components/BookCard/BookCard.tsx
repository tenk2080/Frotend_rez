 import styled from '@emotion/styled';
import type { Book } from '../../type/type';
import Delete from  "../../assets/icons/delete.png";
 


const Card = styled.article`
  min-width: 200px;
  background-color: #3b4b27;
  border: 2px solid #000000;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  scroll-snap-align: start;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: #d9534f;
  padding: 4px;
  line-height: 1;
  transition: color 0.2s;

  &:hover {
    color: #c9302c;
    opacity: 0.8;
  }
`;
const Img = styled.img`
   width:30px;
`;

const ImageContainer = styled.div`
  width: 100%;
  background-color: #000000;
  border-radius: 8px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NoImageText = styled.span`
  color: #888;
  font-size: 14px;
  text-align: center;
`;

const BookTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 500;
`;

const Meta = styled.p`
  margin: 4px 0;
  color: #000000;
  font-size: 0.9rem;
`;

const Status = styled.p`
  margin: 4px 0;
  color: #030202;
  font-size: 0.85rem;
  text-transform: capitalize;
`;

const Rating = styled.p`
  margin: 8px 0 4px 0;
  font-weight: 600;
  color: #ffe713;
`;
 
const Note = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #a0a397;
  line-height: 1.4;
  text-align: center;

  /* защита от вылезания за карточку */
  max-width: 100%;
  overflow-wrap: break-word;  /* переносит длинные слова */
  word-break: break-word;      
 
  overflow-wrap: break-word;
  word-break: break-word;
 
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

 
interface BookCardProps {
  book: Book; // Одна книга
  deleteBook: (id: string) => void; // Функция удаления
}

export function BookCard({ book, deleteBook }: BookCardProps) {
  return (
    <Card>
    
      <DeleteButton
        type="button"
        onClick={() => deleteBook(book.id)}
        aria-label={`Удалить книгу "${book.title}"`}
      > 
        <Img src={Delete} alt="" />
      </DeleteButton>

      <ImageContainer>
        {book.picture ? (
          <BookImage src={book.picture} alt={`Обложка: ${book.title}`} />
        ) : (
          <NoImageText>Нет обложки</NoImageText>
        )}
      </ImageContainer>

      <BookTitle>{book.title}</BookTitle>
      <Meta>Автор: {book.author}</Meta>
      <Status>Статус: {book.status}</Status>

      {book.rating > 0 && (
        <Rating>Рейтинг: ★ {book.rating}</Rating>
      )}

      {book.note && (
        <Note>{book.note}</Note>
      )}
    </Card>
  );
}
