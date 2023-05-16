import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styled from 'styled-components'
import emailjs from 'emailjs-com'

import * as Yup from 'yup'

const schema = Yup.object().shape({
  contactName: Yup.string()
    .min(2, 'Short name :(')
    .required('* Required'),
  contactEmail: Yup.string()
    .email('Invalid email :(')
    .required('* Required'),
})

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin-bottom: 12px;

  input {
    height: 40px;
    padding: 12px;
  }
`

const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 10px;
  color: red;
`

const ResponseSpan = styled.span`
  display: flex;
  font-size: 22px;
  margin-top: 12px;
`

const StyledButton = styled.button`
  width: 100%;
  background-color: #320335;
  color: #ffffff;
  border: 2px solid #320335;

  @media (min-width: 728px) {
    width: 200px;
  }

  :hover {
    background-color: #8f3985;
    border: 2px solid #8f3985;
  }
`
const Repositories = () => {
  const [formStatus, setFormStatus] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const sendEmail = values => {
    setIsLoading(true)
    emailjs
      .send(
        'cicatriz_dev_form',
        'cicatriz_dev_template',
        values,
        'user_SG6wsZAYHAT5ud0eGZGKH'
      )
      .then(result => {
        setFormStatus(`E-mail sent :)`)
        setIsLoading(false)
      })
      .catch(err => {
        setFormStatus(`Ooops! Something went wrong :( try again`)
        setIsLoading(false)
      })
  }
  return (
    <div>
      <h1>Let's work together!</h1>
      <p>
        Use the form below to send me an email and I'll get back to you as soon
        as I can. I hope we can work together in an awesome project!
      </p>
      <Formik
        validationSchema={schema}
        initialValues={{
          contactName: '',
          contactEmail: '',
          contactMessage: '',
        }}
        onSubmit={(values, actions) => {
          sendEmail(values, actions)
          actions.setSubmitting(false)
          actions.resetForm()
        }}
      >
        {() => (
          <Form>
            <InputWrapper>
              <label htmlFor="contactName">Your name</label>
              <Field
                placeholder="Ex: Edson Arantes"
                id="contactName"
                name="contactName"
                type="text"
              />
              <StyledErrorMessage component="span" name="contactName" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="contactEmail">Your best e-mail</label>
              <Field
                placeholder="Ex: edson.arantes@email.com"
                id="contactEmail"
                name="contactEmail"
                type="email"
              />
              <StyledErrorMessage component="span" name="contactEmail" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="contactMessage">Your nice message :)</label>
              <Field
                placeholder="Ex: Hey! Let's drink a beer 🍺"
                id="contactMessage"
                name="contactMessage"
                type="text"
              />
              <StyledErrorMessage component="span" name="contactMessage" />
            </InputWrapper>
            <StyledButton disable={isLoading} type="submit">
              {isLoading ? 'Sending...' : 'Send'}
            </StyledButton>
            <ResponseSpan>{formStatus}</ResponseSpan>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Repositories
