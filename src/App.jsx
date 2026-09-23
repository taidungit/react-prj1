import './components/todo/todo.css'
import Header from './components/layout/header.jsx'
import Footer from './components/layout/footer.jsx'
import { Outlet } from 'react-router-dom'
function App() {


return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
