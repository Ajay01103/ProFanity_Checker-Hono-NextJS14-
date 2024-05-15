"use client"

import { Code } from "./code"

const codeBlock = `const res = await fetch('https://vector.profanity.dev', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message }),
})`

const CodeSection = () => {
  return <Code code={codeBlock} />
}

export default CodeSection
