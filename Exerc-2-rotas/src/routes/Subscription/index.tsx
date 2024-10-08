import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/Button";
import "../Subscription/styles.css";

export default function Subscription() {
  return (
    <main>
      <section>
        <div className="container">
            <h1>Faça sua inscrição!</h1>
          <div className="mt30 mb30">
            <Card title="Página de inscrição" />
          </div>
          <div className="dflex">
            <Link to="/promotion">
              <Button text="Ver promoção" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
