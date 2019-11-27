import React from "react"
import { Link as GatsbyLink } from "gatsby"
import language_config from "../../../language-config"

export const LocalizedLink = ({ to, language, ...props }) => {
  // If it's the default language, don't do anything
  // If it's another language, add the "path"
  const { is_default, path } = language_config[language]
  const path_to = is_default ? to : `/${path}/${to}`

  return <GatsbyLink {...props} to={path_to} />
}
