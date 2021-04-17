module.exports = {
      "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "../__mocks__/CSSStub.js",
        "\\.(scss|sass|css)$": "identity-obj-proxy"
      },
      transform: {
        '^.+\\.js$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
      }
    };