'use client'
import Image from "next/image";
import TSHeader from "./ui/TSHeader";
import { useState, createContext } from "react";

//Should useContext / state here or in the page to manage the title in the layout
//https://react.dev/reference/react/useContext#updating-data-passed-via-context

//https://nextjs.org/docs/app/building-your-application/rendering
export default function Home() {
  const MainContext = createContext("Main");
  const [pageHeader, setPageHeader] = useState("Home");
  return (
    <MainContext.Provider value={pageHeader}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Typical Todo Application
        - Created in Next.js
        - Featuring: 
          - TailwindCSS
          - TypeScript
      </main>
    </MainContext.Provider>
  );
}
