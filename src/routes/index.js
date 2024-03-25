import React from 'react'
import { Switch, useLocation } from 'react-router-dom';
import Route from './route'

import Home from '../pages/home';
import Solutions from '../pages/solutions';
import Product from '../pages/product';
import Auth from '../pages/auth';
import Register from '../pages/register';
import Limit from '../pages/limit';
import Faq from '../pages/faq';
import Invoicing from '../pages/invoicing';
import Edit from '../pages/edit'
import Link from '../pages/link'
import Sdk from '../pages/sdk';
import Finish from '../pages/finish';
import Quality from '../pages/quality';
import Methods from '../pages/methods';
import Extract from '../pages/extract';
import Intention from '../pages/intention';

export const Routes = () => {
  const location = useLocation()

  return (
      <Switch location={location} key={location.pathname}>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/solutions' component={ Solutions } />
        <Route exact path='/product' component={ Product } />
        <Route exact path='/auth' component={ Auth } />
        <Route exact path='/register' component={ Register } />
        <Route exact path='/limit' component={ Limit } />
        <Route exact path='/faq' component={ Faq } />
        <Route exact path='/billing' component={ Invoicing } />
        <Route exact path='/edit' component={Edit} />
        <Route exact path='/payment-link' component={Link} />
        <Route exact path='/checkout-tino' component={Sdk} />
        <Route exact path='/finish' component={Finish} />
        <Route exact path='/quality' component={Quality} />
        <Route exact path='/methods' component={Methods} />
        <Route exact path='/extract' component={Extract} />
        <Route exact path='/intention' component={Intention} />
      </Switch>
  )
}