import React from 'react';

export interface IconProps {
    name: "phone"|"email"|"facebook"|"linkedin"|"cross";
    width?: number;
    height?: number;
}

function Icon({ name, width = 40, height = 40 }: IconProps) {
    switch (name) {
        case 'phone':
            return (
                <svg width={width} height={height} viewBox={`0 0 40 40`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.6666 28.2V33.2C36.6685 33.6642 36.5734 34.1236 36.3875 34.5489C36.2015 34.9742 35.9288 35.356 35.5868 35.6698C35.2447 35.9836 34.8409 36.2225 34.4012 36.3712C33.9615 36.5199 33.4956 36.5751 33.0333 36.5333C27.9047 35.9761 22.9783 34.2236 18.65 31.4167C14.623 28.8578 11.2089 25.4436 8.64997 21.4167C5.83327 17.0687 4.08037 12.1183 3.5333 6.96667C3.49165 6.50578 3.54643 6.04127 3.69414 5.60271C3.84185 5.16415 4.07925 4.76115 4.39125 4.41937C4.70324 4.07759 5.08298 3.80452 5.50629 3.61754C5.9296 3.43056 6.3872 3.33377 6.84997 3.33333H11.85C12.6588 3.32537 13.443 3.6118 14.0562 4.13922C14.6695 4.66664 15.0701 5.39908 15.1833 6.2C15.3943 7.80011 15.7857 9.37121 16.35 10.8833C16.5742 11.4799 16.6227 12.1282 16.4898 12.7515C16.3569 13.3747 16.0481 13.9469 15.6 14.4L13.4833 16.5167C15.8559 20.6892 19.3107 24.1441 23.4833 26.5167L25.6 24.4C26.0531 23.9519 26.6252 23.6431 27.2485 23.5102C27.8718 23.3772 28.5201 23.4258 29.1166 23.65C30.6288 24.2143 32.1999 24.6056 33.8 24.8167C34.6096 24.9309 35.349 25.3387 35.8775 25.9625C36.4061 26.5863 36.6869 27.3826 36.6666 28.2Z" stroke="#EAE9FC" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            );
        case 'email':
            return (
                <svg width={width} height={height} viewBox={`0 0 40 40`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.6667 10C36.6667 8.16667 35.1667 6.66667 33.3334 6.66667H6.66671C4.83337 6.66667 3.33337 8.16667 3.33337 10M36.6667 10V30C36.6667 31.8333 35.1667 33.3333 33.3334 33.3333H6.66671C4.83337 33.3333 3.33337 31.8333 3.33337 30V10M36.6667 10L20 21.6667L3.33337 10" stroke="#EAE9FC" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            );
        case 'facebook':
            return (
                <svg width={width} height={height} viewBox={`0 0 40 40`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.0001 3.33333H25.0001C22.7899 3.33333 20.6703 4.21131 19.1075 5.77411C17.5447 7.33691 16.6667 9.45653 16.6667 11.6667V16.6667H11.6667V23.3333H16.6667V36.6667H23.3334V23.3333H28.3334L30.0001 16.6667H23.3334V11.6667C23.3334 11.2246 23.509 10.8007 23.8216 10.4882C24.1341 10.1756 24.5581 10 25.0001 10H30.0001V3.33333Z" stroke="#EAE9FC" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            );
        case 'linkedin':
            return (
                <svg width={width} height={height} viewBox={`0 0 41 40`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.1667 13.3333C29.8189 13.3333 32.3624 14.3869 34.2378 16.2623C36.1131 18.1376 37.1667 20.6812 37.1667 23.3333V35H30.5V23.3333C30.5 22.4493 30.1488 21.6014 29.5237 20.9763C28.8986 20.3512 28.0508 20 27.1667 20C26.2827 20 25.4348 20.3512 24.8097 20.9763C24.1846 21.6014 23.8334 22.4493 23.8334 23.3333V35H17.1667V23.3333C17.1667 20.6812 18.2203 18.1376 20.0956 16.2623C21.971 14.3869 24.5145 13.3333 27.1667 13.3333Z" stroke="#EAE9FC" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.5 15H3.83337V35H10.5V15Z" stroke="#EAE9FC" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.16671 9.99999C9.00766 9.99999 10.5 8.50761 10.5 6.66666C10.5 4.82571 9.00766 3.33333 7.16671 3.33333C5.32576 3.33333 3.83337 4.82571 3.83337 6.66666C3.83337 8.50761 5.32576 9.99999 7.16671 9.99999Z" stroke="#EAE9FC" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            );
        case 'cross':
            return (
                <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 7.81818C6 6.81403 6.81403 6 7.81818 6H16.1818C17.186 6 18 6.81403 18 7.81818V16.1818C18 17.186 17.186 18 16.1818 18H7.81818C6.81403 18 6 17.186 6 16.1818V7.81818Z" fill="black" fill-opacity="0.15"/>
                    <path d="M19 5L5 19M5.00001 5L19 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            );
        default:
            return (
                <svg width={width} height={height} viewBox={`0 0 40 40`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path />
                </svg>
            );
    }
};

export default Icon;