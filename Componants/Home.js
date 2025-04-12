import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native'
import { Searchbar, ActivityIndicator } from 'react-native-paper';
import styles from '../Style';
import { FlatList, Pressable } from 'react-native';
import axios from 'axios';
import Box from './Box';
import { Icon, TextInput } from "react-native-paper"


function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [TopMovies, setTopMovies] = useState([]);
    const [PopMovies, setPopMovies] = useState([{
        "id": "1",
        "title": "The Grudge",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
        "liked": false
    },
    {
        "id": "4",
        "title": "Three Christs",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/a/a1/Three_Christs_poster.jpg",
        "liked": false
    },
    {
        "id": "5",
        "title": "Inherit the Viper",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/1/1c/Inherit_the_Viper_%282019%29_Film_Poster.jpg",
        "liked": false
    },
    {
        "id": "6",
        "title": "The Sonata",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/1/13/The_Sonata_%282018%29_Film_Poster.jpg",
        "liked": false
    },
    {
        "id": "8",
        "title": "Bad Boys for Life",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
        "liked": false
    },

    {
        "id": "9",
        "title": "A Fall from Grace",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png",
        "liked": false
    },
    {
        "id": "10",
        "title": "The Gentlemen",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/0/06/The_Gentlemen_poster.jpg",
        "liked": false
    },
    {
        "id": "11",
        "title": "The Turning",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Turning_poster_2020.jpg",
        "liked": false
    },
    {
        "id": "12",
        "title": "The Last Full Measure",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/9/9d/The_Last_Full_Measure_2019_poster.jpg",
        "liked": false
    },
    {
        "id": "13",
        "title": "John Henry",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/b/b8/JohnHenryPoster.jpeg",
        "liked": false
    }]);
    const [AnimiMovies, setAnimiMovies] = useState([
        {
            "id": "180000",
            "title": "Abigail the Cow",
            "imageUrl": "https://static.wikia.nocookie.net/disney/images/0/05/Fox-disneyscreencaps_com-901.jpg",
            "liked": false
        },
        {
            "id": "70000",
            "title": ".GIFfany",
            "imageUrl": "https://static.wikia.nocookie.net/disney/images/5/51/Giffany.png",
            "liked": false
        },
        {
            "id": "120000",
            "title": "90's Adventure Bear",
            "imageUrl": "https://static.wikia.nocookie.net/disney/images/3/3f/90%27s_Adventure_Bear_profile.png",
            "liked": false
        },
        {
            "id": "327000",
            "title": "Arthur and Cecil",
            "imageUrl": "https://static.wikia.nocookie.net/disney/images/e/e9/Arthur_%26_Cecil.png",
            "liked": false
        },]);
    const [listType, setlistType] = useState('');
    const [loading, setloading] = useState(true);
    const [ShownMovies, setShownMovies] = useState([])
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setShownMovies(PopMovies)
        const movies = [];
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7').then((response) => {
            response.data.results.forEach(element => {
                if (element.title !== 'Beetlejuice' && element.title !== 'It Ends with Us' && element.title !== 'The Killer'
                    && element.title !== 'The Deliverance')
                    movies.push({ id: element.id, title: element.title, imageUrl: 'https://image.tmdb.org/t/p/w500' + element.poster_path, liked: false })
            })
        }).then(() => {
            setTopMovies(movies)
            setShownMovies(movies)
            setlistType('top')
            setloading(false)
        })
    }, [])

    useEffect(() => {
        if (listType === 'top')
            setShownMovies(TopMovies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase())));
        else if (listType === 'pop')
            setShownMovies(PopMovies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase())));
        else if (listType === 'ani')
            setShownMovies(AnimiMovies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase())));
        else { }
    }, [searchQuery])
    if (loading) {
        return (
            <View style={[styles.container]}>
                <ActivityIndicator animating={true} color='#66000F' size="large"
                    style={{ marginVertical: 300 }} />
            </View>
        );
    }
    return (
        <View style={{ backgroundColor: '#2C303A' }}>
            <View style={{
                flexDirection: 'row', position: 'relative', marginHorizontal: 5,

            }}>
                <View style={{ flex: 2 }}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={setSearchQuery}
                        value={searchQuery}
                        style={{ backgroundColor: '#F1E9DB', borderRadius: 10, color: '#F1E9DB' }}
                    />
                </View>
                <Pressable
                    onPress={() => { setVisible(!visible) }}
                >
                    <View style={{
                        borderStyle: 'solid', backgroundColor: '#EAFFFD', borderRadius: 10,
                        alignSelf: 'flex-end', flex: 3, flexDirection: 'row', padding: 15, marginLeft: 2,
                        backgroundColor: '#F1E9DB',
                    }}>
                        <Icon
                            source="filter"
                            color='#2C303A'
                            size={30}
                        />
                        <Text>Fliter</Text>
                    </View>
                </Pressable>
            </View>
            {visible && <View style={[styles.menuContainer, { position: 'absolute', top: 50, right: 10, zIndex: 50 }]}>
                <Pressable onPress={() => { setShownMovies(TopMovies); setVisible(!visible); setlistType('top') }}
                    style={[styles.menuItem]}><Text style={[styles.menuItemText]}>Top movies</Text></Pressable>
                <Pressable onPress={() => { setShownMovies(PopMovies); setVisible(!visible); setlistType('pop') }}
                    style={[styles.menuItem]}><Text style={[styles.menuItemText]}>Popular</Text></Pressable>
                <Pressable onPress={() => { setShownMovies(AnimiMovies); setVisible(!visible); setlistType('ani') }}
                    style={[styles.menuItemL]}><Text style={[styles.menuItemText]}>Animated Films</Text></Pressable>
            </View>}
            <FlatList
                data={ShownMovies}
                initialNumToRender={5}
                renderItem={({ item }) => <Box key={item.id} movie={item}></Box>}
                keyExtractor={(x) => x.id}
                ListEmptyComponent={<Text style={{
                    marginVertical: 40, marginHorizontal: 155,
                    fontSize: 20, color: 'gray'
                }}>No results</Text>}
                style={{ zIndex: 10 }}
            />
        </View>
    )
}

export default Home

