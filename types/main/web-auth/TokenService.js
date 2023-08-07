"use strict";
exports.__esModule = true;
exports.TokenService = void 0;
var Helper_1 = require("./Helper");
var TokenService;
(function (TokenService) {
    /**
     * renew token using refresh token
     * @param options
     * @returns
     */
    function renewToken(options) {
        if (!options.refresh_token) {
            throw new Helper_1.CustomException("refresh_token cannot be empty", 417);
        }
        options.client_id = window.webAuthSettings.client_id;
        options.grant_type = 'refresh_token';
        var _serviceURL = window.webAuthSettings.authority + "/token-srv/token";
        return Helper_1.Helper.createPostPromise(options, _serviceURL, undefined, "POST");
    }
    TokenService.renewToken = renewToken;
    ;
    /**
     * get access token from code
     * @param options
     * @returns
     */
    function getAccessToken(options) {
        if (!options.code) {
            throw new Helper_1.CustomException("code cannot be empty", 417);
        }
        options.client_id = window.webAuthSettings.client_id;
        options.redirect_uri = window.webAuthSettings.redirect_uri;
        options.grant_type = "authorization_code";
        if (!window.webAuthSettings.disablePKCE) {
            window.usermanager._client.createSigninRequest(window.webAuthSettings).then(function (signInRequest) {
                var _a;
                options.code_verifier = (_a = signInRequest.state) === null || _a === void 0 ? void 0 : _a.code_verifier;
            });
        }
        var _serviceURL = window.webAuthSettings.authority + "/token-srv/token";
        return Helper_1.Helper.createPostPromise(options, _serviceURL, undefined, "POST");
    }
    TokenService.getAccessToken = getAccessToken;
    ;
    /**
     * validate access token
     * @param options
     * @returns
     */
    function validateAccessToken(options) {
        if (!options.token || !options.token_type_hint) {
            throw new Helper_1.CustomException("token or token_type_hint cannot be empty", 417);
        }
        var _serviceURL = window.webAuthSettings.authority + "/token-srv/introspect";
        return Helper_1.Helper.createPostPromise(options, _serviceURL, false, "POST");
    }
    TokenService.validateAccessToken = validateAccessToken;
    ;
    /**
     * get scope consent details
     * @param options
     * @returns
     */
    function getScopeConsentDetails(options) {
        var _serviceURL = window.webAuthSettings.authority + "/token-srv/prelogin/metadata/" + options.track_id + "?acceptLanguage=" + options.locale;
        return Helper_1.Helper.createPostPromise(undefined, _serviceURL, false, "GET");
    }
    TokenService.getScopeConsentDetails = getScopeConsentDetails;
    ;
    /**
     * updateSuggestMFA
     * @param track_id
     * @param options
     * @returns
     */
    function updateSuggestMFA(track_id, options) {
        var _serviceURL = window.webAuthSettings.authority + "/token-srv/prelogin/suggested/mfa/update/" + track_id;
        return Helper_1.Helper.createPostPromise(options, _serviceURL, false, "POST");
    }
    TokenService.updateSuggestMFA = updateSuggestMFA;
    ;
    /**
     * getMissingFieldsLogin
     * @param trackId
     * @returns
     */
    function getMissingFieldsLogin(trackId) {
        var _serviceURL = window.webAuthSettings.authority + "/token-srv/prelogin/metadata/" + trackId;
        return Helper_1.Helper.createPostPromise(undefined, _serviceURL, false, "GET");
    }
    TokenService.getMissingFieldsLogin = getMissingFieldsLogin;
    ;
    /**
     * device code flow - verify
     * @param code
     */
    function deviceCodeVerify(code) {
        var params = "user_code=".concat(encodeURI(code));
        var url = "".concat(window.webAuthSettings.authority, "/token-srv/device/verify?").concat(params);
        try {
            var options = {
                user_code: encodeURI(code)
            };
            var form = Helper_1.Helper.createForm(url, options, 'GET');
            document.body.appendChild(form);
            form.submit();
        }
        catch (ex) {
            throw new Error(ex);
        }
    }
    TokenService.deviceCodeVerify = deviceCodeVerify;
})(TokenService = exports.TokenService || (exports.TokenService = {}));