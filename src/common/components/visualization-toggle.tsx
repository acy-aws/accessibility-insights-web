// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { IToggle, IToggleProps, Toggle } from 'office-ui-fabric-react';
import * as React from 'react';

export interface VisualizationToggleProps {
    checked: boolean;
    onClick: (event) => void;
    disabled?: boolean;
    label?: string;
    className?: string;
    visualizationName: string;
    componentRef?: React.RefObject<IToggle>;
    onBlur?: (ev) => void;
    onFocus?: (ev) => void;
}

export class VisualizationToggle extends React.Component<VisualizationToggleProps> {
    public render(): JSX.Element {
        const props: IToggleProps = {
            checked: this.props.checked,
            onClick: this.props.onClick,
            disabled: this.props.disabled,
            label: this.props.label,
            className: this.props.className,
            onText: 'On',
            offText: 'Off',
            ariaLabel: this.props.visualizationName,
            componentRef: this.props.componentRef,
            onBlur: this.props.onBlur,
            onFocus: this.props.onFocus,
        };

        return <Toggle {...props} />;
    }
}
