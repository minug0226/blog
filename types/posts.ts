interface IPost {
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  thumbnail?: string;
}

export interface IPostItemProps {
  post: IPost;
}

export interface IPosts {
  posts: IPost[];
}
