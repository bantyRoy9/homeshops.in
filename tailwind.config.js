module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        boxShadow: {
          'custom-primary-default/20': '0 4px 6px -1px rgba(0, 0, 0, 0.2)', // Example shadow
          'custom-primary-default/80': '0 6px 10px -1px rgba(0, 0, 0, 0.8)', // Example for hover state
          'shadow-custom-primary-default/20':'0 6px 10px -1px rgba(0, 0, 0, 0.8)', // Example for hover state
        },
        colors: {
          'custom-primary-dark': '#123456', // Replace with your desired color value
          'custom-primary-default': '#123456',
          'primary-heading-md': '#1a202c',
          'primary-heading-sm': '#1a202c',
        },
        fontWeight: {
          'heading-bold': '700', // Define custom font weight
        },
        fontSize: {
          'primary-heading-lg': ['2rem', { lineHeight: '3rem' }], // Example: 40px font size with 48px line-height
          'primary-heading-md': ['0.89rem', { lineHeight: '1.4rem' }], // Example: 40px font size with 48px line-height
          'primary-heading-sm': ['0.73rem', { lineHeight: '.9rem' }], // Example: 40px font size with 48px line-height
          'secondary-heading': ['1.75rem', { lineHeight: '2.25rem' }], // Example: 28px font size with 36px line-height
          'custom-small': ['0.875rem', { lineHeight: '1.25rem' }], // Example: 14px font size with 20px line-height
        },
      },
    },
    plugins: [],
  };
  