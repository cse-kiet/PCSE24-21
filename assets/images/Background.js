import { View, Text } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';

export default function Background() {

    const back = `
    <svg width="213" height="155" viewBox="0 0 213 155" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M130.179 -61.243L103.537 69.4874L1.33514e-05 -32.0265L130.179 -61.243Z" fill="#4B72FF"/>
    <path d="M184.512 136.372L178.143 76.5633L239.879 112.876L184.512 136.372Z" fill="#4B72FF"/>
    <path d="M230.142 3.86048L123 45.1472L157.425 -85L230.142 3.86048Z" fill="#F79151"/>
    <path d="M240.221 9.03177L238 104L153.559 47.9365L240.221 9.03177Z" fill="#4B72FF"/>
    <path d="M112.62 110.665L111.894 53L169.133 99.1783L112.62 110.665Z" fill="#F79151"/>
    </svg>
  `;


  return (
    <View>
      <SvgXml xml={back} width="250" height="250" />
    </View>
  )
}