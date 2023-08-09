import Layout from "@components/Layout";
import {Route, Routes} from "react-router-dom";
import SignUp from "@pages/SignUp";

const App = () => {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </Layout>
        </div>
    )
}
export default App;
