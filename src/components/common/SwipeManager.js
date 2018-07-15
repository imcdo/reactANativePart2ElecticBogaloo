import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Animated, PanResponder } from 'react-native';
import TripCard from "./TripCard"
import { prependOnceListener } from 'cluster';

export default class SwipeManager extends Component {
    constructor(props) {
        super(props);

        this.position = new Animated.ValueXY();
        this.state = {
            currentIndex : 0

        }
        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            },
        ...this.position.getTranslateTransform()
    ]

        }
    }

    componentWillMount() {
        this.PanResponder = PanResponder.create({

            onStartShouldSetPanResponder:(evt,gestureState) => true,
            onPanResponderMove: (evt,gestureState) => {
                this.position.setValue({x:gestureState.dx, y:gestureState.dy});
            },
            onPanResponderRelease: (evt,gestureState) => {

            }
        })
    }

    renderUsers = () => {
        return this.props.people((item, i) => {
            if (i < this.state.currentIndex) { 
                return null;
            }
            else if (i == currentIndex) {
                return(
                    <Animated.View 
                    {...this.PanResponder.panHandlers}
                    key= {item.email} 
                    style={[this.rotateAndTranslate,styles.swipeCard]}> 
        
                        <TripCard 
                        person={item}
                        />
                    </Animated.View>
                    );
            }
            else {
                return(
                    <Animated.View 
                    key= {item.email} 
                    style={[styles.swipeCard]}> 
        
                        <TripCard 
                        person={item}
                        />
                    </Animated.View>
                    );
            }
            
        });
    }

    render() {
        return(
            <View>
                
            <TripCard 
                    person={this.props.person}
                />
                <View style={styles.bottomBar}>
                    <Button 
                        title='Yep'
                        onPress={this.props.yepPress}
                    >
                        Partner
                    </Button>
                    <Button
                        title='Nope'
                        onPress={this.props.nopePress}
                    >`1 
                        Don't Partner
                    </Button>
                </View>
            </View>
        );
    }
}

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
router : {
    backgroundColor: 'blue',
    alignItems: 'center',
    flex: 1, 
    margin : 10,
},
header : {
    color: 'white',
    alignItems: 'center',
    fontSize: 32,
},
body : {
    flex : 5,
},
bottomBar : {
    backgroundColor : 'rgba(155, 155, 155, .6)',
    height : 30,
    flexDirection: "row",
    position : "absolute",
    bottom: 0,
    alignItems: 'center',
    width: 200,
    flex : 1,
    alignContent: 'center',

},
swipeCard : {
    flex:1,
    height:SCREEN_HEIGHT - 120,
    width:SCREEN_WIDTH,
    padding: 10,
    position: 'absolute'

}
});