"use client";
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-theme";
export  function Providers({children}) {
  return (
    <NextUIProvider >
           <NextThemesProvider attribute="system" defaultTheme="class">
             {children}
           </NextThemesProvider>
    </NextUIProvider>
  )
}