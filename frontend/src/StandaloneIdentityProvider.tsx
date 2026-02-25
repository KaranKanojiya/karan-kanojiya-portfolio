/**
 * Mock Internet Identity context for running the app without ICP/dfx.
 * Use this entry point (main-standalone.tsx) when you want to run or deploy
 * the portfolio as a plain React app (e.g. Vercel, Netlify) without the
 * Internet Computer backend.
 */
import type { ReactNode, PropsWithChildren } from 'react';
import { createContext, createElement, useContext } from 'react';

export type Status = 'initializing' | 'idle' | 'logging-in' | 'success' | 'loginError';

export type InternetIdentityContext = {
    identity?: undefined;
    login: () => void;
    clear: () => void;
    loginStatus: Status;
    isInitializing: boolean;
    isLoginIdle: boolean;
    isLoggingIn: boolean;
    isLoginSuccess: boolean;
    isLoginError: boolean;
    loginError?: Error;
};

const ctx = createContext<InternetIdentityContext | undefined>(undefined);

export function useInternetIdentityStandalone(): InternetIdentityContext {
    const c = useContext(ctx);
    if (!c) throw new Error('StandaloneIdentityProvider is not present.');
    return c;
}

const value: InternetIdentityContext = {
    login: () => {},
    clear: () => {},
    loginStatus: 'idle',
    isInitializing: false,
    isLoginIdle: true,
    isLoggingIn: false,
    isLoginSuccess: false,
    isLoginError: false,
};

export function StandaloneIdentityProvider({ children }: PropsWithChildren<{ children: ReactNode }>) {
    return createElement(ctx.Provider, { value, children });
}
