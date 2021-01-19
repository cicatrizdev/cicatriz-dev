import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import emailjs from "emailjs-com";

import * as Yup from 'yup';

const schema = Yup.object().shape({
  contactName: Yup.string().min(2, 'Nome muito curto :(').required('* Nome obrigatório'),
  contactEmail: Yup.string().email('Email inválido!').required('* Email obrigatório')
})

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin-bottom: 12px;

  input { 
    height: 40px;
    padding: 12px;
  };

  textarea { 
    padding: 12px;
    resize: none;
  };
`;

const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 10px;
  color: red;
`;

const ResponseSpan = styled.span`
  display: flex;
  margin-top: 12px;
`;

const StyledButton = styled.button`
  width: 120px;
  background-color: #320335;
  color: #FFFFFF;
  border: 2px solid #320335;

  :hover {
    background-color: #8F3985;
    border: 2px solid #8F3985;
  }
`
const Repositories = () => {
  const [ formStatus, setFormStatus ] = React.useState('');
  const [ isLoading, setIsLoading ] = React.useState(false);

  const sendEmail = (values) => {
    setIsLoading(true);
    emailjs.send(
      'cicatriz_dev_form', 
      'cicatriz_dev_template', 
      values, 
      'user_SG6wsZAYHAT5ud0eGZGKH'
    ).then(
      result => {
        setFormStatus(`E-mail enviado :)`)
        setIsLoading(false);
      }
    ).catch(
      err => {
        setFormStatus(`E-mail falhou, tente novamente :(`)
        setIsLoading(false)
      }
    )
  }
  return (
    <div>
      <h1>Vamos trabalhar juntos?</h1>
      <p>
        Use esse form para entrar em contato comigo e conversarmos melhor. Você também pode me contactar através de qualquer uma das minhas redes sociais, no topo do site. Espero que a gente trabalhe juntos num projeto bem legal :)
      </p>
      <Formik
        validationSchema={schema}
        initialValues={{ 
          contactName: '',
          contactEmail: '',
          contactMessage: ''
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          sendEmail(values, actions)
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {() => (
          <Form>
            <InputWrapper>
              <label htmlFor="contactName">Seu nome</label>
              <Field 
                placeholder="Ex: Edson Arantes" 
                id="contactName" 
                name="contactName"
                type="text"
              />
              <StyledErrorMessage component="span" name="contactName" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="contactEmail">Seu melhor email</label>
              <Field 
                placeholder="Ex: edson.arantes@email.com" 
                id="contactEmail" 
                name="contactEmail" 
                type="email"
              />
              <StyledErrorMessage component="span" name="contactEmail" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="contactMessage">Mensagem bem bacana</label>
              <Field 
                component={() => <textarea placeholder="Ex: Fala, Cica! Bora trabalhar juntos?"></textarea>} 
                id="contactMessage" 
                name="contactMessage" 
                type="text"
              />
              <StyledErrorMessage component="span" name="contactMessage" />
            </InputWrapper>
            <StyledButton disable={isLoading} type="submit">{isLoading ? 'Enviando...' : 'Enviar'}</StyledButton>
            <ResponseSpan>{formStatus}</ResponseSpan>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Repositories;