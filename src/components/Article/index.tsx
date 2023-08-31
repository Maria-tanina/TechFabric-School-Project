import {
  ArticleBody,
  ArticleCommentWrapper,
  ArticleMainHeader,
  ArticleMainImage,
  ArticleSubject,
  ArticleTags,
  ArticleWrap,
  CommentBody,
  CommentMessage,
  CountComments,
} from "@components/Article/style";
import { ArticleTag } from "@components/ArticleTag";
import { nanoid } from "@reduxjs/toolkit";
import { CommentForm } from "@components/CommentForm";
import ProfileInfo from "@components/ProfileInfo";

export const Article = () => {
  return (
    <ArticleWrap>
      <ArticleMainImage src="https://www.rankone.com/content/Images/hero-bg.jpg" />
      <ArticleBody>
        <ArticleMainHeader>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sed sapien tempor, mollis est tempus, tincidunt enim.
        </ArticleMainHeader>
        <ArticleTags>
          <ArticleTag tag="#sport" link="/" key={nanoid()} />
        </ArticleTags>
        <ArticleSubject>
          <span>Subject: Automotive</span>
        </ArticleSubject>
        {/*ARTICLE HTML*/}
      </ArticleBody>
      <ArticleCommentWrapper>
        <CountComments>Comments: 4</CountComments>
        <CommentForm />
        <CommentBody>
          <ProfileInfo userName="Harold Painless" subtitle="October 17, 2023" />
          <CommentMessage>
            Ut eu ullamcorper risus. Morbi venenatis, ligula vulputate volutpat
            hendrerit, ipsum tortor vestibulum ex, sed euismod mauris augue
            posuere eros. Duis egestas, est in consequat ultricies, lacus dui
            condimentum neque, eu cursus urna mauris nec arcu. Fusce fringilla
            egestas dolor, et molestie nisi congue convallis.
          </CommentMessage>
        </CommentBody>
      </ArticleCommentWrapper>
    </ArticleWrap>
  );
};
