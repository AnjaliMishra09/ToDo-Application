import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx"
//import Appbar from "./Appbar.jsx";
//import AddCourse from "./AddCourse.jsx";

function App() {

    return (
        <div style={{width: "100vw",
            height: "100vh",
            backgroundColor: "#eeeeee"}}
        >
          <Signup></Signup>
        </div>
    );
}

export default App;
