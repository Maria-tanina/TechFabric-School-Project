import Layout from "@components/Layout";
import { Route, Routes } from "react-router-dom";
import SignUp from "@pages/SignUp";
import {
  ARTICLE_PATH,
  ADMIN_USER_LIST_PATH,
  FORGOT_PASSWORD_PATH,
  HOME_PATH,
  LOGIN_PATH,
  PASSWORD_RECOVERY_PATH,
  REGISTRATION_CONFIRM_PATH,
  SIGNUP_PATH,
  SUCCESS_CONFIRMATION_PATH,
  RULES_PATH,
  CONTACT_US_PATH,
  SUCCESS_PUBLISHED_PATH,
  CREATE_POST_PATH,
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

const App = () => {
  return (
    <div>
      <Layout>
        <NotificationProvider>
          <Routes>
            <Route path={HOME_PATH} element={<HomePage />} />

            <Route path={LOGIN_PATH} element={<Login />} />

            <Route path={SIGNUP_PATH} element={<SignUp />} />

            <Route path={ARTICLE_PATH} element={<ArticlePage />} />

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
                  redirectTo={LOGIN_PATH}
                  allowedRoles={[Role.SuperAdmin]}
                />
              }
            >
              <Route path={ADMIN_USER_LIST_PATH} element={<AdminUserList />} />
            </Route>

            <Route
              element={
                <RequireAuth
                  redirectTo={LOGIN_PATH}
                  allowedRoles={[Role.Author, Role.SuperAdmin]}
                />
              }
            >
              <Route path={CREATE_POST_PATH} element={<CreatePostPage />} />
            </Route>
          </Routes>
        </NotificationProvider>
      </Layout>
    </div>
  );
};

export default App;
