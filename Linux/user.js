/**
 * @file Firefox user.js - Linux
 * @author HellPC
 * @date 2026.02.11
 * @link https://github.com/He11PC/firefox-user-js
 * @license MIT
 */


/** ------------ **/
/** QUICK ACCESS **/
/** ------------ **/

// Disable Firefox password manager if you are using something else
//user_pref("privacy.cpd.passwords", true);
//user_pref("signon.rememberSignons", false);

// Disable disk cache if you have a fast Internet connexion to prevent SSD wear
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk_cache_ssl", false);

// Enable DNS prefetch if you trust your DNS provider privacy policies to improve responsiveness
//user_pref("network.dns.disablePrefetch", false);
//user_pref("network.dns.disablePrefetchFromHTTPS", false);

// Disable website notifications to prevent fake virus alerts
user_pref("dom.push.enabled", false);
user_pref("dom.pushconnection.enabled", false);
user_pref("dom.webnotifications.enabled", false);

// Disable AV1 codec if your video card can't decode it
//user_pref("media.av1.enabled", false);

// Enable HDR on wayland if you want to try it
//user_pref("gfx.wayland.hdr", true); // Can create glitches
//user_pref("gfx.webrender.compositor.force-enabled", true); // Can be unstable, blocklisted by gfxInfo


/** ------------ **/
/** EASE OF LIFE **/
/** ------------ **/

/** COLORS **/
user_pref("gfx.color_management.mode", 1);

/** CUSTOMIZATION **/
user_pref("browser.tabs.insertAfterCurrent", false);
user_pref("media.autoplay.default", 5);
user_pref("permissions.default.desktop-notification", 2);
user_pref("reader.parse-on-load.enabled", false);

/** FULLSCREEN **/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.transition.timeout", 0);
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

/** MISCELLANEOUS **/
user_pref("browser.tabs.searchclipboardfor.middleclick", false);
user_pref("browser.uitour.enabled", false);
user_pref("pdfjs.disabled", false);
user_pref("pdfjs.enableScripting", false);

/** SESSION **/
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.sessionstore.interval", 60000);


/** ----------- **/
/** PERFORMANCE **/
/** ----------- **/

/** CACHE **/
user_pref("browser.cache.memory.enable", true); // Should be true by default
user_pref("browser.cache.memory.capacity", 1048576); // Default = -1 (https://kb.mozillazine.org/Browser.cache.memory.capacity#-1)
user_pref("image.cache.size", 10485760);
user_pref("image.mem.decode_bytes_at_a_time", 32768);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** GFX **/
user_pref("dom.webgpu.enabled", true);
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.cache-items", 16384);
user_pref("gfx.canvas.accelerated.cache-size", 2048);
user_pref("gfx.content.skia-font-cache-size", 40);
user_pref("gfx.direct3d11.reuse-decoder-device-force-enabled", true); // Can be unstable
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.program-binary-disk", true);
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);
user_pref("gfx.x11-egl.force-enabled", true); // Can be unstable
//user_pref("layers.gpu-process.enabled", true); // Doesn't work with Wayland
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.gpu-process-decoder", true);
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.webrtc.hw.h264.enabled", true);
user_pref("media.wmf.zero-copy-nv12-textures-force-enabled", true);
//user_pref("widget.dmabuf.force-enabled", true); // Can be unstable and blocklisted by gfxInfo with nVidia GPU
user_pref("widget.wayland.fractional-scale.enabled", true);

/** NETWORK **/
user_pref("network.buffer.cache.size", 262144);
user_pref("network.buffer.cache.count", 128);
user_pref("network.dns.max_high_priority_threads", 8);
user_pref("network.dnsCacheEntries", 1000);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 12);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 6);
user_pref("network.http.pacing.requests.burst", 16);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** PROCESS **/
user_pref("dom.ipc.forkserver.enable", true);


/** ------- **/
/** PRIVACY **/
/** ------- **/

