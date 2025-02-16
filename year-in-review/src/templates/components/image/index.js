import { h } from 'preact';

/**
 * Responsive image component, using the <picture> element
 * @param {string} alt - Image alt tag
 * @param {string} className - Class name
 * @param {string} decoding='async' - 'async', 'sync', 'auto'
 * @param {string} height=null - Image height attribute
 * @param {string} imgClassName - img element Class name
 * @param {string} loading='lazy' - 'lazy', 'eager'
 * @param {array} [sources]	- Array of Objects for <picture> —> <source> attributes {src, media}
 * @param {string} src - Reference to local/relative or remote image URI
 * @param {string} width=null - Image width attribute
 **/

const Image=({
    alt,
    className = '',
    decoding = 'async',
    imgClassName,
    height = null,
    loading = 'lazy',
    src,
    sources,
    width = null
}) => <picture class={className}>
    { sources && sources.map(srcData => <source srcset={srcData.src} media={srcData.media} />) }
    <img
        alt={alt}
        class={imgClassName}
        decoding={decoding}
        height={height}
        loading={loading}
        src={`${src}`}
        width={width}
    />
</picture>;

export default Image;

/**
 * Wrapper for ImageBlock component, usually where a caption is required
 * @param {Object} children - an ImageBlock 
 * @param {string} caption - Text to display with image
 * @param {string} className - Class name for the <figure>
 * @param {string} captionClassName - Class name  for the <caption>
 */
export const Figure = ({
    children,
    className='image-block',
    captionClassName='image-block__caption',
    caption
}) => <figure class={className}>
    { children }
    { caption &&
        <figcaption class={captionClassName}>
            {caption}
        </figcaption>
    }
</figure>;