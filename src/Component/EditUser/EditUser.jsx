import { useState, useEffect } from 'react';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../../Service/api';
import useStyles from './EditUser.style';

const initialValue = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
};

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { firstname, lastname, email, phone } = user;
  const { id } = useParams();
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    history.push('/');
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit Information</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">First Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="firstname"
          value={firstname}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Last Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="lastname"
          value={lastname}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" color="primary" onClick={editUserDetails}>
          Edit User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditUser;
