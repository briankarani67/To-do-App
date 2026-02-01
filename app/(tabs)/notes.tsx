import { View, Text, StyleSheet,TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useTheme, { ColorScheme } from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';

const Notes = () => {
    const { colors } = useTheme();

    const [note, setNote] = React.useState('');
  return (
    <LinearGradient colors={colors.gradients.background} style={{flex:1}}>
    <SafeAreaView  style={createSettingsStyles(colors).content}    >
    <View>
      <Text style={createSettingsStyles(colors).heading}>Notes</Text>
    </View>
    {/* <LinearGradient  colors={colors.gradients.background} > */}
    <View>
    <TextInput style={createSettingsStyles(colors).input} placeholder="Add a note..." multiline={true}
    numberOfLines={99999999999} scrollEnabled={true} textAlignVertical='top'  value={note} onChangeText={(text) => setNote(text)}/>
    </View>
    {/* </LinearGradient> */}
    </SafeAreaView>
    </LinearGradient>
  )
}

export default Notes

const createSettingsStyles = (colors: ColorScheme) => {

const styles = StyleSheet.create({
    content:{
        padding:16,
        flex:1,
        height:'100%',

    },
    heading:{
        fontSize:25,
        fontWeight:'600',
        paddingHorizontal: 24,
      paddingVertical: 32,
      paddingBottom: 34,
      height:'100%',
        color: colors.text,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        textAlign:'center'
    },
    input:{
      height:'100%',
      backgroundColor: colors.back,
      color: colors.text,
      flex:1,
      borderRadius:3,
      fontSize:16,
      padding:16,
    }

})

return styles;
}

// const