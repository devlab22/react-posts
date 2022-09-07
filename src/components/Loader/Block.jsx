import React from "react"
import ContentLoader from "react-content-loader"

const Block = (props) => (
  <ContentLoader 
    speed={2}
    width={800}
    height={200}
    viewBox="0 0 800 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="7" rx="3" ry="3" width="800" height="200" />
  </ContentLoader>
)

export default Block





