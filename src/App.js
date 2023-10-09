// import { Route, Routes } from "react-router-dom"
// import Header from "./YouTubeClone/layout/header/Header"
// import Footer from "./YouTubeClone/layout/footer/Footer"
// import Feed from "./YouTubeClone/pages/Feed"
// import SearchResult from "./YouTubeClone/pages/SerachResult"
// import VideoDetails from "./YouTubeClone/pages/VideoDetails"



// import { useState } from "react"
// const App = () => {
//   const [toggle, setToggle] = useState(true)
//   const sideBarToggle = () => {
//     setToggle(!toggle)
//   };
//   return (
//     <>
//         <Header action={sideBarToggle} />
//       <main className="px-5 ">
//       <Routes>
//         <Route path="/" element={<Feed state={toggle} />} />
//         <Route path="/video/:id" element={<VideoDetails />} />
//         <Route path="/serachResult/:searchQuery" element={<SearchResult state={toggle} />} />
//       </Routes>
//       </main>
//       <Footer />
//     </>
//   )
// }
// export default App
// import { Route, Routes } from "react-router-dom"
// import Header from './practiceReact/Header'
// import Home from "./practiceReact/TodoApp/Todos"; 
// import PasswordGeneretor from "./practiceReact/PasswordGen/PasswordGenerator";
// import Form from "./practiceReact/Form/Form";
// const App = () => {
//   return (<> 
//   <header className="px-4 py-3">
//       <Header />
//   </header>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/passwordGeneretor" element={<PasswordGeneretor />} />
//         <Route path="/form" element={<Form />} />
//       </Routes> 
//   </>)
// }

// export default App
import React, { useEffect } from "react";
import Home from "./Movie_web_app/Pages/Home/Home";
import Details from "./Movie_web_app/Pages/Details/Details";
import PageNotFind from "./Movie_web_app/Pages/404/PageNotFind";
import SearchResult from "./Movie_web_app/Pages/SearchResult/SearchResult";
import Explore from "./Movie_web_app/Pages/Explore/Explore";
import Header from "./Movie_web_app/Componants/Header/Header";
import Footer from "./Movie_web_app/Componants/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./Movie_web_app/store/movieSlice";
import { ApiMovieData } from "./Movie_web_app/utils/api"
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => (
    fetchApiConfig()
  ), [])
  const fetchApiConfig = () => {
    ApiMovieData("/configuration").then((response) => {
      const url = {
        backdrop: response.images.secure_base_url + "original",
        poster: response.images.secure_base_url + "original",
        profile: response.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url))
    })
  }
  return (
    <>
      <header className="header ">
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFind />} />
      </Routes>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}
export default App;


