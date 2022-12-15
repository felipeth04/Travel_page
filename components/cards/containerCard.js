import { Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card1 = () => {
    return (
        <Card>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={14} weight="bold" transform="uppercase" color="white">
                    MAYO/13/2022
                    </Text>
                    <Text h3 color="white">
                        Guatape (Antioquia)
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src="../img/guatape.jpg"
                objectFit="cover"
                width="100%"
                height={340}
                alt="Card image background"
            ></Card.Image>
            
        </Card>
    )
}

export const Card2 = () => {
    return (
        <Card css={{ w: "100%" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={14} weight="bold" transform="uppercase" color="white">
                        MAYO/22/2022
                    </Text>
                    <Text h3 color="white">
                        Doradal (P. Triunfo)
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src="../img/doradal.jpg"
                width="100%"
                height={340}
                objectFit="cover"
                alt="Card image background"
            />
        </Card>
    )
}

export const Card3 = () => {
    return (
        <Card css={{ bg: "$black", w: "100%" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={14} weight="bold" transform="uppercase" color="white">
                        JULIO/02/2022
                    </Text>
                    <Text h3 color="white">
                        Hacienda Napoles (P. Triunfo)
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src="../img/haceinda_nap.jpg"
                width="100%"
                height={340}
                objectFit="cover"
                alt="Card image background"
            />
        </Card>
    )
}

export const Card4 = () => {
    return (
        <Card css={{ w: "100%", h: "400px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={14} weight="bold" transform="uppercase" color="white">
                        Diciembre/04/2022
                    </Text>
                    <Text h2 color="white">
                        ComicCon 2022
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="../img/comic_con.jpg"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Text color="#000" size={12}>
                            La siguiente <strong>comic con 2023</strong> esta cerca
                        </Text>
                        <Text color="#000" size={12}>
                            Recibir una notificación
                        </Text>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <Button flat auto rounded color="secondary">
                                <Text
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    Notificación
                                </Text>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export const Card5 = () => {
    return (
        <Card css={{ w: "100%", h: "400px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={14} weight="bold" transform="uppercase" color="white">
                        Noviembre/12/2022
                    </Text>
                    <Text h2 color="white">
                        Alejandria (Antioquia)
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="../img/alejandria_ant.jpg"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt="Relaxing app background"
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Text color="#d1d1d1" size={12}>
                                    Ahora puedes revivir
                                </Text>
                                <Text color="#d1d1d1" size={12}>
                                    Los mejores recuerdos de esta gran aventrura.
                                </Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <Button
                                flat
                                auto
                                rounded
                                color="secondary"
                            >
                                <Text
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    REVIVIR MEMORIA
                                </Text>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}