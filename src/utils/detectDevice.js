export const detectDevice=()=>{
    const ua =navigator.userAgent;
    if(/android/i.test(ua)) return 'Android';
    if(/ipad|iphone|ipad/.test(ua)) return 'ios';
    return 'Desktop';
}