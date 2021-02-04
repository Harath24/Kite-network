import * as Yup from "yup";

export const required = (value) => {
    if(value) return undefined;
        return 'Field is required'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
        return undefined
}
export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required',),
    password: Yup.string()
        .min(6, 'Minimal length should be six symbols')
        .max(15, 'Maximal length should be 15 symbols')
        .required('Required'),
});