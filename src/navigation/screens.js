// All screenames and screen imports

// All imports
import Initialpage from "../screens/auth/Initialpage";
import LoginScreen from "../screens/auth/Login";
import SignUpScreen from "../screens/auth/Signup";
import ForgotPasswordScreen from "../screens/auth/Forgot-password";
import OTPLoginScreen from "../screens/auth/OTPLogin";
import OTPVerificationScreen from "../screens/auth/OTPLogin/OTPVerificationScreen";
import HomeScreen from "../screens/core/Home";

// Home screens
const HomeScreens = {
  HOME: "HOME",
  HOMESCREEN: "HOMESCREEN",
};

// Main Screens
const ScreenNames = {
  AUTH: "AUTH",
  INITIALPAGE: "INITIALPAGE",
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  FORGOTPASSWORD: "FORGOTPASSWORD",
  OTPLOGINSCREEN: "OTPLOGINSCREEN",
  OTPVERIFICATIONSCREEN: "OTPVERIFICATIONSCREEN",
  ...HomeScreens,
};

export {
  ScreenNames,
  Initialpage,
  LoginScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  HomeScreen,
  OTPLoginScreen,
  OTPVerificationScreen,
};
