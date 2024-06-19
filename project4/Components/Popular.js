import {View, Image, Text} from 'react-native'
import Facebook from "../assets/fb.png"
import Google from "../assets/go.png"
import bf from "../assets/bf.png"
import burger from "../assets/burger.png"


const popularData = [
    {name: 'FOOD STORE', company: 'Burger king', location: 'Accra-Ghana', image: burger, backgroundColor: 'white'},
    {name: 'SEARCH', company: 'Bing', location: 'United Kingdom', image: bf, backgroundColor: 'white'},
    {name: 'SOFTWARE', company: 'Google', location: 'United States', image: Google, backgroundColor: 'white'},
    {name: 'SOCIAL MEDIA', company: 'Facebook', location: 'America', image: Facebook, backgroundColor: 'white'},
    {name: 'FOOD STORE', company: 'Burger King', location: 'Accra-Ghana', image: burger, backgroundColor: 'white'},
    {name: 'SEARCH', company: 'Bing', location: 'United States', image: bf, backgroundColor: 'white'},
    {name: 'SOFTWARE', company: 'Google', location: 'America', image: Google, backgroundColor: 'white'},
    {name: 'SOCIAL MEDIA', company: 'Facebook', location: 'Ohio', image: Facebook, backgroundColor: 'white'},
  ]

const Popular = () => {
    return (
      <View style={{display: 'flex', flexDirection: 'column', gap: 10, margin: 20}}>
        {
          popularData.map((item, index) => {
            return (
                <View key={index} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: item.backgroundColor, paddingVertical: 15, paddingHorizontal: 10, borderRadius: 15,}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap:10}}>
                        <Image source={item.image} style={{width: 40, height: 40}} />
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.company}</Text>
                        </View>
                        
                    </View>
                    <View>
                        <Text>{item.location}</Text>
                        <Text>30/yrS</Text>
                    </View>
                </View>
            )
          })
        }
        </View>
    )
  }
  
  export default Popular;