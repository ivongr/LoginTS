import React from 'react';

interface ButtonProps {
   className: string,
    title: string;
}

const Button: React.FC<ButtonProps> = ({ className, title }) => {
    return <button className={className}>{title}
    </button>
};

export default Button;

