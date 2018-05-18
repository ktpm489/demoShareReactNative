import Rate, { AndroidMarket } from 'react-native-rate'
import React from 'react'
import { View, Button, Linking} from 'react-native' 
export default class ExamplePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rated: false
    }
  }

  render() {
    return (
      <View>
        <Button title="Rate App" onPress={() => {
          // let options = {
          //   AppleAppID: "2193813192",
          //   GooglePackageName: "com.mywebsite.myapp",
          //   AmazonPackageName: "com.mywebsite.myapp",
          //   OtherAndroidURL: "http://www.randomappstore.com/app/47172391",
          //   preferredAndroidMarket: AndroidMarket.Google,
          //   preferInApp: false,
          //   fallbackPlatformURL: "http://www.mywebsite.com/myapp.html",
          // }
          // Rate.rate(options, (success) => {
          //   if (success) {
          //     // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
          //     this.setState({ rated: true })
          //   }
          // })
          Linking.openURL(
            `https://play.google.com/store/apps/details?id=com.duy.compiler.javanide`
          );
        } }/>
      </View>
    )
  }
}