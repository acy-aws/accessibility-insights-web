// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { MacContrastCheckerAppLink, WindowsContrastCheckerAppLink } from 'common/components/contrast-checker-app-links';
import { link } from 'content/link';
import * as content from 'content/test/contrast/state-changes';
import * as React from 'react';

import { AssistedTestRecordYourResults } from '../../common/assisted-test-record-your-results';
import { Requirement } from '../../types/requirement';
import { ContrastTestStep } from './test-steps';

const description: JSX.Element = (
    <span>If state changes are indicated solely by changes in color, the different states must have sufficient contrast.</span>
);

const howToTest: JSX.Element = (
    <div>
        <p>The visual helper for this requirement highlights links, native widgets, and custom widgets in the target page.</p>
        <ol>
            <li>
                In the target page, examine each highlighted element in each of the following states:
                <ol>
                    <li>Normal</li>
                    <li>Focused</li>
                    <li>Mouseover</li>
                    <li>Selected (if applicable)</li>
                </ol>
            </li>
            <li>
                If any component indicates state changes solely by a change of color, use <WindowsContrastCheckerAppLink /> to verify that
                the contrast ratio between different states is at least 3:1. (If you are testing on a Mac, you can use the{' '}
                <MacContrastCheckerAppLink />
                .)
            </li>
            <AssistedTestRecordYourResults />
        </ol>
    </div>
);

export const StateChanges: Requirement = {
    key: ContrastTestStep.stateChanges,
    name: 'State changes',
    description,
    howToTest,
    ...content,
    guidanceLinks: [link.WCAG_1_4_11],
    isManual: true, // TODO: false
    // TODO: columnsConfig, reportInstanceFields, getAnalyzer, getDrawer, getVisualHelperToggle
};