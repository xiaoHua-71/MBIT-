import { CommonEvent, View } from '@tarojs/components'
import './index.scss'
import { AtBadge, AtButton, AtRadio } from 'taro-ui'

import GlobalFooter from '../../components/GlobalFooter';
import questions from "../../data/question.json";
import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
/**
 * 这是做题主页
 */
export default() => {

  //当前题目序号从一开始
  const [current,setCurrent] = useState<number>(1);
  //当前题目
  const[currentQuestion,setCurrentQuestion] = useState(questions[0]);

  const questionOptions = currentQuestion.options.map(option => {
    return { label: `${option.key}. ${option.value}`, value: option.key};
  });
  //定义当前答案变量
  const[currentAnswer,setCurrentAnswer] = useState<String>();

  //回答列表
  const[answerList] = useState<String[]>([]);


  //序号改变时，切换当前题目和当前回答
  useEffect(() =>{
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  },[current]);

  return (
   <View className = "doQuestionPage">
    <View className='at-article__h1 title'>{current}. {currentQuestion.title}</View>
       <AtRadio options={questionOptions} value={currentAnswer} onClick={(value) =>{
         setCurrentAnswer(value);
         answerList[current - 1] = value;

       }} />

        {(
          current < (questions.length)&&
          <AtButton className='controlBtn' type='primary'
          disabled = {!currentAnswer}
          circle onClick = {() => setCurrent(current + 1)}>
          下一题
          </AtButton>
        )}

        {(
          current == (questions.length)&&
          <AtButton className='controlBtn' circle type='primary'
          disabled = {!currentAnswer}
          onClick = {() => {
            //传递做题数据
            Taro.setStorageSync('answerList',answerList)
            // TODO 跳转到结果页面
            Taro.redirectTo({
              url: '/pages/result/index',
            });


          }}>
          查看结果
          </AtButton>
        )}

        {(
          current > 1 &&
          <AtButton className='enterBtn' circle onClick = {() => setCurrent(current - 1)}>
          上一题
          </AtButton>

        )}




   <GlobalFooter />
   </View>
);
};
