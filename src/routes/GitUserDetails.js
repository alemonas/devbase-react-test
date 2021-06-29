import {useParams} from 'react-router'

import Layout from '../components/Layout'

function GitUserDetails() {
  let {id} = useParams()

  console.log({id})
  return (
    <Layout>
      <h1>User details</h1>
    </Layout>
  )
}

export default GitUserDetails
