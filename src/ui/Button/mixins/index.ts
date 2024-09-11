import { css } from 'styled-components';

import { primaryAppearanceMixin } from './primaryAppearanceMixin';
import { secondaryAppearanceMixin } from './secondaryAppearanceMixin';
import { typography } from '../../../shared';

export const appearanceMixin = css`
  ${typography.ButtonTypography}

  &[data-appearance~='primary'] {
    ${primaryAppearanceMixin}
  }
  &[data-appearance~='secondary'] {
    ${secondaryAppearanceMixin}
  }
`;
