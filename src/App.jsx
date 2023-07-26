import { AppContextProvider } from "./Contexts/AppContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}
