import { h } from 'preact';

const head = ({
    charset = 'utf-8',
    title,
    meta,
    viewport = 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
    css,
    children
}) => <head>
    <meta charset={charset} />
    <meta name="viewport" content={viewport} />
    <meta property="og:image" content="/static/img/og-image.png" />
    <link rel="shortcut icon" href="/static/img/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/img/apple-touch-icon.png" />
    <link rel="apple-touch-icon-precomposed" href="/static/img/apple-touch-icon.png" />
    <link rel="shortcut icon" href="/static/img/apple-touch-icon.png"/>
    <title>{title}</title>
    {css && <link rel="stylesheet" href={`/${css}`} />}
    {children}
    {meta && meta.map(item => {
        if (item.name) return <meta name={item.name} content={item.content} />;
        if (item.property) return <meta property={item.property} content={item.content} />;
    })}
</head>;

export default head;
    