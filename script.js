const app = Vue.createApp({
  data() {
    return {
      slideIndex: 0,
      images: [
        "\images\esportswork#1.jpeg",
        "images/esportswork#2.jpeg",
        "images/esportswork#3.png",
        "images/esportswork#4.jpeg",
        "images/esportswork#5.jpeg",
        "images/esportswork#6.jpeg",
        "images/esportswork#7.jpeg",
        "images/esportswork#8.jpeg",
        "images/esportswork#9.jpeg"
      ],
      merchItems: [
        {
          name: "Jags Team Jersey",
          image: "images/placeholderimage.jpg",
          price: "£30.00",
          buyLink: "https://blader1784.github.io/website/shop.html"
        },
        {
          name: "Jags Hoodie",
          image: "images/placeholderimage.jpg",
          price: "£40.00",
          buyLink: "https://blader1784.github.io/website/shop.html"
        },
        {
          name: "Jags Hoodie (Design 2)",
          image: "images/placeholderimage.jpg",
          price: "£40.00",
          buyLink: "https://blader1784.github.io/website/shop.html"
        }
      ]
    };
  },
  methods: {
    prevSlide() {
      this.slideIndex--;
      if (this.slideIndex < 0) this.slideIndex = this.images.length - 3;
    },
    nextSlide() {
      this.slideIndex++;
      if (this.slideIndex > this.images.length - 3) this.slideIndex = 0;
    }
  },
  computed: {
    trackStyle() {
      return {
        transform: `translateX(-${this.slideIndex * 33.333}%)`
      };
    }
  }
});

app.mount("#app");
