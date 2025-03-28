import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './context/Context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'

// clerk key ---
const clerk_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!clerk_key){
  throw new Error("Clerk key not found.");
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider>
      <ClerkProvider appearance={{baseTheme: dark,}} publishableKey={clerk_key}>
        <App />
      </ClerkProvider>
    </ContextProvider>
  </BrowserRouter>
)
