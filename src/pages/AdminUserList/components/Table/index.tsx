import { useAppDispatch, useAppSelector } from "../../../../store";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Row } from "./types";
import { columns } from "./columns";
import { ChangeEvent } from "react";
import {
  selectPaginationPage,
  selectRowsPerPage,
  selectUsers,
} from "@features/admin/adminSelectors";
import {
  StyledTableBody,
  StyledTableContainer,
  StyledTablePaper,
} from "./style";
import { nanoid } from "@reduxjs/toolkit";
import { Spinner } from "@components/Spinner";
import { useGetUsersQuery } from "@services/usersApi";
import { TableFetchError, TableSearchError } from "../TableNotification/index";
import { setPaginationPage, setRowsPerPage } from "@features/admin/adminSlice";
import TableSelect from "@components/TableSelect";
import { allRoles } from "@constants/roles";

const UsersTable = () => {
  const dispatch = useAppDispatch();

  const page = useAppSelector(selectPaginationPage);

  const rowsPerPage = useAppSelector(selectRowsPerPage);

  const { isError, isLoading } = useGetUsersQuery();

  const filteredUsers = useAppSelector(selectUsers);

  const rows: Row[] = filteredUsers.map((user) => {
    return {
      nickname: `${user.firstName} ${user.lastName}`,
      email: user.email,
      role: user.userRole,
    };
  });

  const isPaginationFieldsDisabled = rows.length === 0;

  const startIndex = page * rowsPerPage;

  const endIndex = page * rowsPerPage + rowsPerPage;

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
              rows.slice(startIndex, endIndex).map((user) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={nanoid()}>
                    {columns.map((column) => {
                      const value = user[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          height="56px"
                        >
                          {column.id === "role" ? (
                            <TableSelect
                              options={allRoles}
                              defaultValue={value}
                            />
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            ) : (
              <TableSearchError message="No results. Please change your searching criteria." />
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
        SelectProps={{
          disabled: isPaginationFieldsDisabled,
        }}
      />
    </StyledTablePaper>
  );
};

export default UsersTable;
