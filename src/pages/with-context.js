import React from "react"
function NoData({ pageContext }) {
  return(
  <section>
    <h1>{pageContext.title}</h1>
    <p>
      No data was required to asdf this page — it’s just a React component!
    </p>
  </section>
  )
}
export default NoData