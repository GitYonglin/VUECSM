import axios from 'axios'

const ajax = {
  get(url) {
    axios({
      method: 'get',
      url: url
    }).then(response => {
      return response.data
    })
  }
}

export default {
  ...ajax
}
