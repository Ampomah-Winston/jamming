let accessToken;

const Spotify = {
    getAccessToken(){
        if(accessToken){
            return accessToken;
        }

        //check for access token matchers
        const accessTokenMatch = windows.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = windows.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1])
            // This clears the parameters, allowing us to grab a new access token when it expires.
            window.setTimeout(()=>accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }
    }
}

export default Spotify;