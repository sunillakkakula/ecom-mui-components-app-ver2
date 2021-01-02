import Header from "./components/Header";
import Test from "./components/Test";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart/:id?" exact component={Cart} />
          <Route path="/test" exact component={Test} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
