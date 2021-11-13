import React, { useState, useEffect, useMemo } from 'react';
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  Typography,
  Paper,
} from '@material-ui/core';
import { getUsers, deleteUser } from '../../Service/api';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import usersData from '../../Database/db.json';
import useStyles from './AllUsers.style.js';

import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';

let PageSize = 25;

const AllUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const currentUsersData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return usersData.users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          type="text"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>{' '}
      <Paper className={classes.container}>
        <Table>
          <TableHead>
            <TableRow className={classes.tr}>
              <TableCell component="th" scope="row">
                <Typography>First Name</Typography>
              </TableCell>
              <TableCell>
                <Typography>Last Name</Typography>
              </TableCell>
              <TableCell>
                <Typography>Email</Typography>
              </TableCell>
              <TableCell>
                <Typography>Phone</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentUsersData
              .filter((user) => {
                if (searchTerm === '') {
                  return user;
                } else if (
                  user.firstname
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  user.lastname
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  user.phone.toString().includes(searchTerm.toLowerCase())
                ) {
                  return user;
                }
              })
              .map((user) => (
                <TableRow className={classes.row} key={user.id}>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      variant="contained"
                      style={{ marginRight: 10 }}
                      component={Link}
                      to={`/edit/${user.id}`}
                    >
                      Edit
                    </Button>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => deleteUserData(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
      <Pagination
        currentPage={currentPage}
        totalCount={usersData.users.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default AllUsers;
