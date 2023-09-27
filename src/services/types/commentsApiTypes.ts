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
