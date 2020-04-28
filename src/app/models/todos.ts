export interface Todo {
  id?: number;
  name: string;
  description: string;
  status: 'important' | 'freetime' | 'family';
  userID: number;
  categoryID: number
}