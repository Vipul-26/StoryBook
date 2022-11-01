/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const BreadcrumbWrapper = (props) => {
    const { ...breadCrumpProps } = props;
    return (
        <Breadcrumbs
            {...breadCrumpProps}
            onClick={handleClick}
            separator={<NavigateNextIcon fontSize='small' />}
        />
    );
};

export default BreadcrumbWrapper;
