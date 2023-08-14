import Layout from "@components/Layout";
import {Route, Routes} from "react-router-dom";
import SignUp from "@pages/SignUp";
import {REGISTRATION_CONFIRM_PATH, SIGNUP_PATH, SUCCESS_CONFIRMATION_PATH} from "@constants/paths";
import RegistrationConfirm from "@pages/RegistrationConfirm";
import SuccessConfirmation from "@pages/SuccessConfirmation";

const App = () => {
  return(
    <div>
      <Layout>
        <Routes>
          <Route path={SIGNUP_PATH} element={<SignUp/>}/>
          <Route path={REGISTRATION_CONFIRM_PATH} element={<RegistrationConfirm/>}/>
          <Route path={SUCCESS_CONFIRMATION_PATH} element={<SuccessConfirmation/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App;
