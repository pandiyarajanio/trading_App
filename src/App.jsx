import HomePage from "./pages/Homepage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PagewithNav from "./pages/PagewithNav.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";

// IMAGES
import banner from "./assets/img/banner.jpg";
import navlogo from "./assets/img/navlogo.jpg";
import user from "./assets/img/user.jpg";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // HOMEPAGE ROUTE
      <Route path="/">
        <Route index element={<HomePage banner={banner} />}></Route>

        {/* MAINLAYOUT ROUTE WITH OUTLETS */}
        <Route path="/" element={<PagewithNav navlogo={navlogo} />}>
          <Route
            path="/dashboard"
            element={<Dashboard userimg={user} page={"dashboard"} />}
          ></Route>
          {/* FUNDS PAGE ROUTES */}

          <Route
            path="/funds/deposit"
            element={<Dashboard userimg={user} page={"funds deposit"} />}
          ></Route>
          <Route
            path="/funds/withdraw"
            element={<Dashboard userimg={user} page={"funds withdraw"} />}
          ></Route>
          <Route
            path="/funds/downloads"
            element={<Dashboard userimg={user} page={"funds download"} />}
          ></Route>
          {/* PROFILE */}
          <Route
            path="/profile"
            element={<Dashboard userimg={user} page={"profile"} />}
          ></Route>

          {/* SETTINGS */}
          <Route
            path="/settings/ephoto"
            element={<Dashboard userimg={user} page={"settings ephoto"} />}
          ></Route>
          <Route
            path="/settings/eprofile"
            element={<Dashboard userimg={user} page={"settings eprofile"} />}
          ></Route>
          <Route
            path="/settings/ebank"
            element={<Dashboard userimg={user} page={"settings ebank"} />}
          ></Route>
          <Route
            path="/settings/changepassword"
            element={<Dashboard userimg={user} page={"settings changepassword"} />}
          ></Route>

          {/* REPORTS */}
          <Route
            path="/reports/tradesummary"
            element={<Dashboard userimg={user} page={"reports tradesummary"} />}
          ></Route>
          <Route
            path="/reports/accountssummary"
            element={
              <Dashboard userimg={user} page={"reports accountssummary"} />
            }
          ></Route>
        </Route>

        {/* 404 ROUTE */}
        <Route
          path="/*"
          element={
            <>
              <div className="text-center h-100 d-flex justify-content-center align-items-center ">
                404 NOT FOUND
              </div>
            </>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
