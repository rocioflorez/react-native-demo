import { View, Text } from 'react-native';

import moment from 'moment';

import styles from '../styles/styles';

function CurrentDate() {

    const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    return(
        <View>
            <Text style={styles.currentDate}>{currentDate}</Text>
        </View>
    );

}

export default CurrentDate;