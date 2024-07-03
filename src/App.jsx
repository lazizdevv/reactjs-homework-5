import { Routes,Route } from "react-router-dom";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import { Users } from "./pages/users/users";
import { UsersDetail } from "./pages/users/users-detail";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { PageNotFound } from "./pages/not-found";

export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users" element={<Users/>}/>
      <Route path="/users/:id" element={<UsersDetail/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}