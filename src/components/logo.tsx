import React, { FC } from 'react';

interface Props {
  size?: number;
}
export const Logo: FC<Props> = ({ size = 34 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className='opacity-70'>
      <g id="Group_7" data-name="Group 7" transform="translate(-1173 -315)">
        <rect id="Rectangle_745" data-name="Rectangle 745" width="80" height="80" transform="translate(1173 315)" fill="none" />
        <path id="Icon_feather-circle" data-name="Icon feather-circle" d="M32.831,17.915A14.915,14.915,0,1,1,17.915,3,14.915,14.915,0,0,1,32.831,17.915Z" transform="translate(1175.084 317.085)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
        <path id="Icon_feather-square" data-name="Icon feather-square" d="M7.713,4.5H30.2a3.213,3.213,0,0,1,3.213,3.213V30.2A3.213,3.213,0,0,1,30.2,33.414H7.713A3.213,3.213,0,0,1,4.5,30.2V7.713A3.213,3.213,0,0,1,7.713,4.5Z" transform="translate(1215.043 355.543)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
        <path id="Icon_feather-play" data-name="Icon feather-play" d="M7.5,4.5l26.444,17L7.5,38.5Z" transform="translate(1172.278 353)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
        <g id="x" transform="translate(1214.872 315.872)">
          <line id="Line_1" data-name="Line 1" x1="26" y2="26" transform="translate(6.128 6.128)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
          <line id="Line_2" data-name="Line 2" x2="26" y2="26" transform="translate(6.128 6.128)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
        </g>
      </g>
    </svg>
  )
}