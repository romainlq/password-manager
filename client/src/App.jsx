import { Route, Switch } from "wouter"

import { ROUTES } from './routes';
import NotFound from '@/routes/notfound/NotFound';
import AppLayout from "@/components/layout/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <Switch>
        <>
          {Object.entries(ROUTES).map(([routeName, route]) => (
            <Route key={routeName}  path={route.path} component={route.component}/>
          ))}
        </>
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  )
}

export default App
