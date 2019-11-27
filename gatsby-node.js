const language_config = require(`./language-config.js`)

const translations_cache = {}

// Based upon https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // First delete the incoming page that was automatically created by Gatsby
  // So everyth ing in src/pages/
  deletePage(page)

  Object.keys(language_config).map(lang => {
    // Use the values defined in "locales" to construct the path
    const { path, is_default } = language_config[lang]
    const localized_path = is_default ? page.path : `${path}${page.path}`

    if (!translations_cache[lang]) {
      const translation_json = require(`./src/translations/${lang}`)
      translations_cache[lang] = translation_json
    }
    return createPage({
      // Pass on everything from the original page
      ...page,
      // Remove trailing slash from page.path (e.g. "/de/")
      path: localized_path,
      // Pass in the locale as context to every page
      context: {
        ...page.context,
        locale: lang,
        localeResources: translations_cache[lang],
      },
    })
  })
}
