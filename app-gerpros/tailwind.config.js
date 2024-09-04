export const content = [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
];

export const plugins = [require('daisyui')];

export const daisyui = {
    themes: ['nord', 'dark', 'light'],
    defaultTheme: 'nord',
};
