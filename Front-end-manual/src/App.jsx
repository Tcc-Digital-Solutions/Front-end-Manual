import VLibras from '@moreiraste/react-vlibras';
import { AuthProvider } from 'react-auth-kit';
import { RoutesJS } from './routes';


function App() {

  return (
    <div>
      <AuthProvider authType={'cookie'}
        authName={'_auth'}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}>
        <RoutesJS />
        <VLibras forceOnload={true} />
      </AuthProvider>
    </div>
  )
}

export default App