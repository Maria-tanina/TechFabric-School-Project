import { LeftSidebar } from "@components/LeftSidebar";
import NavigationMenu from "@components/NavigationMenu";
import { MainContent } from "@components/MainContent";
import { useGetMyArticlesQuery } from "@services/articlesApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Grid, LinearProgress } from "@mui/material";
import { getErrorMessage } from "@helpers/errorHandlers";
import { ErrorMessage, MyArticlesPageWrapper } from "./style";
import { ArticlesInfo } from "@components/ArticlesInfo";
import { WriteMoreCard } from "./components/WriteMoreCard";
import { SmallArticleCard } from "@components/SmallArticleCard";

const MyArticlesPage = () => {
    const {
        data: articles = [],
        isLoading,
        isError,
        error,
    } = useGetMyArticlesQuery();

    return (
        <MyArticlesPageWrapper>
            <LeftSidebar>
                <NavigationMenu />
            </LeftSidebar>

            <MainContent>
                {isLoading ? (
                    <LinearProgress />
                ) : isError ? (
                    <ErrorMessage>
                        {getErrorMessage((error as FetchBaseQueryError)?.data) ||
                            "Articles not found"}
                    </ErrorMessage>
                ) : (
                    <Grid container direction="row" alignItems="stretch" spacing={3}>
                        <Grid item sm={12}>
                            <ArticlesInfo showLikes={true} articles={articles} />
                        </Grid>
                        {articles?.map((article) => (
                            <SmallArticleCard article={article} key={article.title} />
                        ))}
                        <WriteMoreCard />
                    </Grid>
                )}
            </MainContent>
        </MyArticlesPageWrapper>
    );
};

export default MyArticlesPage;
