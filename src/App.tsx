import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./global.css";
import ErrorBoundary from "./shared/error-boundary";
import { Provider } from "react-redux";
import { store } from "./store/app.store";
import { useAuth } from "./shared/auth/use-auth";
import HomePage from "./pages/home";
import LayoutWrapper from "./components/layouts";
import { MyMenus } from "./components/my-menus";
import { MyOrders } from "./components/my-orders";
const App = () => {
  const { session } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  /*   useEffect(() => {
    if (session === null && location.pathname !== "/") {
      navigate("/");
    } else if (session && location.pathname === "/") {
      if (session?.userInfo?.EmployeeRoles ===undefined) {
        navigate("/home");

      } else {
        navigate("/dashboard");
      }
    }
  }, [session, location.pathname, navigate]); */
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
    
              <>
                <Route
                  path="*"
                  element={
                    <React.Fragment>
                      <LayoutWrapper>
                        <Routes>
                          <Route path="/" element={<HomePage />} />
          <Route path="/menus" element={<MyMenus />} />
          <Route path="/orders" element={<MyOrders />} />
                        </Routes>
                      </LayoutWrapper>
                    </React.Fragment>
                  }
                />
              </>
          
        </Routes>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
