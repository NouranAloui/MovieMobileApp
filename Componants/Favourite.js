import React from 'react'
import { Text, View, FlatList, Pressable } from 'react-native'
import { favouriteContext } from '../FavouriteContextProvider'
import { useContext, useEffect, useState } from "react"
import FavBox from './FavBox'
import { getAll } from '../Reducer'
import Box from './Box'
import styles from '../Style'
function Favourite() {
    const { favMovies, deleteAll } = useContext(favouriteContext)
    const [disable, setdisable] = useState(true)
    useEffect(() => {
        if (favMovies.length === 0) { setdisable(true) }
        else
            setdisable(false)
    }, [favMovies])

    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#2C303A' }}>
                <FlatList
                    data={favMovies}
                    renderItem={({ item }) => <FavBox key={item.id} movie={item} />}
                    keyExtractor={(x) => x.id}
                    ListEmptyComponent={<Text style={[styles.delButtonText, { fontSize: 20, marginLeft: 70, marginTop: 50 }]}>Your favourite list is empty</Text>}
                />
            </View>
            <Pressable onPress={() => deleteAll()} style={[styles.delButton, disable ? styles.deleButtonDisabled : '']}>
                <Text style={[styles.delButtonText]}>Delete All</Text>
            </Pressable >
        </>
    )
}

export default Favourite