export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    let proxyDomains = ['raw.githubusercontent.com', 'github.com', 'hostloc.com'];
    if (proxyDomains.some(domain => url.pathname.startsWith('/') && url.hostname === domain)) {
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
