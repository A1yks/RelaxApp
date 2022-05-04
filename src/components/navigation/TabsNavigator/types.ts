export enum TabScreens {
    MAIN = 'main',
    PROFILE = 'profile',
    RECOMMENDATIONS = 'recommendations',
}

export type TabsNavigatorParamList = {
    [TabScreens.MAIN]: undefined;
    [TabScreens.PROFILE]: undefined;
    [TabScreens.RECOMMENDATIONS]: undefined;
};
