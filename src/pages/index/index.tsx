import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtBadge, AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'

/**
 * 这个是主页
 */
export default() => {
  return (
    <View className='index'>

      <AtButton type='primary' onClick={()=> {
        Taro.redirectTo({
          url: '/pages/user/index',
        })
      }} size='normal'>开始测试</AtButton>
    </View>
);
};
