import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        quis at velit voluptates voluptatum laboriosam! Ipsam quis, nisi
        corporis incidunt ut ipsa facere pariatur dolorem officiis velit,
        delectus, accusantium distinctio?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
