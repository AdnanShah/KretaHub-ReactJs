import React from 'react';

export const data = [
    {name: 'Let A', uv: 0, pv: 0, amt: 20},
    {name: 'Let B', uv: 30, pv: 13, amt: 21},
    {name: 'Let C', uv: 20, pv: 98, amt: 29},
    {name: 'Let D', uv: 27, pv: 39, amt: 20},
    {name: 'Let E', uv: 18, pv: 48, amt: 28},
    {name: 'Let F', uv: 23, pv: 38, amt: 20},
    {name: 'Let G', uv: 0, pv: 0, amt: 20},
];
export const chartData = [
    {name: 'J', amt: 1400},
    {name: 'F', amt: 1210},
    {name: 'M', amt: 1100},
    {name: 'A', amt: 1300},
    {name: 'M', amt: 1781},
    {name: 'J', amt: 1160},
    {name: 'J', amt: 900},
    {name: 'A', amt: 700},
    {name: 'S', amt: 1145},
    {name: 'O', amt: 1000},
];
export const lineChartData = [
    {name: 'J', amt: 1400},
    {name: 'F', amt: 210},
    {name: 'M', amt: 1200},
    {name: 'A', amt: 590},
    {name: 'M', amt: 1500},
];
export const pieChartData = [
    {name: 'J', amt: 24},
    {name: 'F', amt: 18},
    {name: 'M', amt: 22},
    {name: 'A', amt: 17},
    {name: 'M', amt: 25},
    {name: 'J', amt: 12},
    {name: 'J', amt: 21},
];

export const authors = [
    {
        id: 1,
        image: 'http://via.placeholder.com/150x150',
        name: "John Smith",
        about: "500K+ readers",
        detail: "45 ARTICLES",
        color: "primary"
    },
    {
        id: 2,
        image: 'http://via.placeholder.com/150x150',
        name: "Alex Dolgove",
        about: "800K+ readers",
        detail: "73 ARTICLES",
        color: "info"
    },
    {
        id: 3,
        image: 'http://via.placeholder.com/150x150',
        name: "Domnic Brown",
        about: "50K+ readers",
        detail: "13 ARTICLES",
        color: "secondary"
    }

];

export const article = [
    {
        image: 'http://via.placeholder.com/500x330',
        title: "There are many variations of passages of",
        description: "25th Aug 2017"
    },
    {
        image: 'http://via.placeholder.com/500x330',
        title: "Contrary to popular belief, Lorem Ipsum",
        description: "29th Aug 2017"
    },
    {
        image: 'http://via.placeholder.com/500x330',
        title: "Various versions have evolved over the years",
        description: "5th Sept 2017"
    },
    {
        image: 'http://via.placeholder.com/500x330',
        title: "All the Lorem Ipsum generators on the ",
        description: "25th sept 2017"
    },
];
export const siteTrafficData = [
    {name: 'Page A', newVisitor: 4064, repeatedUser: 2423, subscriber: 2423, share: 1578},
    {name: 'Page B', newVisitor: 3045, repeatedUser: 1398, subscriber: 2234, share: 1145},
    {name: 'Page C', newVisitor: 2045, repeatedUser: 9845, subscriber: 2290, share: 956},
    {name: 'Page D', newVisitor: 2784, repeatedUser: 3908, subscriber: 2076, share: 1800},
    {name: 'Page E', newVisitor: 1890, repeatedUser: 4834, subscriber: 2181, share: 1246},
    {name: 'Page F', newVisitor: 2393, repeatedUser: 3875, subscriber: 2553, share: 1083},
    {name: 'Page G', newVisitor: 3490, repeatedUser: 4334, subscriber: 2104, share: 1683},
];

export const appNotification = [

    {
        id: 1,
        title: "NEW ORDER",
        desc: [<a href="javascript:void(0)">Stella</a>, " has placed an order for 3 items of $234.0"],
        image: 'http://via.placeholder.com/150x150'
    },
    {
        id: 2,
        title: "Support ticket",
        desc: [<a href="javascript:void(0)">Jeson Born</a>, " raised a support ticket"],
        image: 'http://via.placeholder.com/150x150'
    },
    {
        id: 3,
        title: "new enquiry",
        desc: [<a href="javascript:void(0)">Guptil</a>, " has placed an order for 5 items of $425.0"],
        image: 'http://via.placeholder.com/150x150'
    },
    {
        id: 4,
        title: "NEW ORDER",
        desc: [<a href="javascript:void(0)">Alex Dolgove</a>, " raised a support ticket"],
        image: 'http://via.placeholder.com/150x150'
    },
];

export const announcementsNotification = [
    {
        id: 5,
        title: "NEW ORDER",
        desc: [<a href="javascript:void(0)">Alex Dolgove</a>, " raised a support ticket"],
        image: 'http://via.placeholder.com/150x150'
    },
    {
        id: 6,
        title: "Support ticket",
        desc: [<a href="javascript:void(0)">Jeson Born</a>, " raised a support ticket"],
        image: 'http://via.placeholder.com/150x150'
    },
    {
        id: 7,
        title: "NEW ORDER",
        desc: [<a href="javascript:void(0)">Stella</a>, " has placed an order for 3 items of $234.0"],
        image: 'http://via.placeholder.com/150x150'
    },
    {
        id: 8,
        title: "new enquiry",
        desc: [<a href="javascript:void(0)">Guptil</a>, " has placed an order for 5 items of $425.0"],
        image: 'http://via.placeholder.com/150x150'
    },
];

export const marketingData = [
    {
        id: 1,
        name: 'Facebook Ads',
        desc: '63 Likes, 387 Shares',
        icon: 'facebook',
        color: 'bg-indigo lighten-1',
        budget: 570,
        growth: 20
    },

    {
        id: 2,
        name: 'Twitter Ads',
        desc: '43 Likes, 545 Shares',
        icon: 'twitter',
        color: 'bg-light-blue accent-2',
        budget: 811,
        growth: -5
    },

    {
        id: 3,
        name: 'Instagram',
        desc: '83 Follows, 210 Likes',
        icon: 'instagram',
        color: 'bg-brown lighten-1',
        budget: 685,
        growth: 20
    },

    {
        id: 4,
        name: 'LinkedIn',
        desc: '23 Shares, 764 Likes',
        icon: 'linkedin',
        color: 'bg-light-blue darken-3',
        budget: 868,
        growth: 25
    },

    {
        id: 5,
        name: 'Youtube',
        desc: '1.2k subscribe, 1.8M Likes',
        icon: 'youtube',
        color: 'bg-red accent-4',
        budget: 780,
        growth: 45
    },

    {
        id: 6,
        name: 'Dribbble',
        desc: '23 Shares, 1.4k Likes',
        icon: 'dribbble',
        color: 'bg-pink lighten-2',
        budget: 868,
        growth: 25
    },

];