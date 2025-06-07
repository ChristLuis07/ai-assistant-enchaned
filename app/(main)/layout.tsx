import React from 'react'
import Provider from './provider';

function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
    <div>{children}</div>
    </Provider>
  )
}

export default WorkspaceLayout
