import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

//Componente de orden superior
// una funcion que le pasa como parametro un componente y regresa otro componente con props inyectadas
const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const withPhotos = graphql(GET_PHOTOS)
