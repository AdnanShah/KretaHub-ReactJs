import React, {Component} from 'react';
import {Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from 'reactstrap';

const items = [

    {
        id: 1,
        altText: 'Slide 1',
        caption: 'Slide 1',
        src: 'http://via.placeholder.com/1280x450'
    },
    {
        id: 2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        src: 'http://via.placeholder.com/1280x450'
    }, {
        id: 3,
        altText: 'Slide 3',
        caption: 'Slide 3',
        src: 'http://via.placeholder.com/1280x450'
    }
];

class Simple extends Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({activeIndex: newIndex});
    }

    render() {
        const {activeIndex} = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    key={item.id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}>
                    <img src={item.src} alt={item.altText}/>
                    <CarouselCaption className="text-danger" captionText={item.altText} captionHeader={item.caption}/>
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
            </Carousel>
        );
    }
}

export default Simple;