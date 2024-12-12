import { View, Image } from '@tarojs/components'
import './index.scss'
import { AtBadge, AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'
import headerBg from "../../assets/无标题.png";
import GlobalFooter from '../../components/GlobalFooter';

/**
 * 这个是主页
 */
export default() => {
  return (
    <View className='indexPage'>

  <View className='at-article__h1 title'>MBIT性格测试</View>

     <View className='at-article__h3 scrp' >两分钟就能根据您的描述,来了解您的MBIT性格特点</View>

      <AtButton className='enterBtn' type='primary' onClick={()=> {
        Taro.redirectTo({
          url: '/pages/doQuestion/index',
        });
      }} size='normal' circle >开始测试</AtButton>

      <Image className='backg' src={headerBg}/>

      <GlobalFooter />
    </View>
);
};
