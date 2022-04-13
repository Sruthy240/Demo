<View style={{ flexDirection: 'row', height: 60, margin: 16 }}>
                <Image style={{ height: 70, width: 90, top: -12, right: 14 }}
                    source={item.image} />
                <TouchableOpacity onPress={() => props.navigation.navigate('Workers')}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10, left: 8, fontFamily: 'MontserratAlternates-Medium'}}>{item.title}</Text>
                </TouchableOpacity>

            </View>



<FlatList
keyExtractor={(item) => item.id}
data={DATA} horizontal={true}
renderItem={({ item, index }) => {
    return (
        <View style={{ marginTop: 20 }}>
            <View style={{ height: height * 0.006, width: width * 0.093, backgroundColor: '#3D989F', marginHorizontal: 10 }}>
            </View>
        </View>
    )
}} />


<TouchableOpacity onPress={() => pageScroll()}>
<Text style={{ fontSize: 16, color: '#AFABC4', }}>Skip</Text>
</TouchableOpacity>