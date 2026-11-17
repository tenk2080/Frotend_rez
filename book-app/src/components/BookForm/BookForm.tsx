 import { useState, type FormEvent } from 'react';
import styled from '@emotion/styled';
import type { Book } from '../../type/type';
import { books, books as initialBooks} from '../../data/book';
import { BookValidation } from './BookValidation';

 
 

const Text = styled.input`
  width: 40%;
  max-width: 400px;  
  padding: 8px 12px;
  box-sizing: border-box;
  border: 1px solid #0a0606;
  border-radius: 4px;
`;

const Submit = styled.button`
  width: 20%;
  color: #00ff00;
  max-width: 400px;  
  padding: 8px 12px;
  box-sizing: border-box;
  border: 1px solid #7bff00;
  border-radius: 4px;
 
`;
const Sub = styled.button`
  width: 20%;
  color: #fd160e;
  max-width: 400px;  
  padding: 8px 12px;
  box-sizing: border-box;
  border: 1px solid #ff1414;
  border-radius: 4px;
  background-color: #fc0000;

  
  color: #000000;

  border: none;  
  border-radius: 4px;
`;

const SubmitShek = styled.button`
  width: 20%;
  color: #00ff00;
  max-width: 400px;  
  padding: 8px 12px;
  box-sizing: border-box;
  border: 1px solid #7bff00;
  border-radius: 4px;
 
  background-color: #00ff00;

  
  color: #636161;

  border: none;  
 
`;

 const ValidationText = styled.p`
  color: #d9534f;
  font-size: 10px;
`;
const ValidationTextYes = styled.p`
  color: #25e000;
  font-size: 10px;
`;
 interface AddBookProps {
   
  addBook: (newBook:Book) => void; // Функция  добавления
}

 export function BookForm({addBook}:AddBookProps) {
  const [cancellation, setCancellation] = useState<number>(1);
  const [userStatus, setUserStatus] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [draft, setDraft] = useState<Partial<Book>>({});
  const validation = BookValidation(userStatus, inputValue);
 console.log(draft);
   
  
console.log(books);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      if (userStatus !== 0 && !validation.ok) return;


     
    if (userStatus === 1) setDraft((prev) => ({ ...prev, title: inputValue }));
    if (userStatus === 2) setDraft((prev) => ({ ...prev, author: inputValue }));
    if (userStatus === 3) setDraft((prev) => ({ ...prev, status: inputValue as Book['status'] }));
    if (userStatus === 4) setDraft((prev) => ({ ...prev, rating: Number(inputValue) || 0 }));
    if (userStatus === 5) setDraft((prev) => ({ ...prev, note: inputValue }));
    if (userStatus === 6) {
      const newBook: Book = {
        id: String(books.length + 1),
        title: draft.title ?? '',
        author: draft.author ?? '',
        status: draft.status ?? 'to-read',
        rating: draft.rating ?? 0,
        note: draft.note ?? '',
        picture: inputValue, 
      };
        addBook(newBook);

        }

  setUserStatus((prev) => (prev < 6 ? prev + 1 : 0));
  setCancellation(1);
  setInputValue('');
};
 
  const handleCancel = () => {
    setUserStatus(0);
    setCancellation(0);
    setInputValue('');
    setDraft({});  
  };

      return (
    <form onSubmit={handleSubmit}>   
       
      {(userStatus === 0 ||  cancellation === 0)&& (
        <>
        
          <SubmitShek type="submit">Начать добавление</SubmitShek>
        </> 
      )}

     
      { userStatus === 1 && (
        <>
         
          <Text 
            type="text" 
            placeholder="Введите название книги" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
           
          <ValidationText>{validation.message}</ValidationText>
          
          <Submit type="submit">Добавить книгу</Submit>
          <Sub type="reset" onClick={handleCancel}>отмена</Sub>
        </>
      )}

      { userStatus === 2 && (
        <>
         
          <Text 
            type="text" 
            placeholder="Введите автора книги" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <ValidationText>{validation.message}</ValidationText>
          <Submit type="submit">Добавить автора</Submit>
          <Sub type="reset" onClick={handleCancel}>отмена</Sub>
        </>
      )}

      { userStatus === 3 && (
        <>
         <p>читал</p>
          <select
            onChange={(e) => setInputValue(e.target.value)}
             value={inputValue}  
            >
            <option value="to-read">в планах</option>
            <option value="reading">в процессе</option>
            <option value="read">Прочитанно</option>
          </select>
          <ValidationText>{validation.message}</ValidationText>
          <Submit type="submit">укажите статус</Submit>
          <Sub type="reset" onClick={handleCancel}>отмена</Sub>
        </>
      )}

      { userStatus === 4 && (
        <>
         
          <Text 
            type="text" 
            placeholder="от 1 до 5" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <ValidationText>{validation.message}</ValidationText>
          <Submit type="submit">укажите рейтинг</Submit>
          <Sub type="reset" onClick={handleCancel}>отмена</Sub>
        </>
      )}

      { userStatus === 5 && (
        <>
         
          <Text 
            type="text" 
            placeholder="..." 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <ValidationText>{validation.message}</ValidationText>
          <Submit type="submit">добавь описание</Submit>
          <Sub type="reset" onClick={handleCancel}>отмена</Sub>
        </>
      )}

       { userStatus === 6 && (
        <>
         
          <Text 
            type="text" 
            placeholder="на обложку" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <ValidationText>{validation.message}</ValidationText>
          <Submit type="submit">добавь  ссылку</Submit>
          <Sub type="reset" onClick={handleCancel}>отмена</Sub>
        </>
      )}
    </form>
  );
} 
        












//else if(statusForm == 1){return (
  //  <form onSubmit={handleSubmit}>
      //
    //</form>
 // );
 //   }
 // event.preventDefault();
     //if (statusForm === 0) {
   //     setStatusForm(1);
       // userRegist =+ 1;
  //};
  //   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
   
   //     event.preventDefault();
    //     setUserStatus((prev) => prev + 1);
     //    setInputValue('');
    //     setCancellation((prev)=> prev +1);
    //     cancel('');
     //    if(setCancellation == 0){
      //      setUserStatus(0);
            
     //    }