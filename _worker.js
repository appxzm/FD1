export default {
  async fetch(request, env) {
    const day1 = 'github.com'
    const day2 = 'raw.githubusercontent.com'
    const day2 = 'hostloc.com'
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      let day = new Date()
      if (day.getDay() % 3 === 0) {
        url.hostname = day1
      } else if (day.getDay() % 3 === 1) {
        url.hostname = day2
      } else {
        url.hostname = day3
      }
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
