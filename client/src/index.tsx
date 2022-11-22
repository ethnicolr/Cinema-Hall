import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/tailwind.css'

import App from './App'
const container = document.querySelector('#root') as Element

const root = createRoot(container)
root.render(<App />)
