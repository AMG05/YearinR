import { h } from 'preact';

export const Blockquote = ({ image, alt, children, author, authorTitle, type }) => {

    return <div class="wrap">
                <div class="row">
                    <div class={"blockquote" + ((type) ? " blockquote--"+type : "")}>
                        <blockquote class="blockquote__quote">
                            {children}
                        </blockquote>
                        <div class="blockquote__footer">
                        {image &&<img class="blockquote__image" src={image} alt={alt}/>}
                            <span class="blockquote__meta">
                                <span class="blockquote__author">{author}</span>
                                <span class="blockquote__author-title">{authorTitle}</span>                            
                            </span>
                        </div>
                    </div>        
                </div>        
        </div>
}

export default Blockquote;