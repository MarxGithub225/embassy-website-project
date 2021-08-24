export interface User {
    id : number;
    lastname : string;
    firstname : string;
    email : string;
    state : string;
    date : number;
}


export interface State {
    user: User,
    loading: Boolean,
    banners: bannerState [],
    embassies: embassyState [],
    news: newsState [],
}


export interface bannerState {
    banners : any[] | [],
}


export interface userState {
    users : any[] | [],
}

export interface embassyState {
    embassies : any[] | [],
}

export interface newsState {
    news : any[] | [],
}