import * as React from "react"
import { Link } from "gatsby"
import CatFacts from "../components/cat-facts"
import { Site_header } from "../components/styled_components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CatPage = () => (
  <Layout>
    <Seo title="Cat Facts" />
    <Site_header>Random Cat Facts</Site_header>
    <p>Welcome to the Cat Facts Page</p>
    <CatFacts/>
    <Link to="/dog-page/">Go to Dog Pictures</Link> <br />
    <Link to="/">Go Back to the Homepage</Link> <br />    
  </Layout>
)
1
export default CatPage
