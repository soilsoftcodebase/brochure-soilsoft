import { Route, Switch } from "wouter";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import FlagshipProductPage from "./pages/FlagshipProductPage";
import FlagshipProductPage2 from "./pages/FlagshipProductPage2";
import FutureProductsPage from "./pages/FutureProductsPage";
import FutureProductsPage2 from "./pages/FutureProductsPage2";
import BusinessModelPage from "./pages/BusinessModelPage";
import BusinessModelPage2 from "./pages/BusinessModelPage2";
import FoundersPage from "./pages/FoundersPage";
import VisionPage from "./pages/VisionPage";
import PrintAll from "./pages/PrintAll";
import NotFound from "./pages/not-found";

function App() {
  return (
    <div className="min-h-screen bg-softgrey">
      <div className="no-print fixed top-0 left-0 right-0 bg-navy text-white p-2 z-50 text-center">
        <p className="text-sm">
          Press Ctrl+P (or Cmd+P) to print as PDF. Choose A4 or Legal page size.
        </p>
        <div className="flex justify-center mt-1 gap-4">
          <a href="/" className="text-sky hover:underline">Company Profile</a>
          <a href="/product" className="text-sky hover:underline">Flagship Product (1/2)</a>
          <a href="/product2" className="text-sky hover:underline">Flagship Product (2/2)</a>
          <a href="/future" className="text-sky hover:underline">Future Products (1/2)</a>
          <a href="/future2" className="text-sky hover:underline">Future Products (2/2)</a>
          <a href="/business" className="text-sky hover:underline">Business Model (1/2)</a>
          <a href="/business2" className="text-sky hover:underline">Business Model (2/2)</a>
          <a href="/founders" className="text-sky hover:underline">Founders</a>
          <a href="/vision" className="text-sky hover:underline">Vision & Values</a>
          <a href="/all" className="text-sky hover:underline font-bold">Print All</a>
        </div>
      </div>
      
      <Switch>
        <Route path="/" component={CompanyProfilePage} />
        <Route path="/product" component={FlagshipProductPage} />
        <Route path="/product2" component={FlagshipProductPage2} />
        <Route path="/future" component={FutureProductsPage} />
        <Route path="/future2" component={FutureProductsPage2} />
        <Route path="/business" component={BusinessModelPage} />
        <Route path="/business2" component={BusinessModelPage2} />
        <Route path="/founders" component={FoundersPage} />
        <Route path="/vision" component={VisionPage} />
        <Route path="/all" component={PrintAll} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
