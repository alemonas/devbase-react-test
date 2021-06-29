// import axios from 'axios'
// import {useEffect} from 'react'
import Layout from '../components/Layout'
// import {useState} from 'react'
import {Container, Box, Flex} from 'theme-ui'

// const apiURL = 'https://api.github.com/users/'
// const githubUsers = ['GrahamCampbell', 'fabpot', 'y', 'rkh', 'josh']

function Home() {
  const githubUsers = [
    'GrahamCampbell',
    'fabpot',
    'weierophinney',
    'rkh',
    'josh',
  ]

  // useEffect(() => {
  //   // I get confuse, i was thinking to show more info about the user in the home page.. :O
  //   // but is only the name, so I could harcoded the data
  //   // axios
  //   //   .all([
  //   //     axios.get('https://api.github.com/users/GrahamCampbell'),
  //   //     axios.get('https://api.github.com/users/fabpot'),
  //   //     axios.get('https://api.github.com/users/weierophinney'),
  //   //     axios.get('https://api.github.com/users/rkh'),
  //   //     axios.get('https://api.github.com/users/josh'),
  //   //   ])
  //   //   .then(resArr => {
  //   //   })
  // }, [])

  return (
    <Layout>
      <h1>Top 5 GitHub Users</h1>
      <Container>
        <Flex>
          {githubUsers.map(user => {
            return (
              <Box
                bg="primary"
                color="white"
                key={user}
                p={2}
                sx={{flex: '1 1 auto', textAlign: 'center'}}
                m={1}
              >
                {user}
              </Box>
            )
          })}
        </Flex>
      </Container>
    </Layout>
  )
}

export default Home
