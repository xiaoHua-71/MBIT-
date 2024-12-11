import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtBadge, AtButton } from 'taro-ui'

export default class Index extends Component<PropsWithChildren> {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>

      <AtBadge value={10} maxValue={99}>
          <AtButton size='small'>按钮</AtButton>
      </AtBadge>
        <Text>用户</Text>
      </View>


    )
  }
}
