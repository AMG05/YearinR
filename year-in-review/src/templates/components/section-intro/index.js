import { h } from 'preact';

export const SectionIntro = ({ meta, title, subtitle }) => {

    return <div class="wrap">
        <div class="section-intro">
            <div class="row">
                <div class="col xs-12 md-8">
                    {meta &&<div class="section-intro__meta">{meta}</div>}
                    <h2 class="section-intro__title">{title}</h2>
                    {subtitle &&<p class="section-intro__subtitle">{subtitle}</p>}
                </div>               
            </div>
        </div>
    </div>

}

export default SectionIntro;