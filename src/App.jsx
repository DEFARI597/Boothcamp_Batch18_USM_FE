import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/Layout/DashboardLayout'
import Usercard from './components/Card/Usercard'
import AddUserPage from './user-add/page'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <DashboardLayout>
          <Usercard />
        </DashboardLayout>
      } />
      <Route path="/user-add" element={<AddUserPage />} />
    </Routes>
  )
}

export default App
