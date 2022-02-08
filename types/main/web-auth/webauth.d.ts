export = WebAuth;
declare function WebAuth(settings: any): void;
declare class WebAuth {
    constructor(settings: any);
    loginWithBrowser(): void;
    registerWithBrowser(): void;
    loginCallback(): Promise<any>;
    getUserInfo(): Promise<any>;
    getUserProfile(options: any): Promise<any>;
    getProfileInfo(access_token: any): Promise<any>;
    logout(): Promise<any>;
    logoutCallback(): Promise<any>;
    renewToken(options: any): Promise<any>;
    generateCodeVerifier(): void;
    generateRandomString(length: any): string;
    generateCodeChallenge(code_verifier: any): any;
    base64URL(string: any): any;
    getLoginURL(): string;
    getAccessToken(options: any): Promise<any>;
    validateAccessToken(options: any): Promise<any>;
    getRequestId(): Promise<any>;
    loginWithCredentials(options: any): void;
    loginWithSocial(options: any, queryParams: any): void;
    registerWithSocial(options: any, queryParams: any): void;
    getMissingFields(options: any): Promise<any>;
    getTenantInfo(): Promise<any>;
    logoutUser(options: any): void;
    getClientInfo(options: any): Promise<any>;
    getRegistrationSetup(options: any): Promise<any>;
    register(options: any, headers: any): Promise<any>;
    getInviteUserDetails(options: any): Promise<any>;
    getCommunicationStatus(options: any): Promise<any>;
    initiateAccountVerification(options: any): void;
    verifyAccount(options: any): Promise<any>;
    initiateResetPassword(options: any): Promise<any>;
    handleResetPassword(options: any): void;
    resetPassword(options: any): void;
    getMFAList(options: any): Promise<any>;
    getMFAListV2(options: any): Promise<any>;
    initiateMFAV2(options: any): Promise<any>;
    initiateEmail(options: any): Promise<any>;
    initiateEmailV2(options: any): Promise<any>;
    initiateSMS(options: any): Promise<any>;
    initiateSMSV2(options: any): Promise<any>;
    initiateIVR(options: any): Promise<any>;
    initiateIVRV2(options: any): Promise<any>;
    initiateBackupcode(options: any): Promise<any>;
    initiateBackupcodeV2(options: any): Promise<any>;
    initiateTOTP(options: any): Promise<any>;
    initiateTOTPV2(options: any): Promise<any>;
    initiatePattern(options: any): Promise<any>;
    initiatePatternV2(options: any): Promise<any>;
    initiateTouchId(options: any): Promise<any>;
    initiateTouchIdV2(options: any): Promise<any>;
    initiateSmartPush(options: any): Promise<any>;
    initiateSmartPushV2(options: any): Promise<any>;
    initiateFace(options: any): Promise<any>;
    initiateFaceV2(options: any): Promise<any>;
    initiateVoice(options: any): Promise<any>;
    initiateVoiceV2(options: any): Promise<any>;
    authenticateMFAV2(options: any): Promise<any>;
    cancelMFAV2(options: any): Promise<any>;
    authenticateEmail(options: any): Promise<any>;
    authenticateEmailV2(options: any): Promise<any>;
    authenticateSMS(options: any): Promise<any>;
    authenticateSMSV2(options: any): Promise<any>;
    authenticateIVR(options: any): Promise<any>;
    authenticateIVRV2(options: any): Promise<any>;
    authenticateBackupcode(options: any): Promise<any>;
    authenticateBackupcodeV2(options: any): Promise<any>;
    authenticateTOTP(options: any): Promise<any>;
    authenticateTOTPV2(options: any): Promise<any>;
    passwordlessLogin(options: any): void;
    getConsentDetails(options: any): Promise<any>;
    getConsentDetailsV2(options: any): Promise<any>;
    acceptConsent(options: any): Promise<any>;
    acceptConsentV2(options: any): Promise<any>;
    getScopeConsentDetails(options: any): Promise<any>;
    getScopeConsentVersionDetailsV2(options: any): Promise<any>;
    acceptScopeConsent(options: any): Promise<any>;
    scopeConsentContinue(options: any): void;
    getDeduplicationDetails(options: any): Promise<any>;
    deduplicationLogin(options: any): void;
    registerDeduplication(options: any): Promise<any>;
    consentContinue(options: any): void;
    mfaContinue(options: any): void;
    firstTimeChangePassword(options: any): void;
    changePassword(options: any, access_token: any): Promise<any>;
    updateProfile(options: any, access_token: any, sub: any): Promise<any>;
    getUserActivities(options: any, access_token: any): Promise<any>;
    getUnreviewedDevices(access_token: any, sub: any): Promise<any>;
    getReviewedDevices(access_token: any, sub: any): Promise<any>;
    reviewDevice(options: any, access_token: any, sub: any): Promise<any>;
    getAcceptedConsentList(options: any, access_token: any): Promise<any>;
    viewAcceptedConsent(options: any, access_token: any): Promise<any>;
    getConfiguredVerificationList(options: any, access_token: any): Promise<any>;
    initiateLinkAccount(options: any, access_token: any): Promise<any>;
    completeLinkAccount(options: any, access_token: any): Promise<any>;
    getLinkedUsers(access_token: any, sub: any): Promise<any>;
    unlinkAccount(access_token: any, identityId: any): Promise<any>;
    getAllVerificationList(access_token: any): Promise<any>;
    updateProfileImage(options: any, access_token: any): Promise<any>;
    setupEmail(options: any): Promise<any>;
    setupSMS(options: any): Promise<any>;
    setupIVR(options: any): Promise<any>;
    setupBackupcode(options: any, access_token: any): Promise<any>;
    setupTOTP(options: any, access_token: any): Promise<any>;
    setupPattern(options: any, access_token: any): Promise<any>;
    setupTouchId(options: any, access_token: any): Promise<any>;
    setupSmartPush(options: any, access_token: any): Promise<any>;
    setupFace(options: any, access_token: any): Promise<any>;
    setupVoice(options: any, access_token: any): Promise<any>;
    enrollEmail(options: any, access_token: any): Promise<any>;
    enrollSMS(options: any, access_token: any): Promise<any>;
    enrollIVR(options: any, access_token: any): Promise<any>;
    enrollTOTP(options: any, access_token: any): Promise<any>;
    updateSuggestMFA(track_id: any, options: any): Promise<any>;
    enrollVerification(options: any): Promise<any>;
    updateSocket(status_id: any): Promise<any>;
    setupFidoVerification(options: any): Promise<any>;
    checkVerificationTypeConfigured(options: any): Promise<any>;
    authenticateVerification(options: any): Promise<any>;
    authenticateFaceVerification(options: any): Promise<any>;
    initiateVerification(options: any): Promise<any>;
    deleteUserAccount(options: any): Promise<any>;
    getMissingFieldsLogin(trackId: any): Promise<any>;
    progressiveRegistration(options: any, headers: any): Promise<any>;
    loginAfterRegister(options: any): void;
    userCheckExists(options: any): Promise<any>;
}