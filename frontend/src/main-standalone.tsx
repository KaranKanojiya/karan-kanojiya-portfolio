/**
 * Entry point for running the portfolio as a standalone React app (no ICP/dfx).
 * Uses StandaloneIdentityProvider so no backend or Internet Identity is required.
 * Use index-standalone.html when running with: pnpm run dev (in frontend/)
 */
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StandaloneIdentityProvider } from './StandaloneIdentityProvider';
import App from './App';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <StandaloneIdentityProvider>
            <App />
        </StandaloneIdentityProvider>
    </QueryClientProvider>
);
