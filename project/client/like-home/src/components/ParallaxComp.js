import React from 'react'
import { Component } from 'react';
import Parallax from 'react-springy-parallax'
import '../stylesheets/ParallaxComp.scss'


class ParallaxComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
    
      componentDidMount() {

      }

    render () {
        const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
        return (
            <Parallax ref="parallax" pages={3}>

                <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#00000', backgroundImage: `url(https://www.walldevil.com/wallpapers/a43/background-wallpapers-landscapes-palace-wallpaper-casino-vegas-caesars.jpg)` }} />
                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#00000', backgroundImage: `url(https://wallpaperscraft.com/image/miami_sea_city_river_view_28420_1920x1080.jpg)` }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#00000', backgroundImage: `url(https://wallpaperscraft.com/image/italy_venice_river_house_dock_10778_1920x1080.jpg)` }} />

                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(1)}>
                    <div className="clickable fadeBackgroundColor">
                        <span className="text-center f-s-30">NEXT</span>
                        <br/>
                        <i class="down fadeBorderColor"></i>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(2)}>
                    <div className="clickable fadeBackgroundColor">
                        <span className="text-center f-s-30">NEXT</span>
                        <br/>
                        <i class="down fadeBorderColor"></i>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={0.5}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(0)}>
                    <div className="clickable fadeBackgroundColor">
                        <i class="up fadeBorderColor"></i>
                        <br/>
                        <span className="text-center f-s-30">RETURN</span>
                    </div>
                </Parallax.Layer>

            </Parallax>
        )
    }

}

export default ParallaxComp;