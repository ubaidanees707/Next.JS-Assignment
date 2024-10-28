import Link from 'next/link'
import style from "../contact/contact.module.css";

const ContactPage = () => {
  return (
    <div className ={style.container}>
     <h1 className= {style.header}>This is Contact Page</h1>
     
     <ul>
      <li><Link href="/">Go to Home Page</Link></li>
      <li><Link href="about">Go to Contact Page</Link></li>
      <li><Link href="service">Go to Service Page</Link></li>

     </ul>
    </div>
  )
}

export default ContactPage
