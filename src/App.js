// import logo from './logo.svg';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FromTemp from "./components/Formtemp";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mood, setMood] = useState("light");
  const [btnText, setbtnText] = useState("Light Mood");

  const toggleMood = () => {
    if (mood === "light") {
      setMood("dark");
      setbtnText("Dark Mood");
      document.body.style.backgroundColor = "#0a124e";
      showAlert("Dark mood has been enable", "success");

      setInterval(() => {
        document.title = "TextUtils in Amaing mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install Now";
      }, 1500);
    } else {
      setMood("light");
      setbtnText("Light Mood");
      document.body.style.backgroundColor = "white";
      showAlert("Light mood has been enable", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <Router>
        <Navbar
          mode={mood}
          toggleMood={toggleMood}
          btnText={btnText}
          title={"TextUtils"}
          home={"Home"}
          about={"About"}
          drop={"Dropdown"}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact
            path="/"
            element={
              <div className="container">
                <FromTemp
                  showAlert={showAlert}
                  heading={"Enter the Text to Analyze below"}
                  mode={mood}
                />
              </div>
            }
          />
          <Route exact path='/about' element={<About mode={mood} />}/>
          
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
