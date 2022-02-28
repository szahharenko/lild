export const API = 'https://xn--vrskus-bua.ee/api/';
export const CDN = API + 'media/';

//const revealDate = '2022-02-27T18:00:00';
//new Date() >= new Date(revealDate);

export const isRevealed = true;

export type UserSubmitForm = {
    action: 'register';
    email: string;
    delivery: string;
    phoneNumber: string;
    acceptTerms: boolean;
};

export enum RegisterErrors {
    AlreadyExist = 1
}
export type UserFormResponse = {
    status: 0 | 1;
    error?: RegisterErrors
};

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

export type LeafElement = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const animationTime = 2000;