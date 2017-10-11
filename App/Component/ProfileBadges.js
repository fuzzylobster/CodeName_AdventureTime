import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import styles from './Styles/ProfileBadgesStyle'


export default class ProfileBadges extends Component{
  render() {
    return (
        <View style={[styles.bar, styles.badgeContainer]}>
            <View style={[styles.barItem, styles.barSeparator]}>
                <Text style={styles.barTop}>30</Text>{/** Adventures completed*/}
                <Text style={styles.barBottom}>Adventures completed</Text>
            </View>
            <View style={[styles.barItem, styles.barSeparator]}>
                <Text style={styles.barTop}>75</Text>{/** Miles trekked*/}
                <Text style={styles.barBottom}>Miles Trekked</Text>
            </View>
            <View style={[styles.barItem, styles.barSeparator]}>
                <Text style={styles.barTop}>4</Text>{/** Cities Conquered*/}
                <Text style={styles.barBottom}>Cities Conquered</Text>
            </View>
            <View style={styles.barItem}>
                <Text style={styles.barTop}>30</Text>{/** Badges Completed*/}
                <Text style={styles.barBottom}>Badges Earned</Text>
            </View>
        </View>
    );
  }
}

