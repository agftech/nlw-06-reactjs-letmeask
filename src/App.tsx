import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}