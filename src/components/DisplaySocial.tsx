import React from 'react';

import Icon, { IconProps } from './Icon.tsx';


function DisplaySocial(props: { text: string, icon?: IconProps["name"], link?: string }) {
    if (props.link)
        return (
            <a href={props.link} target='_blank' rel='noreferrer noopener' className='btn-behaviour_'>
                {props.icon && <Icon name={props.icon} width={20} height={20}/>} {props.text}
            </a>
        );
    else
        return (
            <p>
                {props.icon && <Icon name={props.icon} width={20} height={20}/>} {props.text}
            </p>
        );
}

export default DisplaySocial;