(function() {
    function tableCreate() {
        var place = document.getElementById('table-box');
        // create a table element
        var tbl = document.createElement('table');

        // set a class to table to style it in css
        tbl.className = 'table';

        // table header
        var trHeader = tbl.insertRow();
        trHeader.insertCell();
        trHeader.insertCell().appendChild(document.createTextNode('Table'));
        trHeader.insertCell();

        // table body
        for (var i = 0; i < 8; i++) {
            var tr = tbl.insertRow();
            for (var j = 0; j < 3; j++) {
                var td = tr.insertCell();
                switch (j) {
                    case 0:
                        {
                            td.appendChild(document.createTextNode(i + 1));
                            break;
                        }
                    case 1:
                        {
                            var a = document.createElement('a');
                            var linkText = document.createTextNode('link to image ' + (i + 1));
                            a.appendChild(linkText);
                            a.href = '#';
                            a.onclick = function(e) {
                                e.preventDefault();
                                document.getElementById('image-holder').src = 'http://lorempixel.com/400/400/?' + new Date().getTime();;
                            };
                            td.appendChild(a);
                            break;
                        }
                    case 2:
                        {
                            td.appendChild(document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'));
                            break;
                        }
                }
            }
        }

        // some empty cells like in mockup
        for (var i = 0; i < 5; i++) {
            var tr = tbl.insertRow();
            tr.insertCell().appendChild(document.createTextNode('\u00A0'));;
            tr.insertCell().appendChild(document.createTextNode('\u00A0'));;
            tr.insertCell().appendChild(document.createTextNode('\u00A0'));;
        }

        // table object creation done. Append it to document.
        place.appendChild(tbl);
    }

    // function to toggle sidebar menu
    function sideMenuHandler() {
        // onclick event
        document.getElementById('side-menu-btn').onclick = function(e) {
            var divMenuPanel = document.getElementById('side-menu-panel');
            var bodyDocument = document.body;
            if (divMenuPanel.className.indexOf('side-menu-active') > -1) {
                divMenuPanel.className = divMenuPanel.className.replace('side-menu-active', '');
                bodyDocument.className = bodyDocument.className.replace(' not-scrollable', '');
            } else {
                divMenuPanel.className = divMenuPanel.className + ' side-menu-active';
                bodyDocument.className = bodyDocument.className + ' not-scrollable';
            }
        };
    }

    tableCreate();
    sideMenuHandler();
})();
