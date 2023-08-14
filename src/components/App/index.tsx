import Layout from "@components/Layout";
import {Route, Routes} from "react-router-dom";
import SignUp from "@pages/SignUp";
import {LOGIN_PATH, SIGNUP_PATH} from "@constants/paths";
import {Login} from "@pages/Login";

const App = () => {
  return(
    <div>
      <Layout>
        <Routes>
          <Route path={SIGNUP_PATH} element={<SignUp/>}/>
          <Route path={LOGIN_PATH} element={<Login/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App;
