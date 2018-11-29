import React from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';
import BottomNavigation, {
  IconTab,
  Badge,
  FullTab,
  ShiftingTab
} from 'react-native-material-bottom-navigation';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles/style';

export default class App extends React.Component {

  state = {
    activeTab: 'account'
  }

  tabs = [
    {
      key: 'account',
      label: 'Account',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'account-balance-wallet'
    },
    {
      key: 'android',
      label: 'Android',
      barColor: '#999999',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'android'
    },
    {
      key: 'movies',
      label: 'Movies',
      barColor: '#00695C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'movie'
    },
    {
      key: 'music',
      label: 'Music',
      barColor: '#6A1B9A',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'music-note'
    },
    {
      key: 'books',
      label: 'Books',
      barColor: '#1565C0',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'book'
    }
  ]

  state = {
    activeTab: this.tabs[0].key
  }

  renderTab = ({ tab, isActive }) => {
    return (
      <FullTab
        key={tab.key}
        isActive={isActive}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
        showBadge={tab.key === 'account'}
        renderBadge={() => <Badge>2</Badge>}
      />
    )
  }

  renderIcon = icon => ({ isActive }) => {
    return <Icon size={24} color="white" name={icon} />
  }

  handleTabPress = (newTab, oldTab) => {
    //Alert.alert(newTab.key + " -- " + oldTab.key);
    this.setState({ activeTab: newTab.key });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Text style={styles.welcome}>This is test</Text>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <BottomNavigation
            renderTab={this.renderTab}
            tabs={this.tabs}
            activeTab={this.state.activeTab}
            //onTabPress={newTab => this.setState({ activeTab: newTab.key })}
            onTabPress={this.handleTabPress}
            useLayoutAnimation
          />
        </View>
      </View>
    )
  }

}

/*const styles = StyleSheet.create({
  welcome: {
    fontFamily: "OpenSans-Light",
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    color: "blue"
  },
});*/