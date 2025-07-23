import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SwitchThemeProvider } from "./context/SwitchTheme.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <SwitchThemeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SwitchThemeProvider>
  </AuthContextProvider>
);
