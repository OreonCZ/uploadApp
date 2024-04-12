import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Upload from "./Upload/Upload"

export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/upload" element={<Upload></Upload>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}