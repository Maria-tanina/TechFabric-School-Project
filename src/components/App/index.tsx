import Layout from "@components/Layout";
import { Route, Routes } from "react-router-dom";
import SignUp from "@pages/SignUp";
import {
  ADMIN_USER_LIST_PATH,
  ARTICLE_PATH,
  ARTICLES_FOR_REVIEW_PATH,
  CONTACT_US_PATH,
  CREATE_POST_PATH,
  FAVORITES_PATH,
  FORGOT_PASSWORD_PATH,
  HOME_PATH,
  LOGIN_PATH,
  MY_ARTICLES_PATH,
  PASSWORD_RECOVERY_PATH,
  REGISTRATION_CONFIRM_PATH,
  RULES_PATH,
  SIGNUP_PATH,
  SUCCESS_CONFIRMATION_PATH,
  SUCCESS_PUBLISHED_PATH,
  UPDATE_ARTICLE_PATH,
} from "@constants/paths";
import RegistrationConfirm from "@pages/RegistrationConfirm";
import SuccessConfirmation from "@pages/SuccessConfirmation";
import { Login } from "@pages/Login";
import { ForgotPassword } from "@pages/ForgotPassword";
import { PasswordRecovery } from "@pages/PasswordRecovery";
import NotFound from "@pages/NotFound";
import RequireAuth from "../RequireAuth";
import HomePage from "@pages/Home";
import { NotificationProvider } from "@hooks/useNotification";
import { ArticlePage } from "@pages/ArticlePage";
import AdminUserList from "@pages/AdminUserList";
import { Role } from "@constants/roles";
import RulesPage from "@pages/Rules";
import ContactUs from "@pages/ContactUs";
import CreatePostPage from "@pages/CreatePostPage";
import { PublishSuccessPage } from "@pages/PublishSuccess";
import MyArticlesPage from "@pages/MyArticlesPage";
import { FullHeightSpinner } from "@components/Spinner";
import { useGetUsersInfoQuery } from "@services/authApi";
import { useGetSportTypesQuery } from "@services/articlesApi";
import ArticlesForReviewPage from "@pages/ArticlesForReviewPage";
import { UpdateArticlePage } from "@pages/UpdateArticlePage";
import { useAppSelector } from "../../store";
import { selectIsLogin } from "@features/user/usersSelectors";
import { LikedArticlePage } from "@pages/LikedArticlePage";

const App = () => {
  const isLogin = useAppSelector(selectIsLogin);

  const { isLoading: isUserInfoLoading } = useGetUsersInfoQuery(undefined, {
    skip: !isLogin,
  });

  const { isLoading: isSportTypesLoading } = useGetSportTypesQuery();

  if (isUserInfoLoading || isSportTypesLoading) {
    return <FullHeightSpinner size={110} />;
  }

  return (
    <div>
      <Layout>
        <NotificationProvider>
          <Routes>
            <Route path={HOME_PATH} element={<HomePage />} />

            <Route path={LOGIN_PATH} element={<Login />} />

            <Route path={SIGNUP_PATH} element={<SignUp />} />

            <Route path={FAVORITES_PATH} element={<LikedArticlePage />} />

            <Route
              path={`${ARTICLE_PATH}/:articleId`}
              element={<ArticlePage />}
            />

            <Route path={RULES_PATH} element={<RulesPage />} />

            <Route
              path={SUCCESS_PUBLISHED_PATH}
              element={<PublishSuccessPage />}
            />

            <Route
              path={REGISTRATION_CONFIRM_PATH}
              element={<RegistrationConfirm />}
            />

            <Route
              path={SUCCESS_CONFIRMATION_PATH}
              element={<SuccessConfirmation />}
            />

            <Route path={FORGOT_PASSWORD_PATH} element={<ForgotPassword />} />

            <Route
              path={PASSWORD_RECOVERY_PATH}
              element={<PasswordRecovery />}
            />

            <Route path={CONTACT_US_PATH} element={<ContactUs />} />

            <Route path="*" element={<NotFound />} />

            {/*protected routes*/}
            <Route
              element={
                <RequireAuth
                  redirectTo={HOME_PATH}
                  allowedRoles={[Role.SuperAdmin]}
                />
              }
            >
              <Route path={ADMIN_USER_LIST_PATH} element={<AdminUserList />} />

              <Route
                path={ARTICLES_FOR_REVIEW_PATH}
                element={<ArticlesForReviewPage />}
              />
            </Route>

            <Route
              element={
                <RequireAuth
                  redirectTo={HOME_PATH}
                  allowedRoles={[Role.Author]}
                />
              }
            >
              <Route path={CREATE_POST_PATH} element={<CreatePostPage />} />
              <Route path={MY_ARTICLES_PATH} element={<MyArticlesPage />} />
            </Route>

            <Route
              element={
                <RequireAuth
                  redirectTo={HOME_PATH}
                  allowedRoles={[Role.Author, Role.SuperAdmin]}
                />
              }
            >
              <Route
                path={`${UPDATE_ARTICLE_PATH}/:articleId`}
                element={<UpdateArticlePage />}
              />
            </Route>
          </Routes>
        </NotificationProvider>
      </Layout>
    </div>
  );
};

export default App;
