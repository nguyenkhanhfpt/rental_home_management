import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from '@shared/lib/error-boundary';
import { NotFound } from '@pages/404/ui/NotFound.tsx';
import { StoryBook } from '@pages/StoryBook/ui/StoryBook.tsx';
import { Register } from '@pages/Register/ui/Register.tsx';
import { Login } from '@pages/Login/ui/Login.tsx';
import { SidebarLayout } from '@widgets/layouts/ui/SidebarLayout.tsx';

export const App = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<div>Rental Home Management</div>} />
            <Route path="/home" element={<div>Home Page</div>} />
            <Route path="story-book" element={<StoryBook />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};
