export type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>

export type Model = {
    id: number,
    name: string,
    description: string,
    image: string | null,
    likes: number,
    isLiked: number,
    slug: string,
    dateAdded: string,
}

export type ModelDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

export type CategoriesNavBarProps = {
    categories: Category[]
}

export type CategoryDetailPageProps = {
    params: Promise<{
        categoryName: string
    }>
}

export type ModelsGridProps = {
    title: string,
    models: Model[],
    noMatches?: boolean,
}

export type Category = {
    displayName: string,
    slug: string,
    id: number,
}

export type CategoriesData = {
    categories: Category[]
}

export type Sessions = {
    session_token: Buffer,
    id: number,
}

export type NavLinkProps = {
    href: string,
    children: React.ReactNode,
    isActive: boolean,
}

export type FeaturesProps = {
    children: React.ReactNode,
    title: string,
    text: string,
}

export type ModelsPageProps = {
    searchParams: Promise<{
        [key in string]: string
    }>
}

export type LikeProps = {
    count: number,
    user_id: string,
    model_id: number,
    liked: boolean
}