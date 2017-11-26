import { Component, HostListener, ViewChild } from '@angular/core';
import './tabs.css';

@Component({
  selector: 'my-about',
  template: `
    <ul class="nav fix-header">
        <li id="navpoke" #navpoke class="nav-item active"><a href="#poke">Poke</a></li>
        <li id="navpoto" #navpoto class="nav-item"><a href="#poto">Poto</a></li>
        <li id="navsile" #navsile class="nav-item"><a href="#sile">Sile</a></li>
        <li id="navfuzz" #navfuzz class="nav-item"><a href="#fuzz">Fuzz</a></li>
        <li id="navbuzz" #navbuzz class="nav-item"><a href="#buzz">Buzz</a></li>
        <li id="navxoxo" #navxoxo class="nav-item"><a href="#xoxo">Xoxo</a></li>
    </ul>

    <h2>Poke beigns here!</h2>
    <hr>
    <div id="poke" #poke>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <h2>Poto beigns here!</h2>
    <hr>
    <div id="poto" #poto>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </div>
    <h2>Sile beigns here!</h2>
    <hr>
    <div id="sile" #sile>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    </div>
    <h2>Fuzz beigns here!</h2>
    <hr>
    <div id="fuzz" #fuzz>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem quis mauris porta mattis. Pellentesque venenatis, orci sed fringilla congue, turpis erat vestibulum mi, interdum mollis metus neque a urna. Fusce at arcu metus. Integer id neque velit. In eu magna tellus. Fusce non interdum libero, nec elementum erat. Curabitur sagittis laoreet ex at consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sem quis mauris porta mattis. Pellentesque venenatis, orci sed fringilla congue, turpis erat vestibulum mi, interdum mollis metus neque a urna. Fusce at arcu metus. Integer id neque velit. In eu magna tellus. Fusce non interdum libero, nec elementum erat. Curabitur sagittis laoreet ex at consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce rhoncus aliquam facilisis. Interdum et malesuada0 fames ac ante ipsum primis in faucibus. Suspendisse sit amet velit tempus, lobortis nibh ac, laoreet justo. Praesent sapien augue, cursus et est at, vehicula tincidunt tortor. Duis lectus tortor, rutrum quis arcu in, pellentesque ultricies felis. Aenean cursus lacus vitae enim volutpat porta. Donec ut sapien scelerisque, porttitor enim tristique, malesuada lacus. Aliquam vitae est eget magna efficitur accumsan. Maecenas eget sem volutpat, tempus turpis vel, consequat elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce rhoncus aliquam facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sit amet velit tempus, lobortis nibh ac, laoreet justo. Praesent sapien augue, cursus et est at, vehicula tincidunt tortor. Duis lectus tortor, rutrum quis arcu in, pellentesque ultricies felis. Aenean cursus lacus vitae enim volutpat porta. Donec ut sapien scelerisque, porttitor enim tristique, malesuada lacus. Aliquam vitae est eget magna efficitur accumsan. Maecenas eget sem volutpat, tempus turpis vel, consequat elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce rhoncus aliquam facilisis. Interdum et malesuada0 fames ac ante ipsum primis in faucibus. Suspendisse sit amet velit tempus, lobortis nibh ac, laoreet justo. Praesent sapien augue, cursus et est at, vehicula tincidunt tortor. Duis lectus tortor, rutrum quis arcu in, pellentesque ultricies felis. Aenean cursus lacus vitae enim volutpat porta. Donec ut sapien scelerisque, porttitor enim tristique, malesuada lacus. Aliquam vitae est eget magna efficitur accumsan. Maecenas eget sem volutpat, tempus turpis vel, consequat elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce rhoncus aliquam facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sit amet velit tempus, lobortis nibh ac, laoreet justo. Praesent sapien augue, cursus et est at, vehicula tincidunt tortor. Duis lectus tortor, rutrum quis arcu in, pellentesque ultricies felis. Aenean cursus lacus vitae enim volutpat porta. Donec ut sapien scelerisque, porttitor enim tristique, malesuada lacus. Aliquam vitae est eget magna efficitur accumsan. Maecenas eget sem volutpat, tempus turpis vel, consequat elit.
    </div>
    <h2>Buzz beigns here!</h2>
    <hr>
    <div id="buzz" #buzz>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce rhoncus aliquam facilisis. Interdum et malesuada0 fames ac ante ipsum primis in faucibus. Suspendisse sit amet velit tempus, lobortis nibh ac, laoreet justo. Praesent sapien augue, cursus et est at, vehicula tincidunt tortor. Duis lectus tortor, rutrum quis arcu in, pellentesque ultricies felis. Aenean cursus lacus vitae enim volutpat porta. Donec ut sapien scelerisque, porttitor enim tristique, malesuada lacus. Aliquam vitae est eget magna efficitur accumsan. Maecenas eget sem volutpat, tempus turpis vel, consequat elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce rhoncus aliquam facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sit amet velit tempus, lobortis nibh ac, laoreet justo. Praesent sapien augue, cursus et est at, vehicula tincidunt tortor. Duis lectus tortor, rutrum quis arcu in, pellentesque ultricies felis. Aenean cursus lacus vitae enim volutpat porta. Donec ut sapien scelerisque, porttitor enim tristique, malesuada lacus. Aliquam vitae est eget magna efficitur accumsan. Maecenas eget sem volutpat, tempus turpis vel, consequat elit. 
    </div>
    <h2>Xoxo beigns here!</h2>
    <hr>
    <div id="xoxo" #xoxo>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce rhoncus aliquam facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sit amet velit tempus, lobortis nibh ac, laoreet justo. Praesent sapien augue, cursus et est at, vehicula tincidunt tortor. Duis lectus tortor, rutrum quis arcu in, pellentesque ultricies felis. Aenean cursus lacus vitae enim volutpat porta. Donec ut sapien scelerisque, porttitor enim tristique, malesuada lacus. Aliquam vitae est eget magna efficitur accumsan. Maecenas eget sem volutpat, tempus turpis vel, consequat elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce rhoncus aliquam facilisis. Interdum et malesuada0 fames ac ante ipsum primis in faucibus. Suspendisse sit amet velit tempus, lobortis nibh ac, laoreet justo. Praesent sapien augue, cursus et est at, vehicula tincidunt tortor. Duis lectus tortor, rutrum quis arcu in, pellentesque ultricies felis. Aenean cursus lacus vitae enim volutpat porta. Donec ut sapien scelerisque, porttitor enim tristique, malesuada lacus. Aliquam vitae est eget magna efficitur accumsan. Maecenas eget sem volutpat, tempus turpis vel, consequat elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce rhoncus aliquam facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sit amet velit tempus, lobortis nibh ac, laoreet justo. Praesent sapien augue, cursus et est at, vehicula tincidunt tortor. Duis lectus tortor, rutrum quis arcu in, pellentesque ultricies felis. Aenean cursus lacus vitae enim volutpat porta. Donec ut sapien scelerisque, porttitor enim tristique, malesuada lacus. Aliquam vitae est eget magna efficitur accumsan. Maecenas eget sem volutpat, tempus turpis vel, consequat elit.
    </div>
`
})
export class AboutComponent {
    @ViewChild('poke') poke: any;
    @ViewChild('poto') poto: any;
    @ViewChild('sile') sile: any;
    @ViewChild('fuzz') fuzz: any;
    @ViewChild('buzz') buzz: any;
    @ViewChild('xoxo') xoxo: any;

