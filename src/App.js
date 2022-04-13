import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import RandomUser from "./components/RandomUser";
import Footer from "./components/footer/Footer";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    axiosUser();
  }, []);

  const axiosUser = async () => {
   const response = await axios("https://randomuser.me/api/")
    // console.log(response);
    setUser(response.data.results);
  };

  return (
    <div className="App">
      <RandomUser user={user} axiosUser={axiosUser}/>
      <Footer/>
    </div>
  );
}

export default App;
