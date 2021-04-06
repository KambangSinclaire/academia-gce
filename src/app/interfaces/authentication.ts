export interface LoggedInUserModel {
    username: string;
    userStatus: string;
    userId: string;
    permissions: string[];
}
export interface User {
    name: string,
    username: string,
    email: string,
    creationDate: string,
    role: string,
    status: string,
    preview: string,
}
export interface Profile {
    status: number;
    message: string;
    data: {
        user: {
            user_id: string;
            first_name: string;
            last_name: string;
            username: string;
            email: string;
            create_time: string;
            update_time: string;
            user_status: string;
            balance: string;
            user_profile_image: string;
            user_country: string;
            user_phone: string;
            user_register_status: string;
            user_email_confirmed: string;
            user_personal_id_confirmed: string;
            user_personal_id: string;
            roles_role_id: string;
            account_id: string;
            role_name: string;
        };
        permissions: [{ permission_name: string }];
    };
}

export interface SignFormModel {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    username: string;
    password: string;
}


export interface LoginFormModel {
    email: string;
    password: string;
}
