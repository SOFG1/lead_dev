export interface ISettings {
    random: boolean
    tags: string[]
}

export const defaultSettings: ISettings = {
    random: false,
    tags: []
}