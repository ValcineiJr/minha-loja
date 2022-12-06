import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
