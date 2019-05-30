import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <div class="container">
      <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <div class="form-group">
        <label for="exampleFormControlInput1">Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput2">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Your Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <input class="btn btn-primary" type="submit" value="Submit"></input>
      <p>Check me out @ <a href="https://www.linkedin.com/in/rj-nawara-533797162" target="blank">LinkedIn</a></p>
      </Layout>
    </div>
  )
}

export default ContactPage;