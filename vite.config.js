// // import { defineConfig } from "vite";
// // import react from "@vitejs/plugin-react";

// // export default defineConfig({
// // plugins: [react()],
// // });

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'import.meta.env.VITE_GOOGLE_CLIENT_ID': JSON.stringify(
//       process.env.VITE_GOOGLE_CLIENT_ID || ''
//     )
//   }
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "node:dns";

// Force Vite to use 'localhost' instead of 127.0.0.1
// This matches your Google Console "Authorized Origins" exactly
dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    // Fixes the "Cross-Origin-Opener-Policy" error
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
      "Cross-Origin-Embedder-Policy": "unsafe-none",
    },
  },
  define: {
    "import.meta.env.VITE_GOOGLE_CLIENT_ID": JSON.stringify(
      process.env.VITE_GOOGLE_CLIENT_ID || ""
    ),
  },
});
