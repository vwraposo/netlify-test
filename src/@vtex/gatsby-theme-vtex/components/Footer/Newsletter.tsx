import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import { Box, Flex, Input, Text } from '@vtex/store-ui'
import useNewsletter from '@vtex/gatsby-theme-vtex/sdk/newsletter/useNewsletter'

import Button from '../ButtonWithLoading'

interface NewsletterProps {
  variant: string
}

const Newsletter: FC<NewsletterProps> = ({ variant }) => {
  const customVariant = `${variant}.newsletter`

  const { error, addUser, loading, data } = useNewsletter()

  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLDivElement>) => {
      e.preventDefault()
      addUser({ nome, email })
    },
    [addUser, nome, email]
  )

  return (
    <Box variant={customVariant}>
      <Flex variant={`${customVariant}.container`}>
        <Flex variant={`${customVariant}.formTitle`}>
          <Text variant={`${customVariant}.formTitle.title`}>
            cadastre-se e
          </Text>
          <Text variant={`${customVariant}.formTitle.subtitle`}>
            receba nossas ofertas e novidades
          </Text>
        </Flex>

        <Flex variant={`${customVariant}.formContainer`}>
          <Flex as="form" onSubmit={onSubmit} variant={`${customVariant}.form`}>
            <label htmlFor="name">
              Nome
              <Input
                id="name"
                name="name"
                value={nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNome(e.target.value)
                }
                disabled={loading}
                required
              />
            </label>
            <label>
              Email
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                disabled={loading}
                required
              />
            </label>
            <Button loading={loading}>Cadastrar</Button>
          </Flex>
        </Flex>
      </Flex>
      <Box variant={`${customVariant}.feedback`}>
        {error && (
          <Box as="span" variant={`${customVariant}.feedback.error`}>
            Ocorreu um erro ao cadastrar seu e-mail
          </Box>
        )}
        {data && (
          <Box as="span" variant={`${customVariant}.feedback.success`}>
            E-mail adicionado com sucesso
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Newsletter
