/* eslint-disable react/jsx-props-no-spreading, @typescript-eslint/no-explicit-any */
import React from 'react';

import VerticalDotsIcon from './icons/VerticalDots';
import SmartPhoneIcon from './icons/SmartPhone';
import ArrowLeftIcon from './icons/ArrowLeft';
import BriefcaseIcon from './icons/Briefcase';
import ActivityIcon from './icons/Activity';
import CalendarIcon from './icons/Calendar';
import BurgerIcon from './icons/Burger';
import CoffeeIcon from './icons/Coffee';
import RadioIcon from './icons/Radio';
import PhoneIcon from './icons/Phone';
import UserIcon from './icons/User';
import StarIcon from './icons/Star';

const icons = {
  activity: ActivityIcon,
  'arrow-left': ArrowLeftIcon,
  briefcase: BriefcaseIcon,
  burger: BurgerIcon,
  calendar: CalendarIcon,
  coffee: CoffeeIcon,
  phone: PhoneIcon,
  radio: RadioIcon,
  smartphone: SmartPhoneIcon,
  star: StarIcon,
  user: UserIcon,
  'vertical-dots': VerticalDotsIcon,
};

export type Icons = keyof typeof icons;

type Props = {
  name: Icons;
  title?: string;
  fill?: string;
  stroke?: string;
  height?: string | number;
  width?: string | number;
  hoverFill?: string;
  hoverStroke?: string;
  strokeWidth?: string | number;
  className?: string;
  rootDivClassName?: string;
  style?: any;
  onClick?: (e?: any) => void;
};

const Icon: React.FC<Props> = ({name, rootDivClassName, ...rest}) => {
  return (
    <div className={rootDivClassName || 'icon-wrapper'}>
      {React.createElement(icons[name], {...rest})}
    </div>
  );
};

export default Icon;
