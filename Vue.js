new Vue({
  el: '#app',
  data () {
    return {
      message: '営業さんList',
      books: null
    }
  },
  mounted () {
    fetch('https://script.google.com/macros/s/AKfycbxP5p9lHBQym_GAxp-vqfwLzjFkBc12kQOIJHuH61RWRVo35Xq1xxgzN4l3uOzsTS3V/exec')
      .then(res => res.json())
      .then(
      result => {
        this.books = result
      },
      error => {
      }
    );
  }
})