import { h } from 'preact';

const LogoGrid = ({children}) => (
<div class="logo-grid">
    <div class="wrap">
        <div class="row">
        {(Array.isArray(children)) ? children.map((child) => {
            return <div class="col xs-6 md-4">
            <div class="logo-grid__item">
                <div class="logo-grid__wrap">
                    <div class="logo-grid__flex">
                        {child}
                    </div>   
                </div>
            </div>
        </div>
        }) : <div class="col xs-6 md-4">
                <div class="logo-grid__item">
                    <div class="logo-grid__wrap">
                        <div class="logo-grid__flex">
                            {children}
                        </div>
                    </div>
                </div>
            </div> } 
        </div>
    </div>    
</div>
);

export default LogoGrid;