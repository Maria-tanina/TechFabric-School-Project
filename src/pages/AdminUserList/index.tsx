import UsersTable from "./components/Table";
import NavigationMenu from "@components/NavigationMenu";
import SearchBar from "./components/SearchBar";
import { MainHeader } from "@components/MainHeader";
import { AdminUserListWrapper, StyledUserListPaper } from "./style";

const AdminUserList = () => {
  return (
    <AdminUserListWrapper>
      <NavigationMenu />

      <StyledUserListPaper>
        <MainHeader>Users List</MainHeader>

        <SearchBar />

        <UsersTable />
      </StyledUserListPaper>
    </AdminUserListWrapper>
  );
};

export default AdminUserList;
