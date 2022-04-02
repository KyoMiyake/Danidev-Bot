const _TamperRoot = this;
(async function() {
    GM.xmlHttpRequest({
        method: "GET",
        url: ``,
        onload: function(res) {
            new Function(res.responseText)(_TamperRoot);
        }
    });
})();