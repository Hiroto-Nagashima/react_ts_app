import { Home } from "../components/page/Home"
import { Page404 } from "../components/page/Page404";
import { Setting } from "../components/page/Settings"
import { UserManagement } from "../components/page/UserManagement"
// 必ず配列を渡す
export const homeRoutes =[
    {
      path: "/",
      exact: true,
      children: <Home />
    },
    {
      path: "/setting",
      exact: false,
      children: <Setting />
    },
    {
      path: "/user_management",
      exact: false,
      children: <UserManagement />
    },
    {
      path: "*",
      exact: false,
      children: <Page404 />
    }
  ];