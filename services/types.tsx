export type PostData = {
    tenant: string;
    form_ref: string;
    created_at: string;
    comm_pref: Array<string>;
    form_data: any;
}

export type createBooking = {
    tenant: string;
    user: {
        dni: string;
        name: string;
        email: string;
        cellphone: string;
        details: {
            code: string;
            value: string;
            description: string;
        }
    };
    booking: {
        status: string;
        code: string;
        details: any;
        resource_code: string;
        start_date: string;
        end_date: string
    }
}

export type updateBooking = {
    tenant: string;
    user: any;
    booking: any;
}

export type credentials = {
    code: string;
    accessToken: string | undefined;
    refreshToken: string | undefined;
    expiryDate: number | undefined;
    tokenType: string | undefined;
}
