
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
          <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />
          <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
          <Route path='/' element={<Landing />}/>
          <Route path='*' element={<ErrorPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
function Layout() {
  return (
    <>
      <header>
      <Link to='/' >Allen</Link>
      |
      <Link to='/neet/online-coaching-class-11' >Class 11</Link>
      |
      <Link to='/neet/online-coaching-class-12' >Class 12</Link>
      </header>
      <div style={{height:"90vh"}}>
      <Outlet />
      </div>
      <footer>Footer</footer>
    </>
  )
}

function ErrorPage() {
  return (
    <div>Sorry page not found</div>
  )
}

function Landing() {
  return <div>
    Welcome to Allen!
  </div>
}

function Class11Program() {
  return <div>
    NEET programs for Class 11th
  </div>
}

function Class12Program() {
  const navigate = useNavigate();
  function RedirectUser() {
    navigate('/');
  }
  return <div>
    NEET programs for Class 12th
    <button onClick={RedirectUser}>Go back to landing page</button>
  </div>
}


export default App
