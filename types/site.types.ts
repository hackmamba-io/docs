interface ISiteMetaLinks {
    twitter: string;
    github: string;
    website: string;
}

export interface ISiteMetaConfig {
    name: string;
    url: string;
    ogImage: string;
    description: string;
    links: ISiteMetaLinks;
    keywords: string[];
}

interface IThemeConfig {
    textColor: string;
    borderColor: string;
    bgColor: string;
}

export interface ISiteThemeConfig {
    light: IThemeConfig;
    dark?: IThemeConfig;
    multiMode: boolean;
}