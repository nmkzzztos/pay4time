import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Spend from "./views/Spend";
import Earn from "./views/Earn";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";

function App() {
  return (
    <div
      className="App"
      style={{
        background:
          "linear-gradient(0deg, rgba(255,199,91,1) 0%, rgba(255,164,91,1) 100%)",
        width: "100%",
        height: "100vh",
        fontFamily: "Itim, cursive",
      }}
    >
      <Container maxWidth="sm">
        <BrowserRouter>
          <Navbar />
          <Box>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/spend">
                <Spend />
              </Route>
              <Route path="/earn">
                <Earn />
              </Route>
            </Switch>
          </Box>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
