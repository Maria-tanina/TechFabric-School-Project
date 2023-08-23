import Layout from "@components/Layout";
import { Route, Routes } from "react-router-dom";
import SignUp from "@pages/SignUp";
import {
  ADMIN_USER_LIST_PATH,
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
import AdminUserList from "@pages/AdminUserList";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path={HOME_PATH} element={<HomePage />} />

          <Route path={LOGIN_PATH} element={<Login />} />

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

          <Route path={PASSWORD_RECOVERY_PATH} element={<PasswordRecovery />} />

          <Route path="*" element={<NotFound />} />

          <Route path={ADMIN_USER_LIST_PATH} element={<AdminUserList/>}/>

          {/*protected routes*/}
          <Route element={<RequireAuth redirectTo={LOGIN_PATH} />}>

          </Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
