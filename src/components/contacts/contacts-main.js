import React from "react";
import ContactForm from "./contact-form";

function Contacts_main({ data }) {
  return (
    <div className='container mt-4 text-center'>
      <h3> {data.title}</h3>
      <ContactForm data={data.form} />
    </div>
  );
}

export default Contacts_main;
