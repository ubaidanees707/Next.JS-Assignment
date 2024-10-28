import Link from 'next/link'
import style from "../service/service.module.css";

const ServicePage = () => {
  return (
    <div className ={style.container}>
      <h1 className ={style.header}>Service Page</h1>
      
      <ul className= {style.list}>
        <li><Link href="/service/graphic-design">This is graphic designing page</Link></li>
        <li><Link href="/service/video-editing"> This is video editing page</Link></li>
      </ul>
    </div>
  )
}

export default ServicePage
