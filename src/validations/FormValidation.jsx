export default function validate(values) {
  let errors = {};

  if (!values.firstname) {
    errors.firstname = 'Required';
  }
  if (!values.lastname) {
    errors.lastname = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.phone) {
    errors.phone = 'Required';
  }
  return errors;
}
