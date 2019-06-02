import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
  return (
    <div className="container">
      <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Hi! I'm a very experienced Enterprise developer who  has moved to the web!

                    I enjoy programming with React, Gatsby, GraphQL, Ruby on Rails and node.js and I'm trying to learn more every day.

                    If you have anything I can help you with, please feel free to contact me below!

                    Thanks!</p>

        <form action="https://formspree.io/rjnawara@gmail.com" method="POST" >
          <div className={contactStyles.formStyle1}>
            <div className={contactStyles.required}><input type="text" name="name" placeholder="Name" /></div>
            <div className={contactStyles.required}><input type="email" name="email" placeholder="Email" /></div>
            <div className={contactStyles.required}>
              <textarea name="message" placeholder="Message"></textarea>
            </div>
            <div >
              <input type="submit" value="Send Message" />
            </div>
          </div>
        </form>

      <p>Check me out @ <a href="https://www.linkedin.com/in/rj-nawara-533797162" target="blank">LinkedIn</a></p>
      </Layout>
    </div>
  )
}

export default ContactPage;