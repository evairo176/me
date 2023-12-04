export interface UserInterface {
  id: string;
  email: string;
  username: string;
  name: string;
  password: string;
  bio?: string;
  image?: string;
  youtube?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  github?: string;
  website?: string;
  total_posts: number;
  total_reads: number;
  createdAt: Date;
  updatedAt: Date;
  Blog: BlogInterface[];
}

export interface BlogInterface {
  user: UserInterface;
  id: string;
  authorId: string;
  slug: string;
  title: string;
  image: string;
  des?: string;
  content: string; // You might want to define a more specific type for content.
  Tags: TagInterface[];
  Author: UserInterface;
  Categories: CategoryInterface;
  // total_likes: number;
  // total_comments: number;
  // total_reads: number;
  // total_parent_comments: number;
  draft: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryInterface {
  id: string;
  name: string;
  slug: string;
  Blog: BlogInterface[];
}

export interface TagInterface {
  id: string;
  name: string;
  blogCount: number;
}

interface Replay {
  id: string;
  content: string;
  User: UserInterface;
  createdAt: string;
  updatedAt: string;
  Replay: Replay[];
}

export interface CommentInterface {
  id: string;
  content: string;
  User: UserInterface;
  createdAt: string;
  updatedAt: string;
  Replay: Replay[];
}
