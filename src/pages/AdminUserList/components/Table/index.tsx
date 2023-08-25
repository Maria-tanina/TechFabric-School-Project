import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { Column, Row } from "./types";
import { ChangeEvent } from "react";
import { filterUsers } from "@features/user/usersFiltration";
import {
  StyledTableBody,
  StyledTableContainer,
  StyledTablePaper,
} from "./style";
import { nanoid } from "@reduxjs/toolkit";
import { Spinner } from "@components/Spinner";
import { useGetUsersQuery } from "@services/authApi";
import { TableFetchError, TableSearchError } from "../TableNotification/index";
import { setPaginationPage, setRowsPerPage } from "@features/admin/adminSlice";

const columns: readonly Column[] = [
  { id: "nickname", label: "Nickname", minWidth: 150 },
  { id: "email", label: "Email", minWidth: 150 },
  {
    id: "role",
    label: "Role",
    minWidth: 150,
  },
];

const UsersTable = () => {
  const page = useAppSelector((state) => state.admin.paginationPage);

  const rowsPerPage = useAppSelector((state) => state.admin.rowsPerPage);

  const dispatch = useAppDispatch();

  const filterQuery = useAppSelector((state) => state.users.filterQuery);

  const selectedRole = useAppSelector((state) => state.users.selectedRole);

  const { data: users, isError, isLoading } = useGetUsersQuery();

  const filteredUsers = filterUsers(filterQuery, selectedRole, users);

  const rows: Row[] = filteredUsers.map((user) => {
    return {
      nickname: `${user.firstName} ${user.lastName}`,
      email: user.email,
      role: user.userRole,
    };
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPaginationPage(newPage));
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(setPaginationPage(0));
  };

  if (isLoading) {
    return <Spinner size={90} />;
  }

  if (isError) {
    return <TableFetchError message="Something went wrong..." />;
  }

  return (
    <StyledTablePaper>
      <StyledTableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <StyledTableBody>
            {rows.length ? (
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={nanoid()}
                    >
                      {columns.map((column) => {
                        const value = user[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
            ) : (
              <TableSearchError message="No results. Please change your searching criteria" />
            )}
          </StyledTableBody>
        </Table>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </StyledTablePaper>
  );
};

export default UsersTable;
