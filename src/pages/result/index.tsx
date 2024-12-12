import { View, Image } from '@tarojs/components'
import './index.scss'
import { AtBadge, AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'
import headerBg from "../../assets/无标题.png";
import GlobalFooter from '../../components/GlobalFooter';
import questionResult from '../../data/question_results.json';
import questions from "../../data/question.json";

import { getBestQuestionResult } from '../../utils/bizUtils';
/**
 * 这个是结果页面
 */
export default() => {
  const answerList = Taro.getStorageSync("answerList");
  if(!answerList || answerList <1){
    Taro.showToast({
      title: '答案为空',
      icon: 'error',
      duration: 3000
    })

  }
  //获取答案
  const result = getBestQuestionResult(answerList,questions,questionResult);



  return (
    <View className='resultPage'>

  <View className='at-article__h1 title'>{result.resultName}</View>

     <View className='at-article__h2 scrp' >{result.resultDesc}</View>

      <AtButton className='enterBtn' type='primary' onClick={()=> {
        Taro.reLaunch({
          url: '/pages/index/index',
        })
      }} size='normal' circle >返回主页</AtButton>

      <Image className='backg' src={headerBg}/>

      <GlobalFooter />
    </View>
);
};
