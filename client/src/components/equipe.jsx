import React from "react";
import EquipeFront from "../assets/dataimg.jpg";
import "./equipe.css";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const equipe = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      06 00 00 00 00
    </Tooltip>
  );

  return (
    <div>
      <img src={EquipeFront} alt="#" className="equipefont" />
      <span className="contentequipe">
        <h5 style={{ fontSize: "30px", color: "darkblue" }}>
          {" "}
          <b>EMQ-DATA</b>{" "}
        </h5>
        <h1 className='title'>
          <b> Une équipe performante </b>
        </h1>

        <span
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5 className='description'>
            <b>
              <br />
              Une équipe de consultant Teradata, qui ont l’habitude de
              travailler ensemble, pour développer vos projets autour de la
              technologie Teradata et aussi administrer vos infrastructures
              Teradata.
              <br />
              <br />
              Nous maitrisons bien sur l’aspect technique, le SQL sur Teradata,
              mais aussi, la modélisation de bases de données Teradata en
              fonction de vos projets et sommes capable de décliner le Physical
              Design et l’implémentation des bases Teradata.
              <br />
              <br />
              Nous assurons aussi l’administration des machines Teradata sur des
              infrastructures on-premises et Cloud, en passant par la mise en
              place des stratégies de sauvegarde, de Plan de Reprise d’activité
              (PRA).
              <br />
              <br />
              <span>
                <Button variant="primary" href="/contact">
                  Nous contacter
                </Button>{" "}
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Button variant="warning">Nous appeler</Button>
                </OverlayTrigger>
              </span>
            </b>
          </h5>
        </span>
      </span>
    </div>
  );
};

export default equipe;
