"use client";

import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1>Codex is alive</h1>
      <button
        type="button"
        onClick={() => setCount((current) => current + 1)}
        style={{ width: "fit-content", padding: "0.5rem 1rem" }}
      >
        Count: {count}
      </button>
    </main>
  );
}
