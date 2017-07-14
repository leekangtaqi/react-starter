import React, { PureComponent } from 'react'
import actions from '../action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { asyncConnect } from 'redux-connect'
import { Button } from 'element-react'
import styles from './Home.scss'

@connect(
  state => ({
    xx: 1
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })  
)
export default class Home extends PureComponent {
  
  async componentWillMount() {
    let { payload, error } = await this.props.actions.addTodo('111', '222')
    if (error) {
      console.error(this.props.xx)
    }
  }
  
  render() {
    
    return (
      <div>
        <h1 className={styles.font1}>Home1</h1>
        <Button type="primary">南方电视</Button>
      </div>
      
    )
  }
}