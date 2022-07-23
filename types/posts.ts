interface IPost {
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  thumbnail?: string;
}

export interface IPosts {
  posts: IPost[];
}
