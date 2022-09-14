import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {privateRouter, publicRouter} from "./utils/router";
import {AuthContext} from "./context/authContext";
import {useEffect, useState} from "react";
import Loader from "./UI/Loader/Loader";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])
  return (
      <AuthContext.Provider value={{
        isAuth, setIsAuth
      }}>
        <div className="App">
          <BrowserRouter>
            <Navbar/>
            {isLoading
                ? <Loader/>
                : isAuth
                    ?
                    <Routes>
                      {privateRouter.map(router => <Route path={router.path} element={<router.element/>}/>)}
                      <Route path='/*' element={<Navigate to='/posts'/>}/>
                    </Routes>
                    :
                    <Routes>
                      {publicRouter.map(router => <Route path={router.path} element={<router.element/>}/>)}
                      <Route path='/*' element={<Navigate to='/login'/>}/>
                    </Routes>
            }
          </BrowserRouter>
        </div>
      </AuthContext.Provider>
  )
}

export default App;
