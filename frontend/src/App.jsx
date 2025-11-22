import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem 2rem" }}>
        <AppRouter />
      </main>
    </>
  );
}

export default App;
