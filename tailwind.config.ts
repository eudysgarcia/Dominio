// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "#f5741c",
//         foreground: "#131424",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;

// import { config } from "process";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#3b82f6",
        darkBg: "#0a0a0a",
        newbrand: "#3b82f6",
        lastn: "#F0F0F0",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(23, 23, 23, 0.98) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
