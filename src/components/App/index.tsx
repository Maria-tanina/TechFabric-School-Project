import Layout from "@components/Layout";
import {Route, Routes} from "react-router-dom";
import SignUp from "@pages/SignUp";
import {SIGNUP_PATH} from "@constants/paths";

const App = () => {
  return(
    <div>
      <Layout>
        <Routes>
          <Route path={SIGNUP_PATH} element={<SignUp/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App;
