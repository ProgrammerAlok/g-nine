module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", 
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        yellow: { 900: "#f08125", "900_04": "#ff8725" },
        gray: {
          100: "#f9f6f1",
          "300_04": "#dbdbdb",
          "800_01": "#4f4f4f",
          "500_01": "#a5a5a5",
          "500_05": "#959595",
          "100_02": "#f7f4ef",
          "600_02": "#7f7f7f",
          "700_01": "#666666",
          "900_e5": "#1e1e1ee5",
        },
        white: { A700: "#ffffff" },
        blue_gray: { "900_01": "#333333" },
        orange: { 400: "#ff8d2d", A200_01: "#f29140" },
        amber: { A700: "#ffae00" },
        black: { 900: "#010f1c", "900_01": "#000000" },
        red: { A400: "#eb0029", A400_75: "#eb002975" },
        yellow_900_05: "#e67f29",
        amber_A700_3f: "#ffae003f",
      },
      boxShadow: { bs: "inset 0px 0px  62px 0px #0000004c" },
      fontFamily: { inter: "Inter", roboto: "Roboto", rubik: "Rubik", lora: "Lora", poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #f08125,#00000000)",
        gradient1: "linear-gradient(270deg, #f08125,#d9d9d900)",
        imgblack1: "url('/public/images/img_div_bg_image.png')",
        imgtransbg1: "url('/public/images/faqs-bg.png')",
      },
      opacity: { 0.9: 0.9, 0.3: 0.3, 0.5: 0.5, 0.2: 0.2 },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
