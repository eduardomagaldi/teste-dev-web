/*jslint browser: true */
/*global $, Backbone */

'use strict';

function template(model) {
    var arr = [],
        nome = model.get('raca') + ' ' + model.get('cor');



    arr.push('<a class="fancybox" href="#' + model.get('_id') + '">');
    arr.push('<div style="display:none"><div id="' + model.get('_id') + '">' + model.get('raca') + '</div></div>');
    arr.push('<div class="col-md-3">');
    arr.push('<div class="box-cachorro">');
    arr.push('<img src="' + model.get('img') + '" alt="' + nome + '">');
    arr.push('<div class="btn-foto">Leva eu!</div>');
    arr.push('<div>');
    arr.push('<span class="titulo-cachorro">' + nome + '</span>');
    arr.push('<span class="detalhes-cachorro"><strong>R$' + model.get('preco') + '</strong><br>' + model.get('idade') + '</span>');
    arr.push('</div>');
    arr.push('</div>');
    arr.push('</div>');
    arr.push('</a>');
    return arr.join('');
}

function busca(collection, view, val) {
    collection.url = '/db/dogs/' + val;
    collection.fetch({
        success: function () {
            collection.url = '/db/dogs';
            view.render();
        },
        error: function () {
            collection.url = '/db/dogs';
            view.render();
        }
    });
}


