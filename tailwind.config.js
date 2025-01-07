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
        },
      },
    },
    plugins: [],
  };
  