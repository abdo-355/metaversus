import { FC, ReactNode } from 'react';

import '@/styles/globals.css';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <title>Metaversus</title>
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
