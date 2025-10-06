/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        waveMove: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // 💫 Nueva animación de aparición suave (para modales)
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        gradientMove: "gradientMove 15s ease infinite",
        waveMove: "waveMove 6s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        wave: "wave 8s linear infinite",
        waveSlow: "wave 12s linear infinite",
        waveSlower: "wave 20s linear infinite",
        // 💫 Nueva animación fadeIn
        fadeIn: "fadeIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
