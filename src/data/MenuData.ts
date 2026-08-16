interface MenuItem {
    id: number;
    titleKey: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        titleKey: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        titleKey: "nav.home",
        link: "/",
        has_dropdown: false,
    },
    {
        id: 2,
        titleKey: "nav.hajj",
        link: "/hajj-umrah",
        has_dropdown: false,
    },
    {
        id: 3,
        titleKey: "nav.holidays",
        link: "/tours",
        has_dropdown: true,
        sub_menus: [
            { link: "/tours", titleKey: "nav.tours" },
            { link: "/hotels", titleKey: "nav.hotels" },
            { link: "/bus", titleKey: "nav.bus" },
        ],
    },
    {
        id: 4,
        titleKey: "nav.visa",
        link: "/visa",
        has_dropdown: false,
    },
    {
        id: 5,
        titleKey: "nav.about",
        link: "/about",
        has_dropdown: false,
    },
    {
        id: 6,
        titleKey: "nav.contact",
        link: "/contact",
        has_dropdown: false,
    },
];

export default menu_data;
