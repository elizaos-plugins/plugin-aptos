import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  sourcemap: true,
  clean: true,
  format: ["esm"],
  dts: {
    resolve: false, // Don't try to resolve external types
  },
  external: [
    "node",
    "dotenv", // Externalize dotenv to prevent bundling
    "fs", // Externalize fs to use Node.js built-in module
    "path", // Externalize other built-ins if necessary
    "@reflink/reflink",
    "@node-llama-cpp",
    "https",
    "http",
    "agentkeepalive",
    "safe-buffer",
    "base-x",
    "bs58",
    "borsh",
    "@solana/buffer-layout",
    "stream",
    "buffer",
    "querystring",
    "amqplib",
    "zod",
    "@elizaos/core",
  ],
});
