import { h } from 'preact';

const Slider = ({ children, id, type }) => (
<div class="wrap">
    <div class={"slider block-list" + ((type)? " slider--"+type : "")}>
        <div class="slider__navigation">
            <button class="slider__button swiper-previous" aria-label="Previous">
                <svg class="slider__button-icon" xmlns="http://www.w3.org/2000/svg" focusable="false" width="40" height="16">
                    <path d="M8.418.306a1.114 1.114 0 0 1 .008 1.533l-4.9 5.075h35.43a1.084 1.084 0 0 1 0 2.167H3.528l4.909 5.075a1.122 1.122 0 0 1-.008 1.533 1.022 1.022 0 0 1-1.477-.008L.299 8.764a1.22 1.22 0 0 1-.218-.342A1.063 1.063 0 0 1 0 8.005a1.1 1.1 0 0 1 .3-.758L6.953.331A1.006 1.006 0 0 1 8.418.306Z" fill="#9B3988"/>
                </svg>
            </button>
            <button class="slider__button swiper-next" aria-label="Next">
                <svg class="slider__button-icon" xmlns="http://www.w3.org/2000/svg" focusable="false" width="40" height="16">
                    <path d="M31.582 15.694a1.114 1.114 0 0 1-.008-1.533l4.9-5.075H1.044a1.084 1.084 0 0 1 0-2.167h35.428l-4.909-5.075a1.122 1.122 0 0 1 .008-1.533 1.022 1.022 0 0 1 1.477.008l6.653 6.917a1.22 1.22 0 0 1 .218.342 1.063 1.063 0 0 1 .081.417 1.1 1.1 0 0 1-.3.758l-6.653 6.916a1.006 1.006 0 0 1-1.465.025Z" fill="#9B3988"/>
                </svg>
            </button>
        </div>
        <div class="swiper js-swiper">
            <ul class="swiper-wrapper">
                {(Array.isArray(children)) ? children.map((child) => {
                    return <li class="swiper-slide">{child}</li>
                }) : <li class="swiper-slide">{children}</li> } 
            </ul>
        </div>
    </div>
</div>
);

export default Slider;