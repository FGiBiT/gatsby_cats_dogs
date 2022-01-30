import * as React from "react"
import { Link } from "gatsby"
import DogImg from "../components/dog-img"
import { Site_header } from "../components/styled_components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DogPage = () => (
  <Layout>
    <Seo title="Dog Pictures" />
    <Site_header>Random Dog Pictures</Site_header>
    <p>Welcome to the Dog Pictures Page</p>
    <DogImg/>
    <Link to="/cat-page/">Go to Cat Facts</Link> <br />
    <Link to="/">Go Back to the Homepage</Link> <br />
  </Layout>
)

export default DogPage
