import Head from 'next/head'
import Link from 'next/link'
import ImageCarousel from '../components/ImageCarousel'
export default function Home() {
  return (
    <div className='main-container'>
      <Head>
        <title>PDC | IIT Gandhinagar</title>
        <meta name="description" content="Professional Development Council" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <header id="head">
          <div className="banner-content">
            <h1>Professional Development Council</h1>
          </div>
        </header>


        <div className="page-container">

          <div className="page-section">
            <div className="about-content">
              <div className="section-heading">
                <h2>Professional Development Council</h2>
              </div>

              <p>Our mission is to provide the student body with a structured framework for their overall professional development. We work towards spreading awareness about the importance of professional skill development and creating avenues for students to enhance their career prospects. Our principles are based on assessing the current performance of IITGN students in professional aspects and creating a platform for improvement. We also strive to promote a healthy culture of professional skill development among our students. Additionally, we act as a communication medium between the <strong> Career Development Services (CDS)</strong> and the student body, facilitating feedback from companies to students and addressing student concerns with the CDS. Join us in your journey towards a successful and fulfilling professional career!</p>


            </div>
          </div>



          <div className="section-heading">

          </div>

          <div className="announcements">
            <h2>Announcements <i className="fa fa-bullhorn" aria-hidden="true"></i></h2>
            {/* <ImageCarousel /> */}
            <div className="announcements-btn">
              <ImageCarousel/>
              
                <Link href="/"><button className='read-button'>Read More</button></Link>

            </div>


          </div>






        </div>

        




      </main>


    </div>
  )
}
