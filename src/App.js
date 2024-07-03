import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Header/header";
import Signup from "./SignUp/signup";
import Signin from "./SignIn/signin";
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Header />} > </Route>
        <Route path="/signup" element={<Signup />} > </Route>
          <Route path="/signin" element={<Signin />} > </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
