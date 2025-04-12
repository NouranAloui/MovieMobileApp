import { Text, View, Image, Pressable, TextInput } from "react-native"
import { Icon } from "react-native-paper"
import { favouriteContext } from "../FavouriteContextProvider"
import { useContext, useState } from "react"
import styles from "../Style"


const FavBox = ({ movie }) => {
    const { deleteId, updateMovieName } = useContext(favouriteContext);
    const [title, settitle] = useState(movie.title);
    const [editMode, seteditMode] = useState(false);
    return (
        <View style={{
            backgroundColor: "#262626", height: 375, borderRadius: 20, marginVertical: 1, justifyContent: 'flex-start',

        }}>
            <View style={{ justifyContent: 'flex-start' }}>
                <Image source={{ uri: movie.imageUrl }}
                    style={{ height: 300, width: '100%', borderRadius: 20, resizeMode: 'stretch' }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                    value={title}
                    editable={editMode}
                    onChangeText={(text) => settitle(text)}
                    style={[styles.mName]}
                    scrollEnabled={!editMode}
                />
                {editMode && <Pressable
                    onPress={() => { updateMovieName({ movie: movie, newTitle: title }); seteditMode(false); }}
                >
                    <View style={[styles.icon]}>
                        <Icon
                            source="content-save"
                            color='#F1E9DB'
                            size={30}
                        />
                    </View>
                </Pressable>}
                <Pressable
                    onPress={() => { seteditMode(!editMode) }}
                >
                    <View style={[styles.icon]}>
                        <Icon
                            source="pencil"
                            color='#F1E9DB'
                            size={30}
                        />
                    </View>
                </Pressable>
                <Pressable
                    onPress={() => { deleteId(movie); }}
                >
                    <View style={[styles.icon]}>
                        <Icon
                            source="delete"
                            color='#F1E9DB'
                            size={30}
                        />
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default FavBox