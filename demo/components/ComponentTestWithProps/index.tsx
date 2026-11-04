import React from 'react';

interface Props {
	title: string;
}

export const AnotherComponentTest: React.FC<Props> = ({ title }) => <p style={{ textAlign: 'center' }}>{title}</p>;
