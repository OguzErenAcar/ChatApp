import PrivateRoute from './Components/PrivateRoute';
 import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import { Route, Routes  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Style/style.css"
function App() {
  
  const height=(window.screen.height*83.25)/100

  return (
    <div  className="App bg-dark" style={{height:height}}>
      <Routes>
        <Route path="/Chat"
        element={
          <PrivateRoute>
            <ChatPage/>
          </PrivateRoute>
        }></Route>
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
