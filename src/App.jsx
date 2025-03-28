import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './pages/Sidebar/Sidebar'
import Main from './pages/Main/Main'
import { SignIn, SignUp, useUser } from '@clerk/clerk-react'
import Scholarship from './pages/Scholarship/Scholarship'
import StudentAIAssistant from './pages/Home/home'
import Courses from './pages/Courses/Courses'
import Profile from './pages/Profile/Profile'
import Profile2 from './pages/Profile/Profile2'
import Resume from './pages/Resume/Resume'
import Doubt from './pages/Doubt/Doubt'
import Practice from './pages/Practice/Practice'
import FeedbackForm from './pages/FeedbackForm/FeedbackForm'

const App = () => {
  const { isSignedIn } = useUser();

  return (
    <>
      {isSignedIn? <Sidebar /> : ""}
      <Routes>
        <Route path="/scholarship" element={<Scholarship/>}/>
        <Route path="/login" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp />} />
        {isSignedIn? <Route path="/" element={<Main />} /> : <Route path="/" element={<StudentAIAssistant />} />}
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/doubt" element={<Doubt/>} />
        <Route path="/practice" element={<Practice/>} />
        <Route path="/feedback" element={<FeedbackForm/>} />
      </Routes>
    </>
  )
}

export default App 