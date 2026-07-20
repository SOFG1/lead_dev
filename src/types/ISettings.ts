export interface ISettings {
  random: boolean;
  lists: boolean;
  tags: string[];
}

export const defaultSettings: ISettings = {
  random: false,
  lists: false,
  tags: [],
};
