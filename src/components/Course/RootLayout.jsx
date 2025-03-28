import React from "react";

export default function RootLayout({ children }) {
  return <div className="min-h-screen bg-background">{children}</div>;
}