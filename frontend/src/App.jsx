import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import UserProfile from "./pages/UserProfile"
import AdminPanelPage from "./pages/AdminPanelPage"
import AddUser from "./admin/AddUser"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage title={'HOME PAGE'}/>}></Route>
        <Route Component={LoginPage} path='/login'/>
        <Route Component={SignupPage} path='/register'/>
        <Route Component={UserProfile} path='/profile'/>
        <Route path="/admin" element={<AdminPanelPage title={'ADMIN PAGE'}/>}></Route>=
        <Route Component={AddUser} path='/adduser'/>



      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
