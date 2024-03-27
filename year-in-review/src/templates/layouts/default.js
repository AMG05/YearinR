import { Fragment, h } from 'preact';
import Skip from '@components/skip';
import Header from '@components/header';
import Main from '@components/main';
import Footer from '@components/footer';

const Default = ({ children }) => <Fragment>
    <Header class="header">
        <Skip />
    </Header>
    <div class="hero"></div>
    <nav class="primary-nav">
        <div class="wrap">
            <ul class="primary-nav__list">
                <li class="primary-nav__item"><a class="primary-nav__link js-scroll-spy" href="#work">Work</a></li>
                <li class="primary-nav__item"><a class="primary-nav__link js-scroll-spy" href="#impact">Impact</a></li>
                <li class="primary-nav__item"><a class="primary-nav__link js-scroll-spy" href="#culture">Culture</a></li>
            </ul>
        </div>
    </nav>
    <Main>
        { children }
    </Main>
    <Footer />
</Fragment>;

export default Default;