import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from '@shared/lib/error-boundary';

export const App = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<div>Rental Home Management</div>} />
          <Route path="/home" element={<div>Home Page</div>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};
