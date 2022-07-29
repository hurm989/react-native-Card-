
import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView,Image } from 'react-native';
import styles from '../style/style';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
function HomeScreen({ navigation, route }) {
  const [mydata, setmydata] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      console.log(res.data)
      setmydata(res.data)
    })
  }, [])
  return (
    <>
      <ScrollView>
        {

          mydata.map((e, i) => {
            return <>

              <TouchableOpacity onPress={() => navigation.navigate('Card', { e: e })}>

                <View style={styles.my5}>
                  <View style={[styles.bgWhite, styles.mx1, styles.shadow1]}>
                    <View style={[styles.mx1, styles.my1]}>
                      <Text style={[styles.textBold, styles.fs4]}>TITLE: </Text>
                      <Text style={[styles.fs4]}>{e.title}</Text>
                    </View>
                    <View style={[styles.mt1, styles.mx1, styles.flexRow, styles.alignItemsCenter]}>
                      <Text style={[styles.textBold, styles.fs4]}>ID: </Text>
                      <Text style={[styles.textBold, styles.fs4]}>{e.id}</Text>
                    </View>
                    <View style={[styles.mx1, styles.flexRow, styles.alignItemsCenter]}>
                      <Text style={[styles.textBold, styles.fs4]}>Price: </Text>
                      <Text style={[styles.textBold, styles.fs4]}>{e.price}</Text>
                    </View>
                    <View style={[styles.mx1, styles.flexRow, styles.alignItemsCenter]}>
                      <Text style={[styles.textBold, styles.fs4]}>Category: </Text>
                      <Text style={[styles.fs4]}>{e.category}</Text>
                    </View>

                    <View style={[styles.mx1, styles.flexRow, styles.alignItemsCenter]}>
                      <View style={[styles.flexRow]}>


                        <Text style={[styles.textBold, styles.fs4]}>Rate: </Text>
                        <Text style={[styles.fs4, styles.me2]}>{e.rating.rate}</Text>

                        <Text style={[styles.textBold, styles.fs4]}>Count: </Text>
                        <Text style={[styles.fs4, styles.me2]}>{e.rating.count}</Text>

                      </View>
                    </View>

                    <View style={[styles.mx1, styles.my1]}>
                      <Text style={[styles.textBold, styles.fs4]}>Description: </Text>
                      <Text style={[styles.fs4]}>{e.description}</Text>
                    </View>


                    <View style={[styles.my3,styles.justifyContentCenter,styles.alignItemsCenter]}>
                      <Image
                        source={{ uri: e.image }}
                        style={{width:300,height:400 }}
                      />
                    </View>

                  </View>
                </View>
              </TouchableOpacity>

            </>
          })

        }
      </ScrollView>
    </>
  );
}


export default HomeScreen