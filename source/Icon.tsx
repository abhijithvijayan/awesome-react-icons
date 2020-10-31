/* eslint-disable react/jsx-props-no-spreading, @typescript-eslint/no-explicit-any */
import React from 'react';

import CloudLightningIcon from './icons/CloudLightning';
import ExternalLinkIcon from './icons/ExternalLink';
import MoreVerticalIcon from './icons/MoreVertical';
import ChevronDownIcon from './icons/ChevronDown';
import CheckCircleIcon from './icons/CheckCircle';
import SmartPhoneIcon from './icons/SmartPhone';
import ArrowRightIcon from './icons/ArrowRight';
import ArrowLeftIcon from './icons/ArrowLeft';
import BriefcaseIcon from './icons/Briefcase';
import ChevronUpIcon from './icons/ChevronUp';
import CloudSnowIcon from './icons/CloudSnow';
import ArrowDownIcon from './icons/ArrowDown';
import ActivityIcon from './icons/Activity';
import CalendarIcon from './icons/Calendar';
import SettingsIcon from './icons/Settings';
import ArrowUpIcon from './icons/ArrowUp';
import BurgerIcon from './icons/Burger';
import CoffeeIcon from './icons/Coffee';
import CircleIcon from './icons/Circle';
import EyeOffIcon from './icons/EyeOff';
import LogOutIcon from './icons/LogOut';
import WatchIcon from './icons/Watch';
import RadioIcon from './icons/Radio';
import PhoneIcon from './icons/Phone';
import MinusIcon from './icons/Minus';
import LogInIcon from './icons/LogIn';
import UserIcon from './icons/User';
import PlusIcon from './icons/Plus';
import StarIcon from './icons/Star';
import SunIcon from './icons/Sun';

import {IconProps} from './types';

export const icons = {
  activity: ActivityIcon,
  'arrow-down': ArrowDownIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-up': ArrowUpIcon,
  briefcase: BriefcaseIcon,
  burger: BurgerIcon,
  calendar: CalendarIcon,
  'check-circle': CheckCircleIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-up': ChevronUpIcon,
  circle: CircleIcon,
  'cloud-lightning': CloudLightningIcon,
  'cloud-snow': CloudSnowIcon,
  coffee: CoffeeIcon,
  'external-link': ExternalLinkIcon,
  'eye-off': EyeOffIcon,
  'log-in': LogInIcon,
  'log-out': LogOutIcon,
  minus: MinusIcon,
  phone: PhoneIcon,
  plus: PlusIcon,
  radio: RadioIcon,
  settings: SettingsIcon,
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
