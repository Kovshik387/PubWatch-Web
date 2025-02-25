import { Container, Row, Col, Navbar } from 'react-bootstrap';

export default function Footer() {
    return (
        <Navbar style={FooterStyle} fixed='bottom' >
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>© 2024-2025 Fantokin. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

const FooterStyle: React.CSSProperties = {
    backgroundColor : "#c4c3eb",
    padding: '10px 0',
    height: "60px",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}