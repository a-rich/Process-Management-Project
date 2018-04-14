import React, { Component }  from 'react'
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
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
        }
        return (
            <Parallax ref="parallax" pages={11}>

                <Parallax.Layer offset={0} speed={1} style={{ backgroundImage: `url(https://www.walldevil.com/wallpapers/a43/background-wallpapers-landscapes-palace-wallpaper-casino-vegas-caesars.jpg)` }} />
                <Parallax.Layer offset={1} speed={1} style={{ backgroundImage: `url(https://wallpaperscraft.com/image/miami_sea_city_river_view_28420_1920x1080.jpg)` }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundImage: `url(https://wallpaperscraft.com/image/italy_venice_river_house_dock_10778_1920x1080.jpg)` }} />
                <Parallax.Layer offset={3} speed={1} style={{ backgroundImage: `url(https://wallpaperscraft.com/image/mandarin_oriental_kuala_lumpur_malaysia_swimming_pool_resort_25556_1920x1080.jpg)` }} />
                <Parallax.Layer offset={4} speed={1} style={{ backgroundImage: `url(https://images4.alphacoders.com/687/687806.jpg)` }} />
                <Parallax.Layer offset={5} speed={1} style={{ backgroundImage: `url(http://www.wallpapers4u.org/wp-content/uploads/golden_gate_bridge_san_francisco_strait_66225_1920x1080.jpg)` }} />
                <Parallax.Layer offset={6} speed={1} style={{ backgroundImage: `url(https://i.pinimg.com/originals/2b/a4/95/2ba4954a7c3f29d1189b5f1e576f31f4.jpg)` }} />
                <Parallax.Layer offset={7} speed={1} style={{ backgroundImage: `url(http://t.wallpaperweb.org/wallpaper/buildings/1920x1080/4023_freedomtower_03.jpg)` }} />
                <Parallax.Layer offset={8} speed={1} style={{ backgroundImage: `url(https://wallpaperscraft.com/image/new_zealand_island_lake_wanaka_101637_1920x1080.jpg)` }} />
                <Parallax.Layer offset={9} speed={1} style={{ backgroundImage: `url(https://wallpaperscraft.com/image/paris_eiffel_tower_dawn_city_59234_1920x1080.jpg)` }} />
                <Parallax.Layer offset={10} speed={1} style={{ backgroundImage: `url(http://chrisburnettquartet.com/wp-content/uploads/2016/10/tokyo-night.jpg)` }} />
                

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
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(3)}>
                    <div className="clickable fadeBackgroundColor">
                        <span className="text-center f-s-30">NEXT</span>
                        <br/>
                        <i class="down fadeBorderColor"></i>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={3}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(4)}>
                    <div className="clickable fadeBackgroundColor">
                        <span className="text-center f-s-30">NEXT</span>
                        <br/>
                        <i class="down fadeBorderColor"></i>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={4}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(5)}>
                    <div className="clickable fadeBackgroundColor">
                        <span className="text-center f-s-30">NEXT</span>
                        <br/>
                        <i class="down fadeBorderColor"></i>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={5}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(6)}>
                    <div className="clickable fadeBackgroundColor">
                        <span className="text-center f-s-30">NEXT</span>
                        <br/>
                        <i class="down fadeBorderColor"></i>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={6}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(7)}>
                    <div className="clickable fadeBackgroundColor">
                        <span className="text-center f-s-30">NEXT</span>
                        <br/>
                        <i class="down fadeBorderColor"></i>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={7}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(8)}>
                    <div className="clickable fadeBackgroundColor">
                        <span className="text-center f-s-30">NEXT</span>
                        <br/>
                        <i class="down fadeBorderColor"></i>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={8}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(9)}>
                    <div className="clickable fadeBackgroundColor">
                        <span className="text-center f-s-30">NEXT</span>
                        <br/>
                        <i class="down fadeBorderColor"></i>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={9}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(10)}>
                    <div className="clickable fadeBackgroundColor">
                        <span className="text-center f-s-30">NEXT</span>
                        <br/>
                        <i class="down fadeBorderColor"></i>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={10}
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