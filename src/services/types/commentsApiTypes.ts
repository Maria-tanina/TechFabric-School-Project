export interface IPostCommentParams {
  articleId: string;
  content: string;
}

export interface IDeleteCommentParams {
  commentId: string;
}

export interface IGetCommentsParams {
  articleId: string;
  pageNumber: number;
  pageSize: number;
}

export interface IGetCommentsResponse {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  comments: IComment[];
}

export interface IComment {
  author: {
    id: string;
    firstName: string;
    lastName: string;
  };
  commentId: string;
  content: string;
  createdAt: string;
}
