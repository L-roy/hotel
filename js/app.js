(function () {
      console.log(rooms);
      var root = document.getElementById('content');
      var router = new window.Router();

      router.notFound(function() {
        root.innerHTML = window.Templates.NotFound({router: router});
      });

      router.route('home', '/', function() {
        root.innerHTML = window.Templates.HomePage({router: router});
      });

      router.route('rooms', '/rooms/:roomType', function(roomType) {
        var roomsByType = rooms.filter(function(item) {
          return roomType === 'all' || item.roomType.toLowerCase() === roomType.toLowerCase();
        });
        root.innerHTML = window.Templates.Rooms({router: router, roomsByType: roomsByType});
      });

      router.route('services', '/services', function() {
        root.innerHTML = window.Templates.Services({router: router});
      });

      router.route('about', '/about', function() {
        root.innerHTML = window.Templates.About({router: router});
      });

      router.route('contacts', '/contacts', function() {
        root.innerHTML = window.Templates.Contacts({router: router});
      });

      router.route('gallery', '/gallery', function() {
        root.innerHTML = window.Templates.Gallery({router: router});
      });

      // router.route('post', '/post/:slug', function(slug) {
      //   var postsBySlug = posts.filter(function(post) {
      //     return post.slug == slug;
      //   });
      //
      //   if (postsBySlug.length == 0) {
      //     root.innerHTML = window.Templates.NotFound({router: router});
      //   } else {
      //     root.innerHTML = window.Templates.Post({router: router, post: postsBySlug[0]});
      //   }
      // });
      //
      // router.route('tag', '/tag/:tag', function(tag) {
      //   var postsByTag = posts.filter(function(post) {
      //     return post.tags.indexOf(tag) !== -1;
      //   });
      //
      //   if (postsByTag.length == 0) {
      //     root.innerHTML = window.Templates.NotFound({router: router});
      //   } else {
      //     root.innerHTML = window.Templates.PostList({router: router, posts: postsByTag});
      //   }
      // });

      if (window.location.hash == '') {
        router.toRoute('home');
      } else {
        router.toPath(window.location.hash.slice(2));
      }

      window.addEventListener('hashchange', function() {
        console.log(window.location.hash.slice(2));
        router.toPath(window.location.hash.slice(2));
      }, false);
})()
