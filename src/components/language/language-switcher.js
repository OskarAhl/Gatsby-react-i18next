import React, { Component } from "react"
import { navigate } from "gatsby"
import language_config from "../../../language-config"

const languages = Object.keys(language_config)

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props)
    const { language } = props
    this.state = { language: language }
  }

  handleSelect = e => {
    const selected_language = e.target.value
    const { language: current_language } = this.state
    const path = language_config[selected_language].is_default
      ? "/"
      : `/${selected_language}`

    navigate(path)
  }

  render() {
    return (
      <select
        name="languages"
        value={this.state.language}
        onChange={this.handleSelect}
      >
        {languages.map(lang => (
          <option key={lang} value={lang}>
            {language_config[lang].display_name}
          </option>
        ))}
      </select>
    )
  }
}

export default LanguageSwitcher
