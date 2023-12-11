export const route = Object.freeze({
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',

  HOME: '/',
  DISHES: '/dishes',
  FAVORITE_DISHES: 'dishes/favorites',
  FAVORITE_CHEFS: 'chefs/favorites',

  CHEFS: '/chefs',
  FAVORITE_CHEFS: 'chefs/favorites',

  ORDERS_PAYMENT: '/orders/payment',
  CREATE_ORDER: '/create-order',

  USER_ACCOUNT: '/user-account',

  CHEF_ACCOUNT: '/chef-account',
  CHEF_SIGN_UP: '/chef-account/sign-up',
  CHEF_PROFILE: '/chef-account/profile',
  CHEF_ORDERS: '/chef-account/orders',
  CHEF_DISHES: '/chef-account/dishes',
  CHEF_CREATE_DISH: '/chef-account/dishes/create',
  CHEF_EDIT_DISH: '/chef-account/dishes/edit/:id',

  COURIER_ACCOUNT: '/courier-account',
  COURIER_SIGN_UP: '/courier-account/sign-up',
  COURIER_PROFILE: '/courier-account/profile',
  COURIER_ORDERS: '/courier-account/orders',

  ADMIN: '/admin',
  ADMIN_CHEFS: '/admin/chefs',
  ADMIN_DISHES: '/admin/dishes',
  ADMIN_ORDERS: '/admin/orders',
  ACCESS_DENIED: '/access-denied',
});
