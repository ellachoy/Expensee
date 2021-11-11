import GoogleButton from "../../components/GoogleButton/GoogleButton";
import "./Google.scss";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
const Google = () => {
    return (
        <div>
            <Header />
            <h1 id="EmailH1">Expensee</h1>
            <GoogleButton />
            <Footer />
        </div>
    );
}

export default Google;