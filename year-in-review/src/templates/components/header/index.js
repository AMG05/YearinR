import { h } from 'preact';

const Header = ({ children }) => <header class="header">
        { children }
        <div class="wrap">
            <div class="row">
                <div class="col xs-6">
                    <img src="/static/img/logo.svg" alt="Storm ID logo" class="header__logo"/>
                </div>
                <div class="col xs-6">
                    <h1 class="header__title">A year in review</h1>    
                </div>
            </div>
        </div>
</header>;

export default Header;