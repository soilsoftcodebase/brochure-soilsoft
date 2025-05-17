import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { checkApiConnection, getEnvironmentInfo } from "./lib/diagnostics";

// Log environment info on startup
console.log('Environment:', getEnvironmentInfo());

// Check API connection
checkApiConnection().then(result => {
  console.log('API connection check result:', result);
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <App />
    </TooltipProvider>
  </QueryClientProvider>
);
