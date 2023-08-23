import UsersTable from "@pages/AdminUserList/components/Table";
import NavigationMenu from "@components/NavigationMenu";
import SearchBar from "@pages/AdminUserList/components/SearchBar";
import { MainHeader } from "@components/MainHeader";
import {
  AdminUserListWrapper,
  StyledUserListPaper,
} from "@pages/AdminUserList/style";

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
