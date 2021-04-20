import { Button, Form, InputGroup, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import ReactHtmlParser from "react-html-parser";
import { useState } from "react";
const ContactForm = ({ data }) => {
  const { placeholders, validate, subTitle, btn, req } = data;
  const schema = yup.object({
    name: yup.string().required(validate.name.req),
    number: yup
      .string()
      .min(validate.phone.num, validate.phone.validate)
      .required(validate.phone.req),
    terms: yup.bool().oneOf([true], validate.terms.req),
  });

  const [send, sendSend] = useState(false);

  return (
    <>
      {send ? (
        <h2 className="mt-3 mb-3">
          {" "}
          ERROR! Please , use <span className="whats">Whath's up</span> or{" "}
          <span className="teleg">Telegram</span>
        </h2>
      ) : (
        <Formik
          validationSchema={schema}
          onSubmit={
            () => sendSend(true)

            // async (values) => {
            // try {
            //   sendSend(true);
            //   await fetch("http://localhost:4000/sendMail", {
            //     method: "POST",
            //     body: values,
            //   });
            // } catch (error) {
            //   throw new Error(error);
            // }
            // }
          }
          initialValues={{
            name: "",
            number: "",
            terms: false,
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <div>
              <Form onSubmit={handleSubmit}>
                <Form.Row className="justify-content-center mt-3">
                  <Form.Group controlId="validationFormik01" as={Col} md="3">
                    <Form.Control
                      type="text"
                      name="name"
                      value={values.name}
                      placeholder={placeholders.name}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                      isInvalid={errors.name}
                    />
                    <Form.Control.Feedback>{req}</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="validationFormik02" as={Col} md="3">
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          {/* {lang==='ru'? +7 : null} */}
                          +7
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="number"
                        name="number"
                        value={values.number}
                        onChange={handleChange}
                        placeholder={placeholders.phone}
                        isValid={touched.number && !errors.number}
                        isInvalid={errors.number}
                      />
                      <Form.Control.Feedback>{req}</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        {errors.number}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <div className="mb-3 text-secondary text-center d-flex justify-content-center">
                  <div className="col-md-6">{ReactHtmlParser(subTitle)}</div>
                </div>
                <Form.Row className="justify-content-center">
                  <Form.Group controlId="textarea" as={Col} md="6">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      onChange={handleChange}
                      placeholder={placeholders.textArea}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Check
                    required
                    name="terms"
                    label={placeholders.term}
                    onChange={handleChange}
                    isInvalid={errors.terms}
                    feedback={errors.terms}
                    id="validationFormik0"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#44A076", borderColor: "#44A076" }}
                >
                  {btn}
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      )}
    </>
  );
};

export default ContactForm;
