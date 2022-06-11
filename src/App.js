import { HomePage, ProductDetails, ProductList } from "./pages";
import { NavBar, Footer, Banner } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/shop" element={<ProductList />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
