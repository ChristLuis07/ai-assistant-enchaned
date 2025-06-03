"use client"

import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextThemesProvider
    attribute="class"
    defaultTheme='system'
    enableSystem
    disableTransitionOnChange>
    <div>{children}</div>
    </NextThemesProvider>
  )
}

export default Provider