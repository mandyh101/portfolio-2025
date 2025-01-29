import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`var(--font-inter)`, ...defaultTheme.fontFamily.sans],
        heading: [`var(--font-raleway)`, ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   primary: "var(--neutral-700)",
      //   secondary: "var(--neutral-500)",
      // },
      colors: {
        primary: "var(--neutral-700)",
        secondary: "var(--neutral-500)",
        // colour scales created at https://uicolors.app/create
        'seasalt-white': '#F7F6F6',
        night: '#0B0c10',
        // primary
        'sea-green': {
          '50': '#effefc',
          '100': '#c7fff8',
          '200': '#90fff1',
          '300': '#51f7ea',
          '400': '#1de4da',
          '500': '#04c8c1', //default
          '600': '#009f9d', //hover
          '700': '#05807f', //active
          '800': '#0a6465',
          '900': '#0d5454',
          '950': '#003033', // headings and text with some pizazz
        },
        // secondary
        aquamarine: {
          '50': '#eafff8',
          '100': '#ccffeb',
          '200': '#9efcdc',
          '300': '#60f5cc', //default
          '400': '#21e6b6', //hover
          '500': '#00cda1', //active
          '600': '#00a784', //probably never use
        },
        //accent
        'tropical-indigo': {
          '50': '#f6f6fd',
          '100': '#eff0fc',
          '200': '#e1e3f9',
          '300': '#c9caf4',
          '400': '#a9a8eb',
          '500': '#a09be7', //default
          '600': '#8477da', //hover
          '700': '#6e5ec8', //active
          '800': '#5240b5',
          '900': '#443695',
          '950': '#282164',
        },
        // greys
        'mono-grey': {
          '50': '#F8F9FA',
          '100': '#DDE2E5',
          '200': '#ACB5BD',
          '300': '#495057',
          '400': '#212429',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
