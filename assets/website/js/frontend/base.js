(function(_w) {

    var w = _w;

    //main namespace
    G = {};
    G.page_code = 'index';
    G.Config = {

    };


    G.Fun = {
        init: function(page_code) {
            $('.js_openeyes').css({cursor: 'pointer'}).click(function(){
                var that = $(this);
                that.parent('td').find('span').text(that.data('text'));
                that.hide();
            });

            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1; // 月份从0开始，需要加1
            const day = currentDate.getDate();

            $('#js-ad_date').text(year + "-" + month + "-" + day);
            $('#js-ad_href').attr('href', 'https://www.freeclashnode.com');
        }
    };

    $(function() {
        var page_code = $('body').attr('data-page');
        G.Fun.init(page_code);
    });
})();