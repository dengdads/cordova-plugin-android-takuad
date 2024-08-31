var exec = require("cordova/exec");

var PLUGIN_NAME = "TakuAd";

var takuAd = {
    initTaku: function (
        appId,
        appKey,
        splashAdPlacementId,
        rewardAdPlacementId
    ) {
        exec(null, null, "TakuAd", "initTaku", [
            appId,
            appKey,
            splashAdPlacementId,
            rewardAdPlacementId,
        ]);
    },
    loadSplashAd: function () {
        exec(null, null, "TakuAd", "loadSplashAd", []);
    },
    showSplashAd: function () {
        exec(null, null, "TakuAd", "showSplashAd", []);
    },
    loadRewardAd: function () {
        exec(null, null, "TakuAd", "loadRewardAd", []);
    },
    showRewardAd: function () {
        exec(null, null, "TakuAd", "showRewardAd", []);
    },
    isSplashAdReady: function () {
        exec(null, null, "TakuAd", "isSplashAdReady", []);
    },
};

module.exports = takuAd;
