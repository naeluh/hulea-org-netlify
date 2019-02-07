import React from 'react'

import withApollo from '../../lib/withApollo'
import withReduxSaga from '../../lib/withReduxSaga'

import { startClock } from '../../lib/clock/actions'

import App from '../../components/App'
import Header from '../../components/Header'
import Submit from '../../components/Submit'
import PostList from '../../components/PostList'
import Footer from '../../components/Footer'

class BlogIndex extends React.Component {
  
  componentDidMount () {
    this.props.dispatch(startClock())
  }

  render () {
    return (
      <App>
        <Header />
        <PostList />
        <Footer />
      </App>
    )
  }
}

export default withReduxSaga(withApollo(BlogIndex))
