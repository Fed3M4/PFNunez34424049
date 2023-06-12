import { Container } from "react-bootstrap";
import bautismo from "../../assets/img/bautismos.jpg";
import escuela from "../../assets/img/escuela.jpg";

const Inicio = ({ greeting }) => {
  return (
    <Container>
      <main
        className="d-flex justify-content-evenly align-items-center"      >
        <div>
          <img src={bautismo} alt="Bautismos" style={{ width: "18rem" }} />
          <h4>Bautismos, fiestas y eventos</h4>
        </div>
        <div>
          <img
            src={escuela}
            alt="Escuela"
            style={{ width: "18rem", height: "12rem" }}
          />
          <h4>Ropa escolar para niños y niñas</h4>
        </div>
      </main>
    </Container>
  );
};
export { Inicio };
