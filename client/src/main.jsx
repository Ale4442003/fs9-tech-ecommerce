import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' //Provider =componente contenitore
//ftutti i componenti che si trovano al suo interno possono usare le funzioni di react router 
//( come Link, usenavigate, route), senza doverle importare o passare tramite props
//dà la navigazione in tutta l'app
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import App from './App.jsx'

import './index.css'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App /> {/* = app.jsx e rappresenta tutti i componenti perchè al suo gli inseriremo tutti*/}
        <ToastContainer />
    </BrowserRouter>
)
