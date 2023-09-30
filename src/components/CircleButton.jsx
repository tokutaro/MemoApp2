import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';

import { Feather } from '@expo/vector-icons';

// <Feather name="plus" size={24} color="black" />
//       <Text style={styles.circleButtonLabel}>{children}</Text>

export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Feather name={name} size={32} color="white" />
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3', // お好きな背景色に変えてもいいにゃ
    width: 64,
    height: 64,
    borderRadius: 32, // widthとheightの半分の値を指定して、完全な円にするにゃ
    justifyContent: 'center', // テキストを垂直方向の中央に配置するためにゃ
    alignItems: 'center', // テキストを水平方向の中央に配置するためにゃ
    overflow: 'hidden', // 念のため、ボタンの境界を超えて内容が表示されないようにするにゃ
    position: 'absolute',
    right: 40,
    bottom: 40,

    // iOSの影のスタイルにゃ
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4, // 影の縦の位置を指定にゃ
    },
    shadowOpacity: 0.3, // 影の不透明度にゃ
    shadowRadius: 4.65, // 影のぼかしにゃ

    // Androidの影のスタイルにゃ
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#FFFFFF',
    fontSize: 30,
  },
});
