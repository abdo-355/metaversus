import { FC, ReactNode } from 'react';

import '@/styles/globals.css';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <title>Metaversus</title>

    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
