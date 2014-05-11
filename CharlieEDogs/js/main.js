/*jslint browser: true */
/*global $, Backbone, alert, busca, template */

$(document).ready(function () {

    'use strict';

/*
    db.dogs.insert([
        {raca: 'pug', qtde: 8, preco: 500, img: 'img/pug.jpg', cor: 'branco', idade: '1 ano', porte: 'mini'},
        {raca: 'dalmata', qtde: 8, preco: 500, img: 'img/pug.jpg', cor: 'branco', idade: '1 ano', porte: 'medio'},
        {raca: 'rottweiler', qtde: 8, preco: 500, img: 'img/pug.jpg', cor: 'branco', idade: '1 ano', porte: 'grande'},
        {raca: 'bichon frise', qtde: 8, preco: 500, img: 'img/pug.jpg', cor: 'branco', idade: '1 ano', porte: 'mini'},
        {raca: 'basset round', qtde: 8, preco: 500, img: 'img/pug.jpg', cor: 'branco', idade: '1 ano', porte: 'pequeno'},
        {raca: 'pinscher', qtde: 8, preco: 500, img: 'img/pug.jpg', cor: 'branco', idade: '1 ano', porte: 'mini'},
        {raca: 'fila', qtde: 8, preco: 500, img: 'img/pug.jpg', cor: 'branco', idade: '1 ano', porte: 'grande'},
        {raca: 'labrador', qtde: 8, preco: 500, img: 'img/pug.jpg', cor: 'branco', idade: '1 ano', porte: 'medio'}
    ])
*/
    $(".fancybox").fancybox({
        maxWidth    : 945,
        maxHeight   : 360,
        fitToView   : true,
        width       : '80%',
        height      : '90%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'elastic',
        closeEffect : 'elastic'
    });

    var Collection = Backbone.Collection.extend({
            url: '/db/dogs',
            model: Backbone.Model.extend({})
        }),
        collection = new Collection(),
        View = Backbone.View.extend({
            el: '.content .container',
            render: function () {
                var arr = [];
                collection.each(function (model) {
                    arr.push(template(model));
                });
                this.$el.html(arr.join(''));
            }
        }),
        view = new View();

    collection.fetch({
        success: function () {
            view.render();
        },
        error: function () {
            alert('erro');
        }
    });

    $('.buscar input').on('keyup', function () {
        busca(collection, view, $(this).val());
    });

});