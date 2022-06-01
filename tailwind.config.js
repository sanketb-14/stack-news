module.exports = {
  daisyui:{
    themes:["lemonade","night"]
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container:{
      center:true,
      padding:'2rem'
    }
  },
  plugins: [require("daisyui")],
  

};
