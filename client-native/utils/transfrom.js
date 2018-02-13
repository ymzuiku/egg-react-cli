import {Platform} from 'reactxp'

let web = Platform.getType() === 'web'
function transfrom(v = {
  perspective: 500,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  scale:1,
  scaleX: 1,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  none:false,
}) {
  let {perspective=500, rotateX=0, rotateY=0, rotateZ=0, scale=1, scaleX, scaleY, translateX=0, translateY=0, none=false} = v
  scaleX = scaleX || scale
  scaleY = scaleY || scale
  if(none){
    return 'none'
  }
  else if(web){
    return `perspective(${perspective}px) translateX(${translateX}pt) translateY(${translateY}pt) scaleX(${scaleX}) scaleY(${scaleY}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
  } else {
    return [{perspective}, {translateX}, {translateY}, {scaleX}, {scaleY}, {rotateX:rotateX+'deg'}, {rotateY:rotateY+'deg'}, {rotateZ:rotateZ+'deg'}]
  }
}
// translateX(${translateX}pt) translateY(${translateY}pt) 
// scaleX(${scaleX}deg) scaleY(${scaleY}deg)
// rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ})
export default transfrom