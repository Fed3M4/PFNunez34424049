import { Container } from "react-bootstrap";
import logo from "../../assets/img/Logo-mama.png";

const Nosotros = () => {
  return (
    <Container>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <img src={logo} alt="" style={{ backgroundColor: "whitesmoke" }} />
        <h2 className="text-center">Tienda de bebes y niños Lola</h2>
        <p>
          Somos una tienda especializada en bebes y niños que cuenta con más de
          25 años de trayectoría
        </p>
      </div>
    </Container>
  );
};

export { Nosotros };
