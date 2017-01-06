import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: 340,
  },
  title: {
    fontSize: 22,
  },
  leadImage: {
    width: 300,
    height: 200,
  },
});

export default class Article extends Component {
  render() {
    const article = this.props.story;
    const image = {
      uri: article.images.i300x200
    };
    console.log(image);
    return (
      <View style={styles.container}>
        <Image source={image} style={styles.leadImage} />
        <Text>
          {article.channel_name}
        </Text>
        <Text style={styles.title}>
          {article.title}
        </Text>
      </View>
    );
  }
}

Article.propTypes = {
  story: React.PropTypes.object,
};