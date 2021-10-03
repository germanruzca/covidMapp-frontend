import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Prueba from '../components/preuba';

//Este es de prueba y solo ilustrativo de un spinner para mostrar mienstras los componenntes cargan
//import Spinner from '../shared/ejemplo_spinner';
const Login = lazy(() => import('../pages/loginPage'));
const Layout = lazy(() => import('../components/Menu/Menu'));

const Welcome = lazy(()=> import('../pages/WelcomePage'))
const Catalogs = lazy(()=> import('../pages/CatalogsPage'))
const Movements = lazy(()=> import('../pages/MovementsPage'))
const Employees = lazy(()=> import('../pages/EmployeesPage'))
const Payroll = lazy(()=> import('../pages/PayrollPage'))
const Inquiries = lazy(()=> import('../pages/InquiriesPage'))

/*              Route sintax
 */
export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={''}>
        <BrowserRouter>
          {/* <Login> */}
          {/* <Prueba> */}
          {/* <Layout/> */}
          <Switch>
            {/* <Route exact path="/" component={''} /> */}
            <Route exat path="/welcome" component={Welcome} />
            <Route exat path="/consultas" component={Inquiries} />
            <Route exat path="/nomina" component={Payroll} />
            <Route exat path="/empleados" component={Employees} />
            <Route exat path="/movimientos" component={Movements} />
            <Route exat path="/catalogos" component={Catalogs} />
            {/* <Route exat path='/prueba' component={Prueba}/> */}
            <Route exact path="/" component={Login} />
          </Switch>
          {/* </Layout> */}
          {/* </Prueba> */}
          {/* </Login> */}
        </BrowserRouter>
      </Suspense>
    </>
  );
}
