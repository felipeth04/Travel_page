import { Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card1 = () => {
    return (
        <Card>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        What to watch
                    </Text>
                    <Text h4 color="white">
                        Stream the Acme event
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src="https://i.pinimg.com/originals/24/b4/19/24b419dbfc9572c27aeb25f4212b2751.jpg"
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
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        Plant a tree
                    </Text>
                    <Text h4 color="white">
                        Contribute to the planet
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src="https://wallpaperaccess.com/full/3665285.png"
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
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        Supercharged
                    </Text>
                    <Text h4 color="white">
                        Creates beauty like a beast
                    </Text>
                </Col>
            </Card.Header>
            <Card.Image
                src="https://static.vecteezy.com/system/resources/previews/002/042/904/original/night-landscape-with-empty-highway-and-forest-vector.jpg"
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
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        New
                    </Text>
                    <Text h3 color="black">
                        Acme camera
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="https://img.freepik.com/vector-gratis/ciudad-moderna-noche-horizonte-neon-dibujos-animados_1441-3160.jpg?w=2000"
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
                            Available soon.
                        </Text>
                        <Text color="#000" size={12}>
                            Get notified.
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
                                    Notify Me
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
                    <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                        Your day your way
                    </Text>
                    <Text h3 color="white">
                        Your checklist for better sleep
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="https://img.freepik.com/vector-premium/fondo-playa-verano-costa-arena-costa-mar-palmeras-vocacion-costera-viajes-dibujos-animados-ilustracion-fondo_102902-1407.jpg?w=2000"
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
                            <Col span={3}>
                                <Card.Image
                                    src="https://nextui.org/images/breathing-app-icon.jpeg"
                                    css={{ bg: "black", br: "50%" }}
                                    height={40}
                                    width={40}
                                    alt="Breathing app icon"
                                />
                            </Col>
                            <Col>
                                <Text color="#d1d1d1" size={12}>
                                    Breathing App
                                </Text>
                                <Text color="#d1d1d1" size={12}>
                                    Get a good night's sleep.
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
                                css={{ color: "#94f9f0", bg: "#94f9f026" }}
                            >
                                <Text
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    Get App
                                </Text>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}