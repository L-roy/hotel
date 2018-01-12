(function () {
    var posts = [
        {
          title: 'Foobar Baz Qux',
          slug: 'foobar-baz-qux',
          tags: ['foobar', 'baz', 'qux'],
          paragraphs: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus libero metus, ac luctus massa lacinia semper. Cras hendrerit gravida urna sed convallis. Ut eget odio eu nisi cursus finibus porttitor eu neque. Nullam sagittis sem a justo scelerisque, vitae blandit magna ultrices. Nulla mollis commodo urna in aliquam. Duis pulvinar enim a nibh fringilla, ac fermentum eros imperdiet. Nullam at iaculis velit. Donec viverra vestibulum tincidunt. Sed finibus vel tortor vel sagittis. Donec in massa non leo porttitor tempus vitae nec massa. Nunc leo velit, cursus a luctus nec, aliquet id mauris. In euismod lobortis tempor. Nam sollicitudin, metus vel eleifend vulputate, mi nisl elementum est, vitae rhoncus lacus urna sit amet risus.',
            'In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia ipsum eu scelerisque efficitur. In hac habitasse platea dictumst. Mauris fermentum felis sit amet nisi dignissim scelerisque. Suspendisse at tristique nisi. Donec ut pretium dui, ut commodo ipsum. Nunc commodo, turpis a egestas elementum, ipsum ligula porta arcu, id aliquam nulla justo non ligula. Aliquam erat volutpat. Aliquam hendrerit porta finibus. Suspendisse sed ante consequat, hendrerit felis nec, consequat nibh. Proin quis pharetra mauris. Curabitur eget vehicula nibh. Praesent nisi eros, pellentesque sed ex in, aliquam fermentum nibh. Proin eleifend in eros ut accumsan.',
            'Sed in bibendum ante, in condimentum ipsum. Sed convallis suscipit nulla, eget commodo lorem convallis eu. Etiam porttitor lacus sed dolor tempus aliquet. Maecenas non purus at justo accumsan pellentesque. Morbi a orci vel enim sollicitudin ullamcorper vel a ante. Sed molestie, mauris et ultricies auctor, magna metus tristique nibh, in convallis nisi orci vel ex. Integer purus est, tincidunt maximus luctus eu, rhoncus eget libero. Donec enim dolor, gravida et leo venenatis, hendrerit vulputate nulla. Ut ut posuere enim. Maecenas finibus dignissim mollis. Donec id rutrum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lacus nibh. Etiam tristique blandit quam, ac pulvinar urna condimentum eget.'
          ]
        },
        {
          title: 'Qux Corge Waldo',
          slug: 'qux-corge-waldo',
          tags: ['qux', 'corge', 'waldo'],
          paragraphs: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus tellus sollicitudin fringilla convallis. Nulla dignissim accumsan accumsan. Nullam in ex interdum, faucibus tortor non, egestas est. Donec venenatis sapien ullamcorper ullamcorper eleifend. Nulla feugiat nec orci in posuere. Proin tempor justo nec nulla consequat, a blandit urna pharetra. Sed blandit risus quam, id blandit libero bibendum vel. Aenean sed tincidunt sapien. Sed auctor, sapien at convallis pretium, elit metus porta arcu, eu vulputate massa purus eget nulla. Sed pretium est sapien, et fermentum nisi vestibulum sit amet. Aenean non ante sodales, tempus nibh in, imperdiet ante.',
            'Nunc placerat congue neque, eget molestie orci. Fusce ligula arcu, molestie vitae massa in, malesuada consequat ipsum. Nulla dictum imperdiet dictum. Aliquam facilisis magna risus, quis convallis enim mattis a. Pellentesque pulvinar dignissim nisl, ac tempus ante elementum sit amet. Sed sit amet nulla efficitur, convallis metus dictum, posuere dui. Duis nulla purus, commodo non ipsum ut, imperdiet aliquet enim.',
            'Nunc luctus augue eget porta tempor. Suspendisse potenti. Vestibulum commodo consequat libero, at semper quam maximus et. Vestibulum scelerisque vehicula sapien eget elementum. Quisque hendrerit urna nisl, in vulputate neque sodales id. Suspendisse placerat, erat et semper accumsan, sem diam scelerisque leo, id posuere justo nunc sed erat. Duis congue dictum justo in finibus. Vivamus facilisis convallis vulputate. Etiam elementum laoreet efficitur. Pellentesque aliquam luctus molestie. Praesent sed metus sit amet tortor lacinia malesuada.'
          ]
        },
        {
          title: 'Baz Plugh Quz',
          slug: 'baz-plugh-quz',
          tags: ['baz', 'plugh', 'quz'],
          paragraphs: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel malesuada leo, eu euismod diam. Nunc tincidunt est ac libero fermentum, id accumsan neque blandit. Curabitur quis arcu a nulla eleifend tristique et id sapien. Suspendisse viverra imperdiet metus, et malesuada dolor aliquam id. Donec augue augue, facilisis at purus sit amet, tincidunt pharetra arcu. Aliquam ut diam tortor. Ut velit felis, sollicitudin ac ipsum vitae, sagittis facilisis nunc. Aenean ac elit tellus. Nunc at consectetur leo, eget feugiat augue. Donec sed euismod ligula, ac consequat nisi.',
            'Phasellus sollicitudin neque non volutpat ornare. Duis blandit elit quam, ac commodo nibh eleifend in. Phasellus ut malesuada arcu. Nunc faucibus ut lacus quis efficitur. Pellentesque fermentum sodales arcu sit amet sollicitudin. Curabitur vitae dignissim nibh. Praesent vitae lacus est. Praesent eu augue rhoncus, ornare orci eget, egestas nunc. Vestibulum nec porttitor nisi, eget commodo ante. Integer commodo ante purus, vel pellentesque neque faucibus nec. Ut pretium augue et nisl dapibus, sit amet venenatis velit blandit. Donec erat magna, imperdiet et mi ac, posuere pretium tortor. Fusce eget justo laoreet, porttitor turpis nec, tincidunt ex. Nullam sollicitudin consequat erat. Phasellus ut posuere elit. Morbi et erat sit amet nunc lobortis feugiat.',
            'Quisque iaculis maximus est, at suscipit dolor imperdiet sit amet. Mauris porttitor magna ante, et porttitor nibh dignissim vel. Nullam dignissim dolor elementum tortor semper, in posuere eros tincidunt. Vestibulum suscipit dapibus justo non tempus. Praesent nec sagittis diam. In in tincidunt nunc. Proin luctus bibendum feugiat. Proin bibendum erat et dolor gravida, id scelerisque eros convallis.'
          ]
        }
      ];

      var root = document.getElementById('content');
      var router = new window.Router();

      router.notFound(function() {
        root.innerHTML = window.Templates.NotFound({router: router});
      });

      router.route('home', '/', function() {
        root.innerHTML = window.Templates.HomePage({router: router});
      });

      router.route('rooms', '/rooms', function() {
        root.innerHTML = window.Templates.Rooms({router: router});
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
