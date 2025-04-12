import { Text, View, Image, Pressable } from "react-native"
import { Icon } from "react-native-paper"
import { favouriteContext } from "../FavouriteContextProvider"
import { useContext, useState, useEffect } from "react"

function Box({ movie }) {

    const { add, isFavourite } = useContext(favouriteContext);
    const [liked, setliked] = useState(false);
    const getLiked = async () => {
        const res = await isFavourite(movie.title);
        setliked(res);
    }
    useEffect(() => {
        getLiked();
    },)

    return (
        <View style={{
            backgroundColor: "#0D1317", height: 375, borderRadius: 20, marginVertical: 1, justifyContent: 'flex-start',
        }}>
            <View style={{ justifyContent: 'flex-start' }}>
                <Image source={{ uri: movie.imageUrl }}
                    style={{ height: 300, width: '100%', borderRadius: 20, resizeMode: 'stretch' }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{
                    fontSize: 20, color: "#F1E9DB", margin: 15,
                    fontFamily: 'sans-serif',
                }}>{movie.title}</Text>
                <Pressable
                    onPress={() => {
                        setliked(true)
                        return add({ ...movie });
                    }}
                >
                    <View style={{
                        borderStyle: 'solid', backgroundColor: '#808A9F', borderRadius: 10, width: 31, margin: 15,
                        alignSelf: 'flex-end'
                    }}>
                        <Icon
                            source="heart"
                            color={liked ? '#B3001B' : '#F1E9DB'}
                            size={30}
                        />
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default Box