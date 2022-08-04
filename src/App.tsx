import { Provider } from 'react-redux'
import Home from './pages/Home'
import { persistor, store } from './store/store'

import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <Home />
      </PersistGate>
    </Provider>
  )
}

export default App
