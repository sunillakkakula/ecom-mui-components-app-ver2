import Header from "./components/Header";
import Test from "./components/Test";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path="/login" exact component={Login} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Home} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
