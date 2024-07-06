import { MainNav } from "@/plugins/dashboard/dashboard/components/main-nav";
import { Search } from "@/plugins/dashboard/dashboard/components/search";
import TeamSwitcher from "@/plugins/dashboard/dashboard/components/team-switcher";
import { UserNav } from "@/plugins/dashboard/dashboard/components/user-nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
