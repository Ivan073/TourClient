import {Button, Icon, Parallax, Row, Col, Card, CardTitle} from 'react-materialize'

const Home = (props) =>{
    return <>
    <Parallax
    image={<img alt="" src="http://materializecss.com/images/parallax1.jpg"/>}
    options={{
      responsiveThreshold: 0
    }}
  />
  <div className="section white">
    <div className="row container">
      <h2 className="header">
       Туры по всему миру
      </h2>
      <p className="grey-text text-darken-3 lighten-3">
        Путевки в Египет, Турцию, Грузию
      </p>
    </div>
  </div>

    <a href = "/tours"><Button>Все туры</Button></a>
  <Row>
  <Col
    m={4}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="/tours/Egypt">Просмотреть туры</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={`${process.env.PUBLIC_URL}/images/egypt.webp`}>Египет</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Путевки в Египет
    </Card>
  </Col>

  <Col
    m={4}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="/tours/Turkey">Просмотреть туры</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={`${process.env.PUBLIC_URL}/images/turkey.webp`}>Турция</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Путевки в Турцию
    </Card>
  </Col>

  <Col
    m={4}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="/tours/Georgia">Просмотреть туры </a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={`${process.env.PUBLIC_URL}/images/georgia.jpg`}>Грузия</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Путевки в Грузию
    </Card>
  </Col>
</Row>
    </>;
}

export default Home;