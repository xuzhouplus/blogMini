import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import {AtAvatar, AtButton} from 'taro-ui'
import 'taro-ui/dist/style/components/avatar.scss'
import 'taro-ui/dist/style/components/button.scss'
import 'taro-ui/dist/style/mixins/index.scss'
import './index.css'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props);
    this.state = {
      canUse: false,
      userInfo: {}
    }
  }

  enter() {
    Taro.redirectTo({
      url: '/pages/about/index'
    })
  }

  componentWillMount() {
    let that = this
    Taro.getUserInfo({
      withCredentials: false,
      success: function (result) {
        console.log(result)
        that.setState({
          canUse: true,
          userInfo: result.userInfo
        })
      },
      fail: function (result) {
        Taro.showToast({
          title: '获取登录用户信息失败'
        })
        console.log(result)
      }
    })
    console.log(this.props)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='hello absolute-center'>
        <View className='at-row at-row__direction--column' hidden={!this.state.canUse}>
          <AtAvatar className='user-avatar at-col at-col--auto' size='large' image={this.state.userInfo.avatarUrl}></AtAvatar>
          <Text className='welcome at-col at-col--auto'>Welcome!
            <Text className='user-nickname'>{this.state.userInfo.nickName}</Text>
          </Text>
          <AtButton className='enter at-col at-col--auto' type='primary' onClick={this.enter.bind()}>进入</AtButton>
        </View>
      </View>
    )
  }
}
