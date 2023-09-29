import { ArticleCard } from "@components/ArticleCard";
import { ArticlesWrapper } from "./style";
import { IArticle } from "@customTypes/articleTypes";
import { useAppSelector} from "../../store";
import { selectIsLogin } from "@features/user/usersSelectors";
import { useEffect } from "react";
import {
  useGetFavoritesQuery,
  useGetLikesPostQuery,
} from "@services/favoritesApi";

interface ArticleListProps {
  articles: IArticle[] | undefined;
}

export const ArticleList = ({ articles }: ArticleListProps) => {
  const isLogin = useAppSelector(selectIsLogin);
  const { refetch: likesRefetch } =  useGetLikesPostQuery(undefined, {
    skip: !isLogin,
  });
  const { refetch: favoritesRefetch } = useGetFavoritesQuery(undefined, { skip: !isLogin }
  );
    useEffect(() => {
        if(isLogin){
            likesRefetch()
            favoritesRefetch()
        }
    }, [isLogin]);
  return (
    <ArticlesWrapper>
      {articles?.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </ArticlesWrapper>
  );
};

export default ArticleList;
