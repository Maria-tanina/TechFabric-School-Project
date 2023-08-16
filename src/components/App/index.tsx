import Layout from "@components/Layout";
import { Route, Routes } from "react-router-dom";
import SignUp from "@pages/SignUp";
import {
  FORGOT_PASSWORD_PATH,
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

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
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
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
