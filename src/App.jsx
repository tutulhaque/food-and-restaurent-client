import Home from "./Pages/Home/Home";
import { ThemeProvider } from "./ThemeContext"; // Import the ThemeProvider

function App() {
  return (
    <ThemeProvider>
      <Home />
      {/* Add other components here */}
    </ThemeProvider>
  );
}

export default App;
