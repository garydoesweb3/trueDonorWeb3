import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {                                  // Two sets of {{}} mean you're passing in an object lioteral
    return (
        <Menu style= {{ marginTop: '10px' }}>         
            <Link route='/'>
                <a className='item'>True Donor</a>
            </Link>

            <Menu.Menu position="right">
            <Link route='/'>
                <a className='item'>Campaigns</a>
            </Link>
                
            <Link route='/campaigns/new'>
                <a className='item'>+</a>
            </Link>
            </Menu.Menu>
        </Menu>
    );
};