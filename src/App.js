import { ConfigProvider } from "antd";
import AppRouter from "./config/router";
import NotoSans from "./assets/fonts/NotoSans-Regular.ttf";

function App() {
  return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#7A5CFA",
            fontFamily: NotoSans,
          },
        }}
      >
        <AppRouter />
      </ConfigProvider>
  );
}

export default App;
