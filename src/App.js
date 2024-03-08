import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";

import Home from "./routes/home/home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="auth" element={<Authentication />} />
            </Route>
        </Routes>
    );
}

export default App;
