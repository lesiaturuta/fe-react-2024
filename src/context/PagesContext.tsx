import React from 'react';

export const PagesContext = React.createContext<{ page: number; maxPages: number }>({ page: 0, maxPages: 0 });
