import {css} from 'styled-components'

const sizes = {
  pc: 992,
  pad: 768,
  phone: 376
}
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export {
  media
}