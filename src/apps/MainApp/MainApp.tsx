import { Suspense } from 'react'
import { routes } from '../../routes/routes'
import { HashRouter, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from 'src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import ErrorBoundary from 'src/components/ErrorBoundary/ErrorBoundary'
import { renderRoutes } from 'src/utils/renderRoutes'
import { ThemeProvider } from 'react-bootstrap'
import './MainApp.scss'

export const MainApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
        >
          <HashRouter>
            <ErrorBoundary>
              <Suspense>
                <Routes>{renderRoutes(routes)}</Routes>
              </Suspense>
            </ErrorBoundary>
          </HashRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
