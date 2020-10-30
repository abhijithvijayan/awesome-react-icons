/* eslint-disable react/jsx-props-no-spreading, @typescript-eslint/no-explicit-any */
import React from 'react';

import CloudLightningIcon from './icons/CloudLightning';
import MoreVerticalIcon from './icons/MoreVertical';
import ChevronDownIcon from './icons/ChevronDown';
import CheckCircleIcon from './icons/CheckCircle';
import SmartPhoneIcon from './icons/SmartPhone';
import ArrowLeftIcon from './icons/ArrowLeft';
import BriefcaseIcon from './icons/Briefcase';
import ChevronUpIcon from './icons/ChevronUp';
import CloudSnowIcon from './icons/CloudSnow';
import ActivityIcon from './icons/Activity';
import CalendarIcon from './icons/Calendar';
import BurgerIcon from './icons/Burger';
import CoffeeIcon from './icons/Coffee';
import CircleIcon from './icons/Circle';
import EyeOffIcon from './icons/EyeOff';
import WatchIcon from './icons/Watch';
import RadioIcon from './icons/Radio';
import PhoneIcon from './icons/Phone';
import MinusIcon from './icons/Minus';
import UserIcon from './icons/User';
import PlusIcon from './icons/Plus';
import StarIcon from './icons/Star';
import SunIcon from './icons/Sun';

import {IconProps} from './types';

export const icons = {
  activity: ActivityIcon,
  'arrow-left': ArrowLeftIcon,
  briefcase: BriefcaseIcon,
  burger: BurgerIcon,
  calendar: CalendarIcon,
  'check-circle': CheckCircleIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-down': ChevronDownIcon,
  circle: CircleIcon,
  'cloud-lightning': CloudLightningIcon,
  'cloud-snow': CloudSnowIcon,
  coffee: CoffeeIcon,
  'eye-off': EyeOffIcon,
  minus: MinusIcon,
  phone: PhoneIcon,
  plus: PlusIcon,
  radio: RadioIcon,
  smartphone: SmartPhoneIcon,
  star: StarIcon,
  sun: SunIcon,
  user: UserIcon,
  'more-vertical': MoreVerticalIcon,
  watch: WatchIcon,
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
