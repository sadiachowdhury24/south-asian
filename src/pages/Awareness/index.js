import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import { Container } from "react-bootstrap";


const Awareness = () => {
    return (
        <div id = "awareness">

            <h4> Many south asians are not aware of how important the mental health issues are. 
                Check these articles out to learn more about mental health issues in our community! </h4>
            <Card class = "card" border="primary" style={{ width: '40rem'}}>
                <Card.Header>The Taboo of Mental Illness in the South Asian American Community</Card.Header>
                 <Card.Body>
                 <Card.Img variant="top" src= '/images/awareness1.png' />
                    <Card.Title>By Jyothsna Bhat, PsyD</Card.Title>
                    <Card.Text>
                       
                    “I can’t tell my parents about this.” <br></br>

“There’s no such thing as depression, it’s just all in your head.” <br></br>

“I should be able to be okay. This is a sign of weakness.” <br></br>

These are just some of the statements I hear from South Asian Americans in my psychotherapy practice.  

              </Card.Text>
              <Button  variant="outline-info">
                  <a href = "https://www.findapsychologist.org/psychologist-spotlight-the-taboo-of-mental-illness-in-the-south-asian-american-community-by-dr-jyothsna-s-bhat/" >
                      Click to read more</a>
          </Button>

             </Card.Body>
            </Card>

            <br></br>

            {/* card 2 */}
            <Card class = "card" border="primary" style={{ width: '40rem' }}>
                <Card.Header>Let's Talk about Mental Health in South Asian Communities</Card.Header>
                 <Card.Body>
                 <Card.Img variant="top" src= '/images/awareness2.png' />
                    <Card.Title>By Dr. Gursharan Virdee, CAMH Researcher</Card.Title>
                    <Card.Text>
                    As a researcher, clinician and immigrant woman of colour, it’s been encouraging to see diverse experiences of ethnic communities included in important conversations about mental health as of late. 
                    These stories often influence the ways in which mental health is understood at a grass roots level, and ultimately how our services and approaches are designed to meet specific needs.
              </Card.Text>
              <Button variant="outline-info">

              <a href = "https://www.camh.ca/en/camh-news-and-stories/lets-talk-about-mental-health-in-south-asian-communities" >
                      Click to read more</a>
              
              </Button>
              
             </Card.Body>
            </Card>
            <br></br>

            {/* card 3 */}
            <Card border="primary" style={{ width: '40rem' }}>
                <Card.Header>The Silence About Mental Health in South Asian Culture Is Dangerous</Card.Header>
                 <Card.Body>
                 <Card.Img variant="top" src= '/images/awareness3.png' />
                    <Card.Title>By Priya-Alika EliasD</Card.Title>
                    <Card.Text>
                    There is little data on depression in the South Asian community. According to the Asian and Pacific Islander American Health Forum (APIAHF), South Asian Americans—especially those between the ages of 15-24—were more likely to exhibit depressive symptoms. 
                    APIAHF report found that there was a higher rate of suicide among young South Asian American women than the general U.S. population.
              </Card.Text>
              <Button variant="outline-info">
              <a href = "https://newrepublic.com/article/122892/silence-mental-health-south-asian-culture-dangerous" >
                      Click to read more</a>
              </Button>
             </Card.Body>
            </Card>
            <br></br>

            {/* card 4 */}
            <Card border="primary" style={{ width: '40rem' }}>
                <Card.Header>The silent mental health crisis among South Asian immigrants in US, UK is crying to be addressed</Card.Header>
                 <Card.Body>
                 <Card.Img variant="top" src= '/images/awareness4.png' />
                    <Card.Title>By Amanat Khullar</Card.Title>
                    <Card.Text>
                    Growing up in Texas, Priya Tahim felt like she didn’t have a voice. A second-generation immigrant and the middle daughter of South Asian and African parents, Tahim said sharing feelings was an alien concept in her household, causing her to struggle with her emotions.


              </Card.Text>
              <Button variant="outline-info">
              <a href = "https://scroll.in/global/971366/the-silent-mental-health-crisis-among-south-asian-immigrants-in-the-us-is-crying-to-be-addressed" >
                      Click to read more</a>
              </Button>
             </Card.Body>
            </Card>
            <br></br>
        </div>
    )
}

export default Awareness
