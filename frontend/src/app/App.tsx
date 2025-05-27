import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from '@shared/lib/error-boundary';
import { NotFound } from '@pages/404/ui/NotFound.tsx';
import { StoryBook } from '@pages/StoryBook/ui/StoryBook.tsx';
import { Register } from '@pages/Register/ui/Register.tsx';
import { Login } from '@pages/Login/ui/Login.tsx';
import { SidebarLayout } from '@widgets/layouts/ui/SidebarLayout.tsx';
import { StoreProvider } from '@app/providers/StoreProvider';
import { useStore } from '@/shared/store/store';
import { Home } from '@pages/Home/ui/Home';
import { Create } from '@pages/Home/ui/Create';
export const App = () => {
  const user = useStore((state) => state.user);

  return (
    <ErrorBoundary>
      <StoreProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Routes>
            <Route element={<SidebarLayout />}>
              <Route
                path="/"
                element={<div>Rental Home Management {user?.name}</div>}
              />
              <Route path="/home" element={<Home />} />
              <Route path="/home/create" element={<Create />} />
              <Route path="story-book" element={<StoryBook />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </StoreProvider>
    </ErrorBoundary>
  );
};
