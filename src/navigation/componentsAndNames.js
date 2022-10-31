// All imports
import InitialPage from '../screens/auth/Initialpage';
import ForgotPasswordScreen from '../screens/auth/Forgot-password';
import LoginScreen from '../screens/auth/Login';
import SignUpScreen from '../screens/auth/Signup';
import OTPLoginScreen from '../screens/auth/OTPLogin';
import OTPVerificationScreen from '../screens/auth/OTPLogin/OTPVerificationScreen';
import HomeScreen from '../screens/core/Home';
import RestaurantDetailScreen from '../screens/core/Home/RestaurantDetail';
import AuthNavigation from './stacks/AuthNavigation';
import HomeNavigation from './stacks/HomeNavigation';
import OrderNavigation from './stacks/OrderNavigation';
import EmailVerificationPage from '../screens/auth/Forgot-password/EmailVerificationPage';
import SearchScreen from '../screens/core/Search';
import OrderScreen from '../screens/core/Orders';
import TabNavigation from './stacks/TabNavigation';
import ProfileScreen from '../screens/core/Profile';
import CartScreen from '../screens/core/Orders/Cart';
import OrderDetailScreen from '../screens/core/Orders/Cart/OrderDetail';

// Auth Navigation function
export const AUTH = {
  name: 'AUTH',
  component: AuthNavigation,
};

// Home Navigation function
export const HOME = {
  name: 'HOME',
  component: HomeNavigation,
};

// Order Navigation function
export const ORDER = {
  name: 'ORDER',
  component: OrderNavigation,
};

// Initial Page component and name
export const INITIALPAGE = {
  name: 'INITIALPAGE',
  component: InitialPage,
};

// Login Page component and name
export const LOGINSCREEN = {
  name: 'LOGINSCREEN',
  component: LoginScreen,
};

// Signup Page component and name
export const SIGNUPSCREEN = {
  name: 'SIGNUP',
  component: SignUpScreen,
};

// Forgotpassword Page component and name
export const FORGOTPASSWORDSCREEN = {
  name: 'FORGOTPASSWORDSCREEN',
  component: ForgotPasswordScreen,
};

// Forgotpassword Page component and name
export const EMAILVERIFICATIONPAGE = {
  name: 'EMAILVERIFICATIONPAGE',
  component: EmailVerificationPage,
};

// OTP Login Page component and name
export const OTPLOGINSCREEN = {
  name: 'OTPLOGINSCREEN',
  component: OTPLoginScreen,
};

// OTP VErification component and name
export const OTPVERIFICATIONSCREEN = {
  name: 'OTPVERIFICATIONSCREEN',
  component: OTPVerificationScreen,
};

// HOme Page component and name
export const HOMESCREEN = {
  name: 'HOMESCREEN',
  component: HomeScreen,
};

// Restaurant Detail Page component and name
export const RESTAURANTDETAILSCREEN = {
  name: 'RESTAURANTDETAILSCREEN',
  component: RestaurantDetailScreen,
};

// Search Page component and name
export const SEARCHSCREEN = {
  name: 'SEARCHSCREEN',
  component: SearchScreen,
};

// Order Page component and name
export const ORDERSCREEN = {
  name: 'ORDERSCREEN',
  component: OrderScreen,
};

// Cart Page component and name
export const CARTSCREEN = {
  name: 'CARTSCREEN',
  component: CartScreen,
};

// Cart Page component and name
export const ORDERDETAIL = {
  name: 'ORDERDETAIL',
  component: OrderDetailScreen,
};

// Profile Page component and name
export const PROFILESCREEN = {
  name: 'PROFILESCREEN',
  component: ProfileScreen,
};

// Tab Screens component and name
export const TABSCREENS = {
  name: 'TABSCREENS',
  component: TabNavigation,
};
