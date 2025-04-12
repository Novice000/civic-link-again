import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import { Suspense } from 'react'
import CivicLoader from './components/shared/loader.tsx'
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<CivicLoader />}>
      <App />
    </Suspense>
    <Toaster richColors duration={3000} position="top-right" />
  </StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// )
