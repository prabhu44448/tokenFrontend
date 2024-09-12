import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationSettingsScreen = () => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notification Settings</Text>
      <View style={styles.setting}>
        <Text>Push Notifications</Text>
        <Switch
          value={pushNotifications}
          onValueChange={setPushNotifications}
        />
      </View>
      <View style={styles.setting}>
        <Text>SMS Notifications</Text>
        <Switch
          value={smsNotifications}
          onValueChange={setSmsNotifications}
        />
      </View>
      <View style={styles.setting}>
        <Text>Email Notifications</Text>
        <Switch
          value={emailNotifications}
          onValueChange={setEmailNotifications}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default NotificationSettingsScreen;
