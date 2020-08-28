import {Component} from 'react'
import {Image, Text, View} from "@tarojs/components";

class Wechat extends Component {
  state = {
    avatar: "",
    name: "name"
  }

  render() {
    return (
      <View className='login-wechat'>
        <Image src={this.state.avatar}></Image>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}

export default Wechat;
