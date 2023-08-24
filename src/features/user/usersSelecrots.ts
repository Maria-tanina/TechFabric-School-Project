import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const filteredUsersSelector = createSelector(
  (state: RootState) => state.users.filterQuery,
  (state: RootState) => state.users.selectedRole,
  (state: RootState) => state.users.usersList,
  (filter, select, users) => {
    if (!filter && !select) {
      return users;
    } else {
      return users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        const lowerFullName = fullName.toLowerCase();
        const lowerEmail = user.email.toLowerCase();
        const userRole = user.userRole.toLowerCase();

        const nameMatch = lowerFullName.includes(filter.toLowerCase());
        const emailMatch = lowerEmail.includes(filter.toLowerCase());
        const roleMatch = select === "" || userRole === select.toLowerCase();

        return (nameMatch || emailMatch) && roleMatch;
      });
    }
  }
);
