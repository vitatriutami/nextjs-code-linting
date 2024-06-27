"use client";

import { useState } from "react";

export default function Home() {
  // readibility apa yang tidak sedang kita baca: di depan tambah underscore
  // tidak dipakai secara total: underscore
  const [_, setState] = useState("");

  function doSomething(_: unknown, arg: string) {
    return "Hello! Do something!" + arg;
  }

  doSomething(null, "hello");

  // data static
  const text = "text";

  if (text === "text") {
    // do something
  }

  return <div>Page</div>;
}
