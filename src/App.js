import "./App.css";
import Register from "./Component/Register";
import Login from "./Component/Log in";
const isRegister=false;
function App() {
  return (
    <div className="App container card shadow-lg p-3 mb-5 bg-body rounded mt-5 " style={{width: '26rem'}}>
      <h2 className="text-primary fs-1 fw-bold text-center my-2">
        {isRegister? 'Sign in' : 'Create account'}
      </h2>
      {isRegister? <Login/>: <Register><Login/></Register>}
    <div className="text-center">
        <button className="btn btn-success btn-lg mt-2 w-50">
        {isRegister? 'Log in' : 'Register'}
        </button>
    </div>
    </div>
  );
}

export default App;
