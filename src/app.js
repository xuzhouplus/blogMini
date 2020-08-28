import {Component} from 'react'
import Taro from '@tarojs/taro'
import 'taro-ui/dist/style/components/flex.scss'
import './app.css'

class App extends Component {

  componentDidMount() {
    Taro.checkSession({
      success: function () {
        Taro.redirectTo({
          url: '/pages/index/index'
        })
      },
      fail: function () {
        Taro.login({
          success: function (result) {
            if (result.code) {
              Taro.setStorage({
                code: result.code
              });
              Taro.redirectTo({
                url: '/pages/index/index'
              })
            } else {
              Taro.showModal({
                content: '获取微信登录授权失败',
                showCancel: false
              })
            }
          },
          fail: function () {
            Taro.showModal({
              content: '获取微信登录授权失败',
              showCancel: false
            })
          }
        })
      }
    })
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
