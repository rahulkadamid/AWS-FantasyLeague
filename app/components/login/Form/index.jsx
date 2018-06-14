import React from 'react'
import styles from './index.less'
import Input from '../../common/Input/index.jsx'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.submit = this.submit.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }
  render () {
    return (
      <div className={styles.form}>
        {this.props.error &&
          <div className={styles.error}>
            Username or Password incorrect
          </div>
        }
        <Input
          for='username'
          className={styles.input}
          value={this.state.username}
          onChange={(e) => this.setState({ username: e.target.value })}
          onKeyPress={this.onKeyPress}
          autofocus
        />
        <Input
          for='password'
          className={styles.input}
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
          onKeyPress={this.onKeyPress}
        />
        <div
          className={styles.button}
          onClick={this.submit}
        >
          Login
        </div>
      </div>
    )
  }

  onKeyPress (e) {
    if (e.key === 'Enter') {
      this.submit()
    }
  }

  submit () {
    this.props.submit(this.state.username, this.state.password)
    this.setState({ username: '', password: '' })
  }
}

export default Form
