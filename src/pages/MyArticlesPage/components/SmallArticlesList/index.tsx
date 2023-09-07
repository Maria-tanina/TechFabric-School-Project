import { FC } from "react";
import { Grid } from "@mui/material";
import { IArticle } from "@customTypes/articleTypes";
import { ArticlesInfo } from "../ArticlesInfo";
import { SmallArticleCard } from "../SmallArticleCard";
import { WriteMoreCard } from "../WriteMoreCard";

interface IArticleListProps {
  articles: IArticle[];
}

export const MyArticlesList: FC<IArticleListProps> = ({ articles }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item sm={12}>
        <ArticlesInfo />
      </Grid>
      {articles?.map((article) => <SmallArticleCard article={article} />)}
      <WriteMoreCard />
    </Grid>
  );
};
