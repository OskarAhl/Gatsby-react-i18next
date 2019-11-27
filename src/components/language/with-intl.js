import React from "react"
import { I18nextProvider } from "react-i18next"
import i18next from "./config"

// HOC that pre renders a page with the translated language (during build)
// Without this HOC the page will be translated on the client side dynamically
export const WithIntl = () => WrappedComponent => {
  const WrapWithIntl = ({ pageContext }, props) => {
    const addResources = (pc, language) => {
      // passed down from createPages(...) in gatsby-node.js
      if (pc && pc.localeResources) {
        if (!i18next.hasResourceBundle(language, "translations")) {
          // We only want to add the es.json translations for our /es pages
          i18next.addResourceBundle(language, "translations", {
            ...pc.localeResources,
          })
        }
      }
    }

    if (pageContext) {
      const current_language = pageContext.locale
      if (current_language && current_language !== i18next.language) {
        addResources(pageContext, current_language)
        i18next.changeLanguage(current_language)
      }
    }
    return (
      <I18nextProvider i18n={i18next}>
        <WrappedComponent {...props} language={i18next.language} />
      </I18nextProvider>
    )
  }
  return WrapWithIntl
}
