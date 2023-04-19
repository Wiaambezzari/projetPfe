import React from "react";
import ReferenceFont from "../assets/dataimg.jpg";
import "./reference.css";
import { Tabs, Tab} from "react-bootstrap";

const reference = () => {
  return (
    <div>
      <img src={ReferenceFont} alt="#" className="referencefont" />
      <div className="contentreference">
        <center>
        <h5 className="title">
          {" "}
          <b>Références EMQ-DATA</b>{" "}
        </h5>
        </center>
        <div className="tabsdiv">
          <center>
        <Tabs
      defaultActiveKey="banque"
      id="uncontrolled-tab-example"
      className="mb-3 tabs"
    >
      <Tab className="w-50" eventKey="banque" title="Banque">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, laborum. Impedit autem illo vitae, soluta ducimus magnam harum facere maxime praesentium eligendi eius tenetur consequuntur inventore possimus dicta dolor explicabo.
      </Tab>
      <Tab className="w-50" eventKey="assurance" title="Assurance">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, officiis facilis accusamus est similique eveniet distinctio reprehenderit molestias vitae tempora, doloribus facere mollitia nam molestiae saepe voluptatem ullam cum! Quod.
      </Tab>
      <Tab className="w-50" eventKey="telecom" title="Telecom">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque obcaecati, fuga officiis molestias voluptatem vitae quisquam, aperiam quae blanditiis voluptatibus accusantium pariatur autem animi ipsam ducimus delectus nam alias?
      </Tab>
      <Tab className="w-50" eventKey="retail" title="Retail">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque obcaecati, fuga officiis molestias voluptatem vitae quisquam, aperiam quae blanditiis voluptatibus accusantium pariatur autem animi ipsam ducimus delectus nam alias?
      </Tab>
      <Tab className="w-50" eventKey="transport" title="Transport">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque obcaecati, fuga officiis molestias voluptatem vitae quisquam, aperiam quae blanditiis voluptatibus accusantium pariatur autem animi ipsam ducimus delectus nam alias?

  
        
      </Tab>
    </Tabs>
    </center>
    </div>
      </div>
    </div>
  );
};

export default reference;
