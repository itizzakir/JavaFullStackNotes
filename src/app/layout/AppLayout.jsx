import { Outlet } from "react-router-dom";
import MainNavigation from "../../shared/components/MainNavigation";

export default function AppLayout() {
  return (
    <div className="app-shell">
      <div className="app-wrap">
        <MainNavigation />
        <Outlet />
      </div>
    </div>
  );
}
