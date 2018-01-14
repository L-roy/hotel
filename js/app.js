(function() {
    var root = document.getElementById('content');
    var router = new window.Router();

    function createMainSlider() {
        $('.sliderHeadline').bxSlider({
            controls: false,
            auto: true,
            pager: false,
            wrapperClass: "no-bxwrapper"
        });
    }

    function setActiveMenu(menuitemId) {
        var menubar = document.getElementById("myMenubar");
        var menubarItems = menubar.getElementsByClassName("menubar__item");
        [].forEach.call(menubarItems, function(item) {
            item.classList.remove("menubar__active");
        });

        if (menuitemId != null) {
            document.getElementById(menuitemId).classList.add("menubar__active");
        }
    }

    router.notFound(function() {
        root.innerHTML = window.Templates.NotFound({ router: router });
    });

    router.route('home', '/', function() {
        root.innerHTML = window.Templates.HomePage({ router: router });
        createMainSlider();
        setActiveMenu(null);
    });

    router.route('rooms', '/rooms/:roomType', function(roomType) {
        var roomsByType = rooms.filter(function(item) {
            return roomType === 'all' || item.roomType.toLowerCase() === roomType.toLowerCase();
        });

        root.innerHTML = window.Templates.Rooms({ router: router, roomsByType: roomsByType });

        addEventListener();

        function addEventListener() {
            document.getElementById('roomSort').addEventListener('change', function() {
                var selectVal = document.getElementById('roomSort').value;

                roomsByType = roomsByType.sort(function(a, b) {
                    return a[selectVal] - b[selectVal];
                });

                root.innerHTML = window.Templates.Rooms({ router: router, roomsByType: roomsByType });
                addEventListener();

                document.getElementById('roomSort').value = selectVal;
            }, false);

        }

        setActiveMenu("menubarRooms");
    });

    router.route('services', '/services', function() {
        root.innerHTML = window.Templates.Services({ router: router });
        setActiveMenu("menubarServices");
    });

    router.route('about', '/about', function() {
        root.innerHTML = window.Templates.About({ router: router });
        setActiveMenu("menubarAbout");
    });

    router.route('gallery', '/gallery/:pageNumber', function(pageNumber) {
        var galleryPhotos = [];
        var startIndex = (parseInt(pageNumber, 10) - 1) * 12;

        if (gallery.length > 12) {
            galleryPhotos = gallery.slice(startIndex, startIndex + 12);
        } else {
            galleryPhotos = gallery.slice();
        }

        root.innerHTML = window.Templates.Gallery({ router: router, galleryPhotos: galleryPhotos,
            pageNumber: pageNumber });

        setActiveMenu("menubarGallery");
    });

    router.route('contacts', '/contacts', function() {
        root.innerHTML = window.Templates.Contacts({ router: router });
        hotelMap();
        setActiveMenu("menubarContacts");
    });


    if (window.location.hash == '') {
        router.toRoute('home');
    } else {
        router.toPath(window.location.hash.slice(2));
    }

    window.addEventListener('hashchange', function() {
        router.toPath(window.location.hash.slice(2));
    }, false);
})()