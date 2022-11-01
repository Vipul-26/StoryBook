import React from 'react';
import BreadcrumbWrapper from './Breadcrumb';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default {
    title: 'Example/Breadcrumb',
    component: BreadcrumbWrapper,
    argTypes: {
    },
};

const Template = (args) => <BreadcrumbWrapper {...args} />;

const breadcrumbData = [
    { value: 'Breadcrumb1', path: '/' },
    { value: 'Breadcrumb1' },
    { value: 'Breadcrumb1' },
    { value: 'Breadcrumb1' },
    { value: 'Breadcrumb1' },
    { value: 'Breadcrumb1' },
    { value: 'Breadcrumb1' },
    { value: 'Breadcrumb1' }
]

export const BreadcrumbComponent = Template.bind({});
BreadcrumbComponent.args = {
    children:
        breadcrumbData.map((data, index) => {
            const lastElement = index === breadcrumbData.length - 1;
            return (
                lastElement ?
                    (
                        <Typography color="text.primary">
                            {data.value}
                        </Typography>
                    )
                    : (
                        <Link underline="hover" color="inherit" href={data.path}>
                            {data.value}
                        </Link>
                    )
            );
        })
};