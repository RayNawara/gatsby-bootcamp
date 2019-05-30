import React from "react";
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
    <Head title="Home" />
      <h1>Hello!</h1>
      <h2>I'm RJ Nawara, a full-stack developer living in the sunny Tampa area.</h2>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage;