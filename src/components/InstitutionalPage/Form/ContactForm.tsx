import React, { FormEvent, useState } from 'react'
import {
  Button,
  Input,
  Grid,
  Label,
  Textarea,
  Box,
  Spinner,
} from '@vtex/store-ui'

export const ContactForm = () => {
  const [loading, setLoading] = useState(false)

  const customVariant = `institutional.contact.form`
  const sendContact = async (url: string, data: { [key: string]: string }) => {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/vnd.vtex.ds.v10+json',
      },
      method: 'PATCH',
      body: JSON.stringify(data),
    })

    if (response.ok) {
      return response.json()
    }

    throw new Error('Error while saving contact message')
  }

  const onSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setLoading(true)
    const target = e.target as HTMLFormElement

    const {
      name,
      surname,
      email,
      phone,
      homephone,
      message,
    }: any = target.elements

    let client: { [key: string]: string } = {
      firstName: name.value,
      lastName: surname.value,
      phone: phone.value,
      email: email.value,
    }

    if (homephone) {
      client = { ...client, homePhone: homephone.value }
    }

    const msg = { description: message.value, client: email.value }

    try {
      await sendContact('/api/dataentities/CL/documents/', client)
      await sendContact('/api/dataentities/CO/documents/', msg)
      target.reset()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box as="form" onSubmit={onSubmit} variant={customVariant}>
      <Label htmlFor="contact-name">
        Nome <span>*</span>
        <Input id="contact-name" name="name" required />
      </Label>
      <Label htmlFor="contact-surname">
        Sobrenome <span>*</span>
        <Input id="contact-surname" name="surname" required />
      </Label>
      <Label htmlFor="contact-email">
        Email <span>*</span>
        <Input id="contact-email" name="email" type="email" required />
      </Label>
      <Grid variant={`${customVariant}.division`}>
        <Label htmlFor="contact-homephone">
          Telefone
          <Input id="contact-homephone" name="homephone" type="tel" />
        </Label>
        <Label htmlFor="contact-phone">
          Celular <span>*</span>
          <Input id="contact-phone" name="phone" type="tel" required />
        </Label>
      </Grid>
      <Label htmlFor="contact-message">
        Sua mensagem <span>*</span>
        <Textarea id="contact-message" name="message" required />
      </Label>
      <Button disabled={loading}>
        {loading ? <Spinner size="20px" /> : 'Enviar'}
      </Button>
    </Box>
  )
}
