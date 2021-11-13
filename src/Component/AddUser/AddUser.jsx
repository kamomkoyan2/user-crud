import { useState } from 'react';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from '@material-ui/core';
import { addUser } from '../../Service/api';
import { useHistory } from 'react-router-dom';
import useStyles from './AddUser.style';

const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const AddUser = () => {
  const [user, setUser] = useState(initialValue);

  const { firstname, lastname, email, phone } = user;
  const classes = useStyles();
  let history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    history.push('/');
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">First Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="firstname"
          value={firstname}
          required={true}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Last Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="lastname"
          value={lastname}
          required={true}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          required={true}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          required
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" color="primary" onClick={addUserDetails}>
          Add User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default AddUser;
