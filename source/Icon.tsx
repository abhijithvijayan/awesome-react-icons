/* eslint-disable react/jsx-props-no-spreading, @typescript-eslint/no-explicit-any */
import React from 'react';

import VerticalDotsIcon from './icons/VerticalDots';
import ChevronDownIcon from './icons/ChevronDown';
import SmartPhoneIcon from './icons/SmartPhone';
import ArrowLeftIcon from './icons/ArrowLeft';
import BriefcaseIcon from './icons/Briefcase';
import ChevronUpIcon from './icons/ChevronUp';
import ActivityIcon from './icons/Activity';
import CalendarIcon from './icons/Calendar';
import BurgerIcon from './icons/Burger';
import CoffeeIcon from './icons/Coffee';
import RadioIcon from './icons/Radio';
import PhoneIcon from './icons/Phone';
import UserIcon from './icons/User';
import StarIcon from './icons/Star';

import {IconProps} from './types';

export const icons = {
  activity: ActivityIcon,
  'arrow-left': ArrowLeftIcon,
  briefcase: BriefcaseIcon,
  burger: BurgerIcon,
  calendar: CalendarIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-down': ChevronDownIcon,
  coffee: CoffeeIcon,
  phone: PhoneIcon,
  radio: RadioIcon,
  smartphone: SmartPhoneIcon,
  star: StarIcon,
  user: UserIcon,
  'vertical-dots': VerticalDotsIcon,
};

export type Icons = keyof typeof icons;

export interface Props extends IconProps {
  name: Icons;
  title?: string;
  rootDivClassName?: string;
}

const Icon: React.FC<Props> = ({name, rootDivClassName, ...rest}) => {
  return (
    <div className={rootDivClassName || 'icon-wrapper'}>
      {React.createElement(icons[name], {...rest})}
    </div>
  );
};

export default Icon;