/** AI **/
//user_pref("browser.ml.enable", false);    // Should disable everything
//user_pref("browser.ml.chat.enabled", false);  // Disable AI chatbots in Firefox sidebar, context menus and other places
user_pref("browser.ml.chat.menu", false); // Ask chatbot from tab context menu
user_pref("browser.ml.chat.page", false);   // Ask chatbot from page context menu
//user_pref("browser.ml.chat.sidebar", false);  // Chatbot from sidebar
user_pref("browser.ml.linkPreview.enabled", false); // AI-powered link preview
user_pref("browser.ml.pageAssist.enabled", false);  // AI webpage summary
user_pref("browser.ml.smartAssist.enabled", false); // Smart Assist
user_pref("browser.tabs.groups.smart.enabled", false);  // AI-powered tab grouping
//user_pref("browser.search.visualSearch.featureGate", false);    // Search image with Google Lens
user_pref("browser.urlbar.quicksuggest.mlEnabled", false);  // AI-powered quick suggestions inside the address bar
user_pref("extensions.ml.enabled", false);  // AI API for extensions
user_pref("pdfjs.enableAltText", false);    // AI-powered automatic image descriptions inside pdf viewer
user_pref("pdfjs.enableAltTextModelDownload", false);   // Prevents downloading the AI model unless the user opts in
user_pref("places.semanticHistory.featureGate", false); // Semantic History Search from the address bar

/** CRASH REPORTS **/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** CONTAINERS **/
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

/** GEOLOCATION **/
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("geo.provider.use_geoclue", false);

/** PRIVACY **/
user_pref("browser.contentanalysis.default_allow", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("dom.private-attribution.submission.enabled", false);
user_pref("toolkit.winRegisterApplicationRestart", false);

/** RECOMMENDATIONS **/
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shopping.experience2023.enabled", false);
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.amp.featureGate", false);
user_pref("browser.urlbar.fakespot.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.weather.featureGate", false);
user_pref("browser.urlbar.wikipedia.featureGate", false);
user_pref("browser.urlbar.yelp.featureGate", false);

/** SANITIZE **/
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", false);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.offlineApps", false);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", false);
user_pref("privacy.clearOnShutdown_v2.cache", false);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false);
user_pref("privacy.clearOnShutdown_v2.downloads", true);
user_pref("privacy.clearOnShutdown_v2.formdata", true);
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false);
user_pref("privacy.clearOnShutdown_v2.siteSettings", false);
user_pref("privacy.clearSiteData.cache", true);
user_pref("privacy.clearSiteData.cookiesAndStorage", true);
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", true);
user_pref("privacy.clearSiteData.siteSettings", true);
user_pref("privacy.clearHistory.cache", true);
user_pref("privacy.clearHistory.cookiesAndStorage", false);
user_pref("privacy.clearHistory.historyFormDataAndDownloads", true);
user_pref("privacy.clearHistory.siteSettings", false);
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", false);
user_pref("privacy.cpd.openWindows", false);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", false);

/** STUDIES **/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** TELEMETRY **/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("default-browser-agent.enabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);


/** -------- **/
/** SECURITY **/
/** -------- **/

/** AUTOFILL **/
user_pref("browser.formfill.enable", false);
//user_pref("browser.urlbar.autoFill", false);
//user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);

/** CAPTIVE PORTAL **/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

/** DOWNLOADS **/
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);

/** EXTENSIONS **/
user_pref("extensions.enabledScopes", 5);
user_pref("extensions.postDownloadThirdPartyPrompt", false);

/** OTHERS **/
user_pref("devtools.debugger.remote-enabled", false);
user_pref("network.IDN_show_punycode", true);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");

/** PREFETCH **/
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.urlbar.speculativeConnect.enabled", false);

/** SECURITY **/
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
//user_pref("privacy.trackingprotection.allow_list.baseline.enabled", false);
user_pref("privacy.trackingprotection.allow_list.convenience.enabled", false);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.csp.reporting.enabled", false);
user_pref("security.pki.crlite_mode", 3);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);
