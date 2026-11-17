export interface Book {
  id: string;
  title: string;
  author: string;
  status: 'read' | 'reading' | 'to-read';
  rating: number;  
  note?: string;
  picture:string;
}