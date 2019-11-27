import React from "react"
import { LocalizedLink } from "../components/language/localized-link"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { WithIntl } from "../components/language/with-intl.js"
import { localize } from "../components/language/config"
import LanguageSwitcher from "../components/language/language-switcher"

const IndexPage = ({ language }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{localize("Hi people")}</h1>
      <LanguageSwitcher language={language} />
      <p>{localize("Welcome to your new Gatsby site.")}</p>
      <p>{localize("Now go build something great.")}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <LocalizedLink language={language} to="/page-2/">
        {localize("Go to page 2")}
      </LocalizedLink>
    </Layout>
  )
}

export default WithIntl()(IndexPage)
