import Layout from "@components/Layout";
import { Route, Routes } from "react-router-dom";
import SignUp from "@pages/SignUp";
import {
  FORGOT_PASSWORD_PATH,
  HOME_PATH,
  LOGIN_PATH,
  PASSWORD_RECOVERY_PATH,
  REGISTRATION_CONFIRM_PATH,
  SIGNUP_PATH,
  SUCCESS_CONFIRMATION_PATH,
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
import LoggedIn from "@components/LoggedIn";

const App = () => {
  return (
    <div>
      <Layout>
        <NotificationProvider>
          <Routes>
            <Route path={HOME_PATH} element={<HomePage />} />

            <Route element={<LoggedIn redirectTo={HOME_PATH} />}>
              <Route path={LOGIN_PATH} element={<Login />} />
            </Route>

            <Route path={SIGNUP_PATH} element={<SignUp />} />

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

            <Route path="*" element={<NotFound />} />

            {/*protected routes*/}
            <Route element={<RequireAuth redirectTo={LOGIN_PATH} />}></Route>
          </Routes>
        </NotificationProvider>
      </Layout>
    </div>
  );
};

export default App;
