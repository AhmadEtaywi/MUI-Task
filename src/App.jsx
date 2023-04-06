import "./App.css";
import Header from "./Components/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./Components/theme";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import MainContent from "./Components/MainContent";
import SearchBar from "./Components/SearchBar";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <HeroSection />
        <SearchBar />
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
