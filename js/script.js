const { createApp } = Vue

createApp({
  data() {
    return {
      message: "Ciao, sono VUE!",
      img: `<img src="https://www.easeout.co/images/uploads/vue-logo.jpeg" alt="Vue Logo">`
    }
  }
}).mount('#app')


console.log("ciao")