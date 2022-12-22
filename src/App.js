import { connect, Provider } from "react-redux";
import "./App.css";
import HealthyRecipe from "./components/HealthyRecipe";
import Random from "./components/Random";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import { fetchAutoCompleteData } from "./services/actions/autoCompleteData.action";
import Store from "./services/store/store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <Random />
          </div>
          <div className="row">
            <HealthyRecipe />
          </div>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
