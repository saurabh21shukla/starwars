import {reduxForm} from 'redux-form';

export const validate = ({username, password}) => {
    const errors = {};
    
    const passwordMinLength = 4;

    if (!username) {
        errors.username = 'Username are required';
    }
    if (!password) {
        errors.password = 'Password are required';
    }
    else if(password.length < passwordMinLength) {
        errors.password = `Minium ${passwordMinLength} character password is required`
    }

    return errors;
};

export default reduxForm({
    form: 'user',
    validate,
});
