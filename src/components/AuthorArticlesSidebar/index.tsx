import { StyledSidebarHeader } from "@components/SidebarHeader";
import {
  HeaderSidebarArticle,
  Line,
  SidebarArticle,
  TagsWrapper,
} from "@components/AuthorArticlesSidebar/style";
import { ArticleTag } from "@components/ArticleTag";
import { nanoid } from "@reduxjs/toolkit";

export const AuthorArticlesSidebar = () => {
  return (
    <>
      <StyledSidebarHeader>
        More from <span>Harold Painless</span>
      </StyledSidebarHeader>
      <SidebarArticle>
        <HeaderSidebarArticle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </HeaderSidebarArticle>
        <TagsWrapper>
          <ArticleTag tag="#sfdfsdf" link="/" key={nanoid()} />
          <ArticleTag tag="#sfdfsdf" link="/" key={nanoid()} />
          <ArticleTag tag="#sfdfsdf" link="/" key={nanoid()} />
          <ArticleTag tag="#sfdfsdf" link="/" key={nanoid()} />
        </TagsWrapper>
        <Line />
      </SidebarArticle>
      <SidebarArticle>
        <HeaderSidebarArticle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </HeaderSidebarArticle>
        <TagsWrapper>
          <ArticleTag tag="#sfdfsdf" link="/" key={nanoid()} />
          <ArticleTag tag="#sfdfsdf" link="/" key={nanoid()} />
          <ArticleTag tag="#sfdfsdf" link="/" key={nanoid()} />
          <ArticleTag tag="#sfdfsdf" link="/" key={nanoid()} />
        </TagsWrapper>
        <Line />
      </SidebarArticle>
    </>
  );
};
