export enum DrawerScreens {
    TABS = 'tabs',
    ABOUT_DEV = 'about-dev',
}

export type DrawerParamList = {
    [DrawerScreens.TABS]: undefined;
    [DrawerScreens.ABOUT_DEV]: undefined;
};
