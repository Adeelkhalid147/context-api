"use client";
import { useContext } from "react";
import { CountContext } from "./context";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const obj = useContext(CountContext);
  console.log(obj);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-3xl">Context API</h1>
      <div className="flex items-center justify-center my-6">
        <button
          onClick={() => obj.setCount(++obj.count)}
          className="group rounded-lg text-2xl border-4 px-3 py-4"
        >
          Increment
        </button>
        <p className="text-4xl font-bold mx-6">{obj.count}</p>
        <button
          onClick={() => obj.setCount(--obj.count)}
          className="group rounded-lg text-2xl border-4 px-3 py-4"
        >
          Decrement
        </button>
      </div>
      <p>
        <Link href={"/test"}>Test Page Link</Link>
      </p>

      <p>
        NOTE: src/app/countProvider.tsx && src.app/layout.tsx && src/app/test &&
        src/app/context
      </p>  
    </div>   
  );
}
