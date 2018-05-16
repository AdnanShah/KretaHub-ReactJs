import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import Client from './Componets/Client';
import Service from './Componets/Service';
import Team from './Componets/Team';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const services = [
    {
        id: 'infinite-widgets',
        title: 'Infinite Widgets',
        description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image: 'http://via.placeholder.com/600x420'
    }, {
        id: 'box-idea',
        title: 'Out of the Box Idea',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis scelerisque sollicitudinThis video will give you a walk through on how to create your own age verification template Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis scelerisque sollicitudin',
        image: 'http://via.placeholder.com/600x480'
    }, {
        id: 'easy-template',
        title: 'Easy Template Builder',
        description: 'Duis a    ute irure dolor in reprehenderit in voluptate velit esse cillumtemplate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis scelerisque sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis scelerisque sollicitudin',
        image: 'http://via.placeholder.com/600x400'
    },
];
const teams = [
    {
        name: 'Alex Dolgove',
        destination: 'Co-Founder & CEO',
        description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
        image: 'http://via.placeholder.com/150x150'
    },
    {
        name: 'Domnic Brown',
        destination: 'HR Manager',
        description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
        image: 'http://via.placeholder.com/150x150'
    },
    {
        name: 'Stella Johnson',
        destination: 'BDM',
        description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
        image: 'http://via.placeholder.com/150x150'
    },
    {
        name: 'Domnic Harris',
        destination: 'HR Manager',
        description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
        image: 'http://via.placeholder.com/150x150'
    },
    {
        name: 'Garry Sobars',
        destination: 'Co-Founder & CEO',
        description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
        image: 'http://via.placeholder.com/150x150'
    },
    {
        name: 'John Smith',
        destination: 'BDM',
        description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
        image: 'http://via.placeholder.com/150x150'
    },
    {
        name: 'kadir',
        destination: 'BDM',
        description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
        image: 'http://via.placeholder.com/150x150'
    }
];
const clients = [
    {
        image: 'http://via.placeholder.com/90x55'
    }, {
        image: 'http://via.placeholder.com/100x50'
    }, {
        image: 'http://via.placeholder.com/100x55'
    }, {
        image: 'http://via.placeholder.com/61x62'
    }, {
        image: 'http://via.placeholder.com/100x55'
    }, {
        image: 'http://via.placeholder.com/100x55'
    }
];


const AboutUs = ({match}) => {

    const options = {
        loop: true,
        rewind: true,
        autoplay: true,
        margin: 20,
        responsive: {
            responsiveRefreshRate: 100,
            0: {
                items: 1
            },

            400: {
                items: 2
            },

            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    };

    const options1 = {
        loop: true,
        rewind: true,
        autoplay: true,
        margin: 20,
        responsive: {
            responsiveRefreshRate: 100,
            0: {
                items: 1
            },

            650: {
                items: 2
            },
            950: {
                items: 3
            }
        }
    };

    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader
                match={match}
                styleName="text-center"
                title={<IntlMessages id="sidebar.extraPages.aboutUs"/>}
            />


            <OwlCarousel className="owl-theme mb-4" {...options1}>
                <Team team={teams[0]}/>
                <Team team={teams[1]}/>
                <Team team={teams[2]}/>
                <Team team={teams[3]}/>
                <Team team={teams[4]}/>
                <Team team={teams[5]}/>
                <Team team={teams[6]}/>
            </OwlCarousel>


            <OwlCarousel className="owl-theme mb-4 owl-app-frame" {...options}>
                <Client client={clients[0]}/>
                <Client client={clients[1]}/>
                <Client client={clients[2]}/>
                <Client client={clients[0]}/>
                <Client client={clients[1]}/>
                <Client client={clients[2]}/>
                <Client client={clients[0]}/>
                <Client client={clients[1]}/>
                <Client client={clients[2]}/>
            </OwlCarousel>
        </div>
    );
};

export default AboutUs;