    @ViewChild('navpoke') navpoke: any;
    @ViewChild('navpoto') navpoto: any;
    @ViewChild('navsile') navsile: any;
    @ViewChild('navfuzz') navfuzz: any;
    @ViewChild('navbuzz') navbuzz: any;
    @ViewChild('navxoxo') navxoxo: any;

    running: boolean = false;
    currentActive: number = 0;
    tabs: Array<any>
    navtabs: Array<any>

    ngAfterViewInit() {
        this.tabs = [
            {
                nav: this.navpoke,
                sec: this.poke
            },
            {
                nav: this.navpoto,
                sec: this.poto
            },
            {
                nav: this.navsile,
                sec: this.sile
            },
            {
                nav: this.navfuzz,
                sec: this.fuzz
            },
            {
                nav: this.navbuzz,
                sec: this.buzz
            },
            {
                nav: this.navxoxo,
                sec: this.xoxo
            }
        ];
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (this.running) {
            return;
        }
        this.running = true;
        for (let i = 0, j = this.tabs.length; i < j; i++) {
            if (this.elementInViewport(this.tabs[i].sec)) {
                if (this.currentActive !== i) {
                    this.tabs[this.currentActive].nav.nativeElement.classList.remove('active');
                    this.tabs[i].nav.nativeElement.classList.add('active');
                    this.currentActive = i;
                }
                break;
            }
        }
        this.running = false;
    }

    elementInViewport(el: any) {
        let top = el.nativeElement.offsetTop;
        let left = el.nativeElement.offsetLeft;
        let width = el.nativeElement.offsetWidth;
        let height = el.nativeElement.offsetHeight;

        while(el.nativeElement ? el.nativeElement.offsetParent : el.offsetParent) {
            el = el.nativeElement.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }
}
