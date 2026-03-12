import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CodeExamples() {
  const [copied, setCopied] = useState("");

  const pythonCode = `import requests

res = requests.get("https://dummistore-wuga.onrender.com/products")
print(res.json())`;

  const jsCode = `fetch("https://dummistore-wuga.onrender.com/products")
  .then(res => res.json())
  .then(data => console.log(data));`;

  const nodejsCode = `const axios = require("axios");

axios.get("https://dummistore-wuga.onrender.com/products")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });`;

  const phpCode = `<?php

$url = "https://dummistore-wuga.onrender.com/products";
$response = file_get_contents($url);

$data = json_decode($response, true);
print_r($data);

?>`;

  const goCode = `package main

import (
    "fmt"
    "io"
    "net/http"
)

func main() {
    res, err := http.Get("https://dummistore-wuga.onrender.com/products")
    if err != nil {
        panic(err)
    }

    body, _ := io.ReadAll(res.Body)
    fmt.Println(string(body))
}`;

  const copyCode = async (code, lang) => {
    await navigator.clipboard.writeText(code);
    setCopied(lang);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="mt-24 lg:-mt-6">
      <h1
        id="code-examples"
        className="text-2xl text-neutral-400 font-light lg:pt-30 -mb-12"
      >
        <span className="text-[#ff6044]">#</span> CODE EXAMPLES
      </h1>

      <div className="">
        {/* Python Example */}
        <div id="python" className="pt-24 space-y-3">
          <div className="flex gap-1">
            <span className="text-neutral-500 text-2xl font-extrabold">•</span>{" "}
            <h2 className="text-xl  text-white">Python</h2>
          </div>
          <div className="rounded-lg border border-neutral-800 overflow-hidden bg-neutral-950">
            <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900">
              {/* Terminal dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-neutral-400">Python</span>

                <button
                  onClick={() => copyCode(pythonCode, "python")}
                  className="text-xs text-neutral-400 hover:text-white border border-neutral-700 px-2 py-1 rounded"
                >
                  {copied === "python" ? (
                    <Check className="size-3 cursor-pointer" />
                  ) : (
                    <Copy className="size-3 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            <pre className="p-4 text-sm text-neutral-300 overflow-x-auto font-mono leading-relaxed">
              {pythonCode}
            </pre>
          </div>
        </div>

        {/* JavaScript Example */}
        <div id="javascript" className="pt-24 space-y-3">
          <div className="flex gap-1">
            <span className="text-neutral-500 text-2xl font-extrabold">•</span>{" "}
            <h2 className="text-xl  text-white">JavaScript</h2>
          </div>
          <div className="rounded-lg border border-neutral-800 overflow-hidden bg-neutral-950">
            <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-neutral-400">JavaScript</span>

                <button
                  onClick={() => copyCode(jsCode, "js")}
                  className="text-xs text-neutral-400 hover:text-white border border-neutral-700 px-2 py-1 rounded"
                >
                  {copied === "js" ? (
                    <Check className="size-3 cursor-pointer" />
                  ) : (
                    <Copy className="size-3 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            <pre className="p-4 text-sm text-neutral-300 overflow-x-auto font-mono leading-relaxed">
              {jsCode}
            </pre>
          </div>
        </div>

        {/* Node.js Example */}
        <div id="node.js" className="pt-24 space-y-3">
          <div className="flex gap-1">
            <span className="text-neutral-500 text-2xl font-extrabold">•</span>{" "}
            <h2 className="text-xl  text-white">Node.js</h2>
          </div>{" "}
          <div className="rounded-lg border border-neutral-800 overflow-hidden bg-neutral-950">
            <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-neutral-400">Node.js</span>

                <button
                  onClick={() => copyCode(nodejsCode, "node")}
                  className="text-xs text-neutral-400 hover:text-white border border-neutral-700 px-2 py-1 rounded"
                >
                  {copied === "node" ? (
                    <Check className="size-3 cursor-pointer" />
                  ) : (
                    <Copy className="size-3 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            <pre className="p-4 text-sm text-neutral-300 overflow-x-auto font-mono leading-relaxed">
              {nodejsCode}
            </pre>
          </div>
        </div>

        {/* php Example */}
        <div id="php" className="pt-24 space-y-3">
          <div className="flex gap-1">
            <span className="text-neutral-500 text-2xl font-extrabold">•</span>{" "}
            <h2 className="text-xl text-white">php</h2>
          </div>
          <div className="rounded-lg border border-neutral-800 overflow-hidden bg-neutral-950">
            <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-neutral-400">php</span>

                <button
                  onClick={() => copyCode(phpCode, "php")}
                  className="text-xs text-neutral-400 hover:text-white border border-neutral-700 px-2 py-1 rounded"
                >
                  {copied === "php" ? (
                    <Check className="size-3 cursor-pointer" />
                  ) : (
                    <Copy className="size-3 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            <pre className="p-4 text-sm text-neutral-300 overflow-x-auto font-mono leading-relaxed">
              {phpCode}
            </pre>
          </div>
        </div>

        {/* Go Section */}
        <div id="go" className="pt-24 space-y-3">
          {/* Heading */}
          <div className="flex gap-1">
            <span className="text-neutral-500 text-2xl font-extrabold">•</span>
            <h2 className="text-xl text-white">Go</h2>
          </div>
          {/* Code Block */}
          <div className="rounded-lg border border-neutral-800 overflow-hidden bg-neutral-950">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-neutral-400">Go</span>

                <button
                  onClick={() => copyCode(goCode, "go")}
                  className="text-xs text-neutral-400 hover:text-white border border-neutral-700 px-2 py-1 rounded"
                >
                  {copied === "go" ? (
                    <Check className="size-3 cursor-pointer" />
                  ) : (
                    <Copy className="size-3 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            {/* Code */}
            <pre className="p-4 text-sm text-neutral-300 overflow-x-auto leading-relaxed">
              {goCode}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
