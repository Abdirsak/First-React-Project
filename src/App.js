import Products from "./Products";
import Header from "./Header";
import Home from "./Home";

import "./Style.css";
import About from "./About";
import Review from "./Review";
import Contacts from "./Contacts";
import CommentsList from "./CommentsList";
import Footer from "./footer";

function App (){
    return <div>
        <Header />
        <Home />
        <Products />
        <About />
        <Review />
        <Contacts />
        <CommentsList />
        <Footer />
    </div>
}
export default App;