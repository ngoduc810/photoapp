import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Photo/pages/Main/Main.js';
import AddEdit from './Photo/pages/AddEdit/AddEdit';
import { Provider } from 'react-redux';
import store from './app/store';
// import  firebase from 'firebase';


// const config = {
//   apiKey: 'AIzaSyAXXEIQg-uHbkkF-H5bPnrhdckg3xxkPd0',
//   authDomain: 'photo-app-30899.firebaseapp.com'
// };
// firebase.initiallizeApp(config);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path= {'/'} element= {<Main />}/>
            <Route path='/photo' element={<AddEdit />} />
            <Route path='/:photoId' element={<AddEdit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
