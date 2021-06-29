import {Flex} from 'theme-ui'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <Flex as="nav" sx={{justifyContent: 'center'}}>
      <Link to="/">Home</Link>
      <Link to="/git-user-details">git User details</Link>
    </Flex>
  )
}

export default Navbar
