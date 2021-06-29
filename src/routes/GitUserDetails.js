import axios from 'axios'

import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {Card, Avatar, Spinner, Flex, Text, Alert, Box} from 'theme-ui'

import Layout from '../components/Layout'

function GitUserDetails() {
  let {id} = useParams()
  const [status, setStatus] = useState('idle')
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const isIdle = status === 'idle'
  const isPending = status === 'pending'
  const isRejected = status === 'rejected'
  const isResolved = status === 'resolved'

  useEffect(() => {
    if (!id) {
      return
    }

    setStatus('pending')

    axios
      .get(`https://api.github.com/users/${id}`)
      .then(res => {
        setUser(res.data)
        setStatus('resolved')
      })
      .catch(err => {
        setError(err.message)
        setStatus('rejected')
      })
  }, [id])

  if (isIdle) {
    return 'idle'
  }

  if (isPending) {
    return <Spinner />
  }

  if (isRejected) {
    return (
      <Alert variant="error" mb={2}>
        {error}
      </Alert>
    )
  }

  if (isResolved) {
    return (
      <Layout>
        <h1>User details</h1>
        <Card>
          {/* <Flex> */}
          <Avatar src={user.avatar_url}></Avatar>
          <Box>
            <Text>{user.name}</Text>
          </Box>
          <Box>
            <Text>{user.location}</Text>
          </Box>
          {/* </Flex> */}
        </Card>
      </Layout>
    )
  }
}

export default GitUserDetails
