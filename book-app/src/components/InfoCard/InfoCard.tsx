 import styled from '@emotion/styled';
import type { Book } from '../../type/type';
import Bookis from '../../assets/icons/books.png';
import Chek from '../../assets/icons/check.png';
import Bbookmark from '../../assets/icons/bookmark.png';

const InfoCardWrapper = styled.div`
  padding: 16px;
  background-color: #1f1a25;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const StatGroup = styled.div`
  display: flex;
  gap: 24px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.25rem;
  color: #fffefe;
`;

const StatLabel = styled.span`
  font-size: 0.875rem;
  color: #ffffff;
`;

const Img = styled.img`
  width: 40px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;   /* содержимое прижато к правому краю */
  align-self: flex-start;  /* колонка прижата к верху карточки */
  gap: 6px;                /* отступ между картинкой и надписью */
`;

const RemainingText = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

interface InfoCardProps {
  books: Book[];
}

export function InfoCard({ books }: InfoCardProps) {
  const total = books.length;
  const readCount = books.filter((book) => book.status === 'read').length;

  return (
    <InfoCardWrapper>
      <StatGroup>
        <StatItem>
          <StatValue>{total}</StatValue>
          <StatLabel>Всего книг</StatLabel>
          <Img src={Bookis} alt="" />
        </StatItem>
        <StatItem>
          <StatValue style={{ color: '#2ea869' }}>{readCount}</StatValue>
          <StatLabel>Прочитано</StatLabel>
          <Img src={Chek} alt="" />
        </StatItem>
      </StatGroup>

      <RightColumn>
        <Img src={Bbookmark} alt="" />
        <RemainingText>Осталось: {total - readCount}</RemainingText>
      </RightColumn>
    </InfoCardWrapper>
  );
}
