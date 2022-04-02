const _TamperRoot = this;
(async function() {
    GM.xmlHttpRequest({
        method: "GET",
        url: `https://raw.githubusercontent.com/KyoMiyake/Danidev-Bot/main/minimap.js`,
        onload: function(res) {
            new Function(res.responseText)(_TamperRoot);
        }
    });
})();