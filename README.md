## 🚀 Example setup of react-i18next with Gatsby

- Dynamically generates language pages from your pages
- SEO optimized pre-rendered translations
- Root path in language of your choosing
  e.g:

```
// English as default language
www.myawesomesite.com
www.myawesomesite.com/about
www.myawesomesite.com/contact

// for our Spanish friends:
www.myawesomesite.com/es
www.myawesomesite.com/es/about
www.myawesomesite.com/es/contact

// for our French friends:
www.myawesomesite.com/fr
www.myawesomesite.com/fr/about
www.myawesomesite.com/fr/contact
```

### Components:

Inside `components/language` you can find:

- Language switcher
- LocalizedLink
- HOC for pre-rendering

### Translation source files:

- Can be found inside `src/translations`

### Setup and config:

- Check `language-config.js` for how to setup paths and languages.
