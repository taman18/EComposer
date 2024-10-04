import "./App.css";
import Navbar from "./components/navbar";
import ContactUs from "./pages/contactUs";
import Main from "./pages/seasonalHoliday";
import { Route, Routes } from "react-router-dom";
import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
