import React, { FC, PropsWithChildren, useState } from "react";

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width: string;
    height: string;
    variant: CardVariant;
}

const Card: FC<PropsWithChildren<CardProps>> = ({ width, height, variant, children }) => {
    return (
        <div style={{ width, height, border: variant === CardVariant.outlined ? "2px solid red" : 'none', backgroundColor: variant === CardVariant.primary ? 'lightgray' : '' }}>
            {children}
        </div>
    )
}

export default Card