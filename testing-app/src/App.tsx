import { BrowserRouter, Route, Routes } from "react-router"
import { TestsPage } from "./page/TestPage"
import { StatisticPage } from "./page/StatisticPage"
import { ErrorPage } from "./page/ErrorPage"
import { AdminPage } from "./page/AdminPage"
import { ProfilePage } from "./page/ProfilePage"
import { LoginPage } from "./page/LoginPage"
import { StepOne } from "./page/StepOne"

function App() {
  return (
    //<h1>My Testing app</h1>
        <BrowserRouter>
      <Routes>
        <Route index element={<StepOne/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/tests" element={<TestsPage/>} />
        <Route path="/statistic" element={<StatisticPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/error" element={<ErrorPage/>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
