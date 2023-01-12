'use strict';

let pages = ['../catalog/IPad-Catalog.html', '../catalog/IPhone-Catalog.html', '../catalog/Macbook-Catalog.html', '../about/About.html', '../Index.html', '../products/IPad-Air.html', '../products/IPad-Mini.html', '../products/IPad-Pro.html', '../products/IPad.html', '../products/IPhone-14-Pro.html', '../products/IPhone-14.html', '../products/IPhone-SE.html', '../products/Macbook-Air.html', '../products/Macbook-Pro.html'];

$(document).ready(function () {
    let query = $(location).attr('search');
    query = query.substring(query.indexOf('=') + 1).toLowerCase();
    if (!query) return $('#search-header').html('Nothing was provided as a search query.');
    let queryHTML = decodeURI(query.replace('-', ' '));
    $('#search-header span, title').text((queryHTML.length > 16) ? queryHTML.replace(new RegExp(`${queryHTML.substring(12)}$`), '...') : queryHTML);
    let searchResults = pages.filter(elem => elem.replace(/\.|\/|html/g, '').toLowerCase().includes(query));
    if (!searchResults.length) return $('#search-items .row').append('<ul style="color: #fff"><li>Nothing was found.</li></ul>');
    console.log(searchResults);
    searchResults.forEach(result => {
        $('#search-items .row').append(`
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${result.replace(/\.\.\/((catalog|products|about|home)\/)*|\.html/g, '').replaceAll('-', ' ')}</h5>
                        <a href="${result.toLowerCase()}" class="btn btn-success">Go</a>
                    </div>
                </div>
            </div>
        `)
    })
})
