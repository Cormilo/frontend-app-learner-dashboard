import React from 'react';

import { useIntl } from '@edx/frontend-platform/i18n';
import { Card, Hyperlink, Icon } from '@openedx/paragon';
import { ArrowForward } from '@openedx/paragon/icons';

import { reduxHooks } from 'hooks';
import moreCoursesSVG from 'assets/more-courses-sidewidget.svg';
import { baseAppUrl } from 'data/services/lms/urls';

import { findCoursesWidgetClicked } from './track';
import messages from './messages';
import './index.scss';

export const arrowIcon = (<Icon className="mx-1" src={ArrowForward} />);

export const LookingForChallengeWidget = () => {
  const { formatMessage } = useIntl();
  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();
  const hyperlinkDestination = baseAppUrl(courseSearchUrl) || '';


};

LookingForChallengeWidget.propTypes = {};

export default LookingForChallengeWidget;
