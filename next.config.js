const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");
const fetch = require("isomorphic-unfetch");
module.exports = withCSS(
  withFonts({
    async exportPathMap() {
      // we fetch our list of posts, this allow us to dynamically generate the exported pages
      const response = await fetch("https://strapi.hulea.org/webs");
      const postList = await response.json();

      // tranform the list of posts into a map of pages with the pathname `/post/:id`
      const pages = postList.reduce(
        (pages, post) =>
          Object.assign({}, pages, {
            [`/work/${post.URL}`]: {
              page: "/work",
              query: { id: post.URL }
            }
          }),
        {}
      );

      // combine the map of post pages with the home
      return Object.assign({}, pages, {
        "/": { page: "/" },
        "/about": { page: "/about" },
        "/work": { page: "/work" }
      });
    }
  })
);
