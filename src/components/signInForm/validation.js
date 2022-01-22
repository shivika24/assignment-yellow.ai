import * as Yup from "yup";
import constants from "../../constants";

const phoneRegExp =
  /^^[1-9]([0-9]{9}$)/;

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, constants.TOO_SHORT_NAME_ERROR)
    .max(50, constants.TOO_LONG_NAME_ERROR)
    .required(constants.REQUIRED),
  phoneNumber: Yup.string()
    .required(constants.REQUIRED)
    .matches(phoneRegExp, constants.INVALID_PHONE_NUMBER),
  email: Yup.string()
    .email(constants.INVALID_EMAIL)
    .required(constants.REQUIRED),
});
