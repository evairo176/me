export interface UserInterface {
  id: string;
  email: string;
  username: string;
  fullname: string;
  password: string;
  bio?: string;
  profile_img?: string;
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
  blogs: BlogInterface[];
}

export interface BlogInterface {
  id: string;
  authorId: string;
  slug: string;
  title: string;
  image: string;
  des?: string;
  content: any[]; // You might want to define a more specific type for content.
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
}

export interface TagInterface {
  id: string;
  name: string;
}
