import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '@/components/ErrorFallback';
import NavigationScroll from '@/components/NavigationScroll';
import Theme from '@/components/Theme';
import AppRoutes from '@/routes';

function App() {
  return (
    <Theme>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <NavigationScroll>
          <AppRoutes />
        </NavigationScroll>
      </ErrorBoundary>
    </Theme>
  );
}

export default App;
