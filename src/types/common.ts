export interface LoginFormInput {
  identifier: string;
  password: string;
}

export interface SignupFormInput {
  email: string;
  username: string;
  password: string;
}

export interface Post {
  _id: string;
  posted: string;
  content: string;
  user: PostUser;
  noOfComments: number;
  emotion: string;
}

export interface PostUser {
  _id: string;
  firstName: string;
  lastName: string;
  image: string;
  phone: string;
}