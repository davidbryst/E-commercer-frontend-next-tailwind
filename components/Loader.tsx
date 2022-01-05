const myLoader = ({ src, width, height } : any) => {
  return `/images/${src}?w=${width}?h=${height}`
}


export default myLoader