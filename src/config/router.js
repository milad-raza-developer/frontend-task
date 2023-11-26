import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { UserForm, UserTable } from "../pages/pages";
import { Result } from "antd";
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<UserForm />} />
        <Route exact path="/user-table" element={<UserTable />} />
        <Route
          exact
          path="*"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
