// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { test as content } from 'content/test';
import * as React from 'react';

import { VisualizationType } from 'common/types/visualization-type';
import { AssessmentBuilder } from '../assessment-builder';
import { Assessment } from '../types/iassessment';
import { MotionOperation } from './test-steps/motion-operation';
import { PointerCancellation } from './test-steps/pointer-cancellation';
import { PointerGestures } from './test-steps/pointer-gestures';

const { guidance } = content.pointerMotion;
const key = 'pointerMotion';
const title = 'Pointer / motion';

const gettingStarted: JSX.Element = (
    <>
        <p>
            The requirements in this test ensure that functionality operated through touch or motion
            can be used successfully by everyone.
        </p>
    </>
);

export const PointerMotionAssessment: Assessment = AssessmentBuilder.Assisted({
    key,
    title: title,
    gettingStarted: gettingStarted,
    guidance,
    visualizationType: VisualizationType.PointerMotionAssessment,
    requirements: [PointerGestures, PointerCancellation, MotionOperation],
    storeDataKey: 'pointerMotionAssessment',
});
