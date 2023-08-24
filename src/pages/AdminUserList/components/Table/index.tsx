import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useAppSelector } from "../../../../store";
import { Column, Row } from "./types";
import { ChangeEvent, useState } from "react";
import { filteredUsersSelector } from "@features/user/usersSelecrots";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import {
  StyledMessage,
  StyledTableBody,
  StyledTableContainer,
  StyledTablePaper,
  StyledTypography,
} from "./style";
import { nanoid } from "@reduxjs/toolkit";

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
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredUsers = useAppSelector(filteredUsersSelector);

  const rows: Row[] = filteredUsers.map((user) => {
    return {
      nickname: `${user.firstName} ${user.lastName}`,
      email: user.email,
      role: user.userRole,
    };
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
              <StyledMessage>
                <FindInPageOutlinedIcon />
                <StyledTypography>
                  No results. Please change your searching criteria
                </StyledTypography>
              </StyledMessage>
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
