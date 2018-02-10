let dev = process.env.NODE_ENV === 'development'
let prod = process.env.NODE_ENV === 'production'
if(dev){
  console.log("正处于开发模式：process.env.NODE_ENV === 'development'")
}

let env = {
  dev, prod
}

export default env