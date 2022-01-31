export enum VIEWS {
    LOADING = 0,
    READY = 1,
    RULES = 2
}

export enum CONTENT {
    WELCOME_ANIMATION = 0,
    ABOUT = 1,
    BAG = 2,
    FAIL_RESULT = 4,
    REGISTER = 5,
    REGISTER_SUCCESS = 6
}

export type LeafElement = 0 | 1 | 2 | 3;

export const animationTime = 2000;