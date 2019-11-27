import React from "react"
import { LocalizedLink } from "../components/language/localized-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { WithIntl } from "../components/language/with-intl.js"
import { localize } from "../components/language/config"

const SecondPage = ({ language }) => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>{localize("Hi from the second page")}</h1>
      <p>{localize("Welcome to page 2")}</p>
      <LocalizedLink language={language} to="/">
        {localize("Go back to the homepage")}
      </LocalizedLink>
    </Layout>
  )
}

export default WithIntl()(SecondPage)
