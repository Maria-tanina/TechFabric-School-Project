import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { selectGetUsersData } from "@services/usersApi";

export const selectDraftQuery = (state: RootState) =>
  state.admin.draftFilter.query;

export const selectDraftRole = (state: RootState) =>
  state.admin.draftFilter.role;

export const selectAppliedQuery = (state: RootState) =>
  state.admin.appliedFilter.query;

export const selectAppliedRole = (state: RootState) =>
  state.admin.appliedFilter.role;

export const selectUsers = createSelector(
  selectGetUsersData,
  selectAppliedQuery,
  selectAppliedRole,
  (users, searchQuery, selectedRole) => {
    if (!users) {
      return [];
    }

    return users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      const lowerFullName = fullName.toLowerCase();
      const lowerEmail = user.email.toLowerCase();
      const userRole = user.userRole;

      const nameMatch = lowerFullName.includes(searchQuery.toLowerCase());
      const emailMatch = lowerEmail.includes(searchQuery.toLowerCase());
      const roleMatch = selectedRole === "" || userRole === selectedRole;

      return (nameMatch || emailMatch) && roleMatch;
    });
  }
);

export const selectPaginationPage = (state: RootState) =>
  state.admin.paginationPage;

export const selectRowsPerPage = (state: RootState) => state.admin.rowsPerPage;
