import { h, Fragment } from 'preact';

export const Stat = ({type, title, figure, suffix, summary  }) => <Fragment>
    
    {(title && !type) ?  <div class="col xs-12 md-4">
        <div class="stat">
            <h2 class="stat__title">{title}</h2>
            <div class="stat__figure">{figure}{suffix &&<span class="stat__suffix">{suffix}</span>}</div>
            <p class="stat__summary">{summary}</p>
        </div>
    </div> : null}

    {(type === "hero") ? <div class="col xs-12">
        <div class="stat stat--hero">
            <h2 class="stat__title">{title}</h2>
            <div class="row">
                <div class="col xs-12 md-6">
                    <div class="stat__figure">{figure}{suffix &&<span class="stat__suffix">{suffix}</span>}</div>
                </div>
                <div class="col xs-12 md-6">
                    <p class="stat__summary">{summary}</p> 
                </div>
            </div>
        </div>
    </div> : null}

</Fragment>;

export default Stat;