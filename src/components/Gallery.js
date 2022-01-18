import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class Gallery extends React.Component {

    render() {
        return (
            <Carousel autoPlay={true} infiniteLoop={true} interval={3000} >
                <div>
                    <img src="/static/thumb1.jpg" />
                </div>
                <div>
                    <img src="/static/thumb2.jpg" />
                </div>
                <div>
                    <img src="/static/thumb3.jpg" />
                </div>
            </Carousel>
        )
    }

}
