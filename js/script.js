$(document).ready(function() {

    $(document).keypress(function(event) {
      if ( event.key == 's' && document.activeElement != document.getElementById("search-bar") ) {
        document.getElementById("search-bar").focus();
        document.getElementById("search-bar").value = "";
      }
    });


    $("#search-bar").keypress(function(event) {
      if ( event.key == 'Enter' ) {
        var engines = {
          '-g': 'https://google.com/search?q=',
          '-i': 'https://google.com/search?tbm=isch&q=',
          '-y': 'https://youtube.com/results?search_query=',
          '-j': 'https://jisho.org/search/',
          '-k': 'https://kotobank.jp/gs/?q=',
          '-n': 'https://nyaa.si/?f=0&c=0_0&q=',
          '-s': 'https://sukebei.nyaa.si/?f=0&c=0_0&q=',
          '-p': 'https://anime-planet.com/anime/all?name=',
          '-v': 'https://vndb.org/v/all?sq=',
          '-a': 'https://wiki.archlinux.org/index.php?search=',
          '-w': 'https://en.wikipedia.org/w/index.php?search='
        };

        var args   = $("#search-bar").val().split(' '),
            prefix = args[0],
            engine = engines['-g'];

        if ( prefix in engines ) {
          engine = engines[prefix]
          args = args.slice(1)
        };

        window.location.href = engine + encodeURIComponent(args.join(' '));
      }
    });

});	
