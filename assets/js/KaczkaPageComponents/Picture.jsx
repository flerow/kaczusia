import React from 'react';

const Picture = ({isKaczka}) => isKaczka ? (
  <img src="http://patrz.pl/static/uploaded/images/73/73003/1573e34b8e068db77af48c0c578e8c43_900.jpg"/>
) : (
  <img src="https://img.hopaj.pl/images/5/d/5dc910434d236421f4ed910e3bf7d248.jpg" />
);

export default Picture;
