import SectionItemList from '../components/SectionItems/SectionItemList'
import { Row, Col, Container } from 'react-bootstrap'
import ArtistPreview from '../components/home/ArtistPreview'
import { UpcomimgEventSummary } from '../components/upcomingEvents/UpcomimgEventSummary'


export const Home = () => {

    return (
        <Container>
            <Row className='responsive-Row'>
                <Col sm="8" md="8" lg="8">
                    <Row>
                        <h4 className='title home-h5 mx-2 mt-5 mb-3'> The Artist </h4><br />
                    </Row>
                    <ArtistPreview />
                </Col>
                <Col sm="9" md='8' lg='3'>
                    <Row>
                        <h4 className='title home-h5 mx-2 mt-5 mb-3'>Upcoming Events</h4><br />
                    </Row>
                    <UpcomimgEventSummary />
                </Col>
            </Row>

            <h4 className='home-h5 mx-2 mt-5 mb-3'> Works </h4><br />
            <Col  >
                <Row className="responsive-Row " sm="1" md="2" lg="3">
                    <SectionItemList />
                </Row>
            </Col>
        </Container>


    )
}

