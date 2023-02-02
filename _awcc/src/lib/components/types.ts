export interface TextImage {
    src: string,
    alt: string,
    text: string,
    href?: string
}

export interface QuickLink {
    href: string,
    text: string,
    icon: ConstructorOfATypedSvelteComponent
}