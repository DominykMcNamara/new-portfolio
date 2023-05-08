import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import ExampleComponent from './components/Component.tsx' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ExampleComponent />
  </React.StrictMode>,
)
