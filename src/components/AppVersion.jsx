import React from 'react';

import { appVersion } from '../config';
import isPwa from '../lib/detectPwa';

const style = {
  ver: {
    position: 'fixed',
    right: '1.5rem',
    bottom: '1.5rem',
    opacity: '0.31',
    fontSize: '1.0rem',
    pointerEvents: 'none',
    zIndex: 1999
  }
};

export default function AppVersion() {
  return <div style={style.ver}>{`${appVersion} ${isPwa() ? 'pwa' : 'web'}`}</div>;
}
