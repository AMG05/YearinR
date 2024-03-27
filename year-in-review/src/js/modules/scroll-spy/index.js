import scrollSpy from '@stormid/scroll-spy';

const instance = scrollSpy('.js-scroll-spy',
    {
        root: null, //element that is used as the viewport for checking visiblity of the target
        rootMargin: '0px 0px -50% 0px', //margin around the root, px or percentage values
        threshold: 0, //Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed
        activeClassName: 'is--active', //className added when in view
        callback: null, //function executed when intersecting view
        single: true // boolean to indicate whether a single or multiple spies can be active at once
    }
);