export type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>

export type Model = {
    id: number,
    name: string,
    description: string,
    image: string | null,
    likes: number,
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

export type NavLinkProps = {
    href: string,
    children: React.ReactNode,
    isActive: boolean,
}

export type ModelsPageProps = {
    searchParams: Promise<{
        [key in string]: string
    }>
}