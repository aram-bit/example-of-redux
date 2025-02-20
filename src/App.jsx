import CakeContainer from './components/CakeContainer'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
<Provider store={store}>
  <CakeContainer/>
</Provider>
  )
}

export default App