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