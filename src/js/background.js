// SEO Peek
// Original author: Sander Heilbron (https://github.com/sanderheilbron/seo-peek)
// Maintained by: Martijn Jeurissen (https://github.com/martijnjeurissen/seo-peek)

// Check whether new version or update is installed
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install") {
        // Set default storage settings on first install
        chrome.storage.sync.set({
            metaKeywordsSetting: 'meta-keywords-show',
            paginationDirectivesSetting: 'pagination-directives-show',
            mobileDirectivesSetting: 'mobile-directives-show',
            internationalDirectivesSetting: 'international-directives-show'
        });
    }
});
