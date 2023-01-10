type HeadingProps = {
    children: string,
    styles: React.CSSProperties
}

export const Heading = (props: HeadingProps) => {
    return <header className="h1 d-flex flex-wrap justify-content-center py-3" style={props.styles}>
        {props.children}
    </header>
}