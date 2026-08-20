export interface IQuestion {
  id: number;
  title: string;
  description?: string;
  tag: string;
  answer?: string;
  code?: string;
  list?: boolean;
}
