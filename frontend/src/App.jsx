
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
}

export default App;