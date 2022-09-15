// All imports
import InitialPage from "../screens/auth/Initialpage";
import ForgotPasswordScreen from "../screens/auth/Forgot-password";
import LoginScreen from "../screens/auth/Login";
import SignUpScreen from "../screens/auth/Signup";
import OTPLoginScreen from "../screens/auth/OTPLogin";
import OTPVerificationScreen from "../screens/auth/OTPLogin/OTPVerificationScreen";
import HomeScreen from "../screens/core/Home";
import AuthNavigation from "./stacks/AuthNavigation";
import HomeNavigation from "./stacks/HomeNavigation";

// Auth Navigation function
export const AUTH = {
  name: "AUTH",
  component: AuthNavigation,
};

// Home Navigation function
export const HOME = {
  name: "HOME",
  component: HomeNavigation,
};

// Initial Page component and name
export const INITIALPAGE = {
  name: "INITIALPAGE",
  component: InitialPage,
};

// Login Page component and name
export const LOGIN = {
  name: "LOGIN",
  component: LoginScreen,
};

// Signup Page component and name
export const SIGNUP = {
  name: "SIGNUP",
  component: SignUpScreen,
};

// Forgotpassword Page component and name
export const FORGOTPASSWORD = {
  name: "FORGOTPASSWORD",
  component: ForgotPasswordScreen,
};

// OTP Login Page component and name
export const OTPLOGINSCREEN = {
  name: "OTPLOGINSCREEN",
  component: OTPLoginScreen,
};

// OTP VErification component and name
export const OTPVERIFICATIONSCREEN = {
  name: "OTPVERIFICATIONSCREEN",
  component: OTPVerificationScreen,
};

// HOme Page component and name
export const HOMESCREEN = {
  name: "HOMESCREEN",
  component: HomeScreen,
};
