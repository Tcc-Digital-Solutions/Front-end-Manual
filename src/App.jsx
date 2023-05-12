import {RoutesJS} from './routes'
import VLibras from '@moreiraste/react-vlibras';
             

function App() {

  return (
    <div>
      <RoutesJS />
      <VLibras forceOnload={true}   />
    </div>
  )
}

export default App