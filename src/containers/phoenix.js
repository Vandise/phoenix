import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { fetchTieredStories } from '../actions/storiesActions';
import Article from '../components/posts/article';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class Phoenix extends Component {

  componentWillMount() {
    this.props.dispatch(fetchTieredStories());
  }

  render() {
    if (Object.keys(this.props.state.stories).length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
              Loading...
          </Text>
        </View>
      );      
    } else {
      const hotStories = this.props.state.stories['hot'];
      const articles = [];
      hotStories.forEach((article, index) => {
        articles.push(
          <Article story={article} key={index} />
        );
      });
      return (
        <View style={styles.container}>
          <ScrollView horizontal={true}>
            {articles}
          </ScrollView>
        </View>
      ); 
    }
  }
}

Phoenix.propTypes = {
  dispatch: React.PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Phoenix);