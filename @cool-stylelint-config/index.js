module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier",
    "stylelint-config-prettier-scss"
  ],
  "overrides": [
    {
      "files": ["src/**/*.vue", "public/**/*.html"],
      "customSyntax": "postcss-html"
    }
  ],
  "rules": {
    "selector-class-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["deep"],
        "severity": "warning"
      }
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        "ignorePseudoElements": ["v-deep"]
      }
    ],
    "scss/dollar-variable-pattern": [
      "^(-?[a-zA-Z][a-zA-Z0-9]*)(-[a-zA-Z0-9]+)*$"
    ],
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": [
      true,
      {
        "ignoreFontFamilies": ["Microsoft YaHei", "iconfont"]
      }
    ]
  }
}