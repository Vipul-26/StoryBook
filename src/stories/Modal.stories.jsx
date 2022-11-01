import React from 'react';
import Modal from './Modal';

export default {
    title: 'Example/Modal',
    component: Modal,
    argTypes: {
    },
};

const Template = (args) => {
    const [open, setOpen] = React.useState(true);
    return (
        <Modal {...args} isOpen={open} onCloseModal={() => { setOpen(!open) }} />
    )
};

export const ModalComponent = Template.bind({});
ModalComponent.args = {
    children: <h2>This is a modal</h2>
};