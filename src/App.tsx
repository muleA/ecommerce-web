import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./global.css";
import ErrorBoundary from "./shared/error-boundary";
import { Provider } from "react-redux";
import { store } from "./store/app.store";
import { useAuth } from "./shared/auth/use-auth";
import HomePage from "./pages/home";
import LayoutWrapper from "./components/layouts";
import { MyOrderList } from "./components/order/order-list";
import OrderNotificationsPage from "./components/notifications";
import { I18nextProvider } from "react-i18next";
import i18n from "./shared/locals/i18n";
import { Dashboard } from "./pages/dashboard";
import { MyMenuLists } from "./components/menu/menu-list";
import { MyProfile } from "./components/my-profile";
import { Login } from "./pages/login/log";
import LoginForm from "./pages/login/login-form";
import OrderDetail from "./components/order/detail.";
import DetailMenu from "./components/menu/detail.";
import NewMenu from "./components/menu/new";
import { Myreviews } from "./components/review/reviews";
import { MySchedule } from "./components/schedule/schedule";
import DetailSchedule from "./components/schedule/detail.";
import NewSchedule from "./components/schedule/new-schedule";
const App = () => {
  const { session } = useAuth();
  console.log("session", session);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (session === null && location.pathname !== "/login") {
      navigate("/");
    } else if (session && location.pathname === "/login") {
      navigate("/home");
    }
  }, [session, location.pathname, navigate]);
  return (
 
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {session !== null && (
              <Route
                path="*"
                element={
                  <LayoutWrapper showSidebar={location.pathname !== "/login"}>
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route
                        path="/notification"
                        element={<OrderNotificationsPage />}
                      />
                           <Route path="/schedule" element={<MySchedule />} />
                      <Route path="/schedule/detail/:id" element={<DetailSchedule/>}/>
                      <Route path="/schedule/new" element={<NewSchedule/>}/>
                      <Route path="/menus" element={<MyMenuLists />} />
                      <Route path="/menus/detail/:id" element={<DetailMenu/>}/>
                      <Route path="/menus/new" element={<NewMenu/>}/>
                      <Route path="/orders" element={<MyOrderList />} />
                      <Route path="/order/detail/:id" element={<OrderDetail/>}/>
                      <Route path="/my-profile" element={<MyProfile />} />
                      <Route path="/reviews" element={<Myreviews/>}/>
                    </Routes>
                  </LayoutWrapper>
                }
              />
            )}
          </Routes>
        </Provider>
      </ErrorBoundary>
    </I18nextProvider>
  );
};

export default App;
