import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from '@/components/layouts/AppLayout';
import { route } from '@/constants';
import ProtectedRoute from '@/pages/access/ProtectedRoute';
import RestrictedRoute from '@/pages/access/RestrictedRoute';

const SignInPage = lazy(() => import('@/pages/auth/SignIn'));
const SignUpPage = lazy(() => import('@/pages/auth/SignUp'));
const HomePage = lazy(() => import('@/pages/user/Home'));
const DishesPage = lazy(() => import('@/pages/user/Dishes'));
const DishesInfoPage = lazy(() => import('@/pages/user/DishInfo'));
const ChefsPage = lazy(() => import('@/pages/user/Chefs'));
const ChefInfoPage = lazy(() => import('@/pages/user/ChefInfo'));
const ChefAccountPage = lazy(() => import('@/pages/chef/ChefAccount'));
const ChefSignUpPage = lazy(() => import('@/pages/chef/ChefSignUp'));
const ChefProfilePage = lazy(() => import('@/pages/chef/ChefProfile'));
const ChefCreateDishPage = lazy(() => import('@/pages/chef/ChefCreateDish'));
const ChefOrdersPage = lazy(() => import('@/pages/chef/ChefOrders'));
const ChefDishesPage = lazy(() => import('@/pages/chef/ChefDishes'));
const ChefDisheInfoPage = lazy(() => import('@/pages/chef/ChefDishInfo'));
const CourierAccountPage = lazy(() => import('@/pages/courier/CourierAccount'));
const CourierSignUpPage = lazy(() => import('@/pages/courier/CourierSignUp'));
const CourierProfilePage = lazy(() => import('@/pages/courier/CourierProfile'));
const CourierOrdersPage = lazy(() => import('@/pages/courier/CourierOrders'));
const AdminPage = lazy(() => import('@/pages/admin/Admin'));
const AdminChefsPage = lazy(() => import('@/pages/admin/AdminChefs'));
const AdminDishesPage = lazy(() => import('@/pages/admin/AdminDishes'));
const AdminOrdersPage = lazy(() => import('@/pages/admin/AdminOrders'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));
const AccessDeniedPage = lazy(() => import('@/pages/access/AccessDenied'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<AppLayout />}>
        <Route index element={<HomePage />} />

        <Route
          path={route.HOME}
          element={<RestrictedRoute redirectLink={route.HOME} />}
        >
          <Route path={route.SIGN_IN} element={<SignInPage />} />
          <Route path={route.SIGN_UP} element={<SignUpPage />} />
        </Route>

        <Route
          path={route.CHEF_SIGN_UP}
          element={
            <RestrictedRoute redirectLink={route.CHEF_ACCOUNT} role="chef" />
          }
        >
          <Route index element={<ChefSignUpPage />} />
        </Route>

        <Route
          path={route.COURIER_SIGN_UP}
          element={
            <RestrictedRoute
              redirectLink={route.COURIER_ACCOUNT}
              role="courier"
            />
          }
        >
          <Route index element={<CourierSignUpPage />} />
        </Route>

        <Route path={route.DISHES}>
          <Route index element={<DishesPage />} />
          <Route path=":dishId" element={<DishesInfoPage />} />
        </Route>
        <Route path={route.CHEFS}>
          <Route index element={<ChefsPage />} />
          <Route path=":chefId" element={<ChefInfoPage />} />
        </Route>

        <Route
          path={route.CHEF_ACCOUNT}
          element={
            <ProtectedRoute
              authRedirectLink={route.SIGN_IN}
              accessRedirectLink={route.CHEF_SIGN_UP}
              role={'chef'}
            />
          }
        >
          <Route index element={<ChefAccountPage />} />
          <Route path={route.CHEF_PROFILE} element={<ChefProfilePage />} />
          <Route path={route.CHEF_ORDERS} element={<ChefOrdersPage />} />
          <Route path={route.CHEF_DISHES}>
            <Route index element={<ChefDishesPage />} />
            <Route
              path={route.CHEF_CREATE_DISH}
              element={<ChefCreateDishPage />}
            />
            <Route path=":dishId" element={<ChefDisheInfoPage />} />
          </Route>
        </Route>

        <Route
          path={route.COURIER_ACCOUNT}
          element={
            <ProtectedRoute
              authRedirectLink={route.SIGN_IN}
              accessRedirectLink={route.COURIER_SIGN_UP}
              role={'courier'}
            />
          }
        >
          <Route index element={<CourierAccountPage />} />

          <Route
            path={route.COURIER_PROFILE}
            element={<CourierProfilePage />}
          />
          <Route path={route.COURIER_ORDERS} element={<CourierOrdersPage />} />
        </Route>

        <Route
          path={route.ADMIN}
          element={
            <ProtectedRoute
              authRedirectLink={route.SIGN_IN}
              accessRedirectLink={route.ACCESS_DENIED}
              role={'admin'}
            />
          }
        >
          <Route index element={<AdminPage />} />
          <Route path={route.ADMIN_CHEFS} element={<AdminChefsPage />} />
          <Route path={route.ADMIN_DISHES} element={<AdminDishesPage />} />
          <Route path={route.ADMIN_ORDERS} element={<AdminOrdersPage />} />
        </Route>

        <Route path={route.ACCESS_DENIED} element={<AccessDeniedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;