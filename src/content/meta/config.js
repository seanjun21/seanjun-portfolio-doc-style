const base = {
  name: 'Sean Jun',
  url: 'https://github.com/seanjun21'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - Software Engineer`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } Software Engineer`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'Software Engineer',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
