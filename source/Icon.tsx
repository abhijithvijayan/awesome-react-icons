/* eslint-disable react/jsx-props-no-spreading, @typescript-eslint/no-explicit-any */
import * as React from 'react';

import EditPencilSimpleIcon from './icons/EditPencilSimple';
import CornerRightDownIcon from './icons/CornerRightDown';
import CloudLightningIcon from './icons/CloudLightning';
import CornerLeftDownIcon from './icons/CornerLeftDown';
import MessageCircleIcon from './icons/MessageCircle';
import MessageSquareIcon from './icons/MessageSquare';
import CornerRightUpIcon from './icons/CornerRightUp';
import CornerLeftUpIcon from './icons/CornerLeftUp';
import ExternalLinkIcon from './icons/ExternalLink';
import MoreVerticalIcon from './icons/MoreVertical';
import ChevronDownIcon from './icons/ChevronDown';
import CheckCircleIcon from './icons/CheckCircle';
import CheckSquareIcon from './icons/CheckSquare';
import SmartPhoneIcon from './icons/SmartPhone';
import HelpCircleIcon from './icons/HelpCircle';
import ArrowRightIcon from './icons/ArrowRight';
import TrashOtherIcon from './icons/TrashOther';
import ShareOtherIcon from './icons/ShareOther';
import ThumbsDownIcon from './icons/ThumbsDown';
import InstagramIcon from './icons/Instagram';
import ArrowLeftIcon from './icons/ArrowLeft';
import BriefcaseIcon from './icons/Briefcase';
import ChevronUpIcon from './icons/ChevronUp';
import CloudSnowIcon from './icons/CloudSnow';
import ArrowDownIcon from './icons/ArrowDown';
import ThumbsUpIcon from './icons/ThumbsUp';
import ActivityIcon from './icons/Activity';
import CalendarIcon from './icons/Calendar';
import SettingsIcon from './icons/Settings';
import FacebookIcon from './icons/Facebook';
import WhatsAppIcon from './icons/WhatsApp';
import TwitterIcon from './icons/Twitter';
import BellOffIcon from './icons/BellOff';
import ArrowUpIcon from './icons/ArrowUp';
import YouTubeIcon from './icons/YouTube';
import BurgerIcon from './icons/Burger';
import CoffeeIcon from './icons/Coffee';
import CircleIcon from './icons/Circle';
import EyeOffIcon from './icons/EyeOff';
import LogOutIcon from './icons/LogOut';
import MapPinIcon from './icons/MapPin';
import SearchIcon from './icons/Search';
import TrashIcon from './icons/Trash';
import UsersIcon from './icons/Users';
import PowerIcon from './icons/Power';
import WatchIcon from './icons/Watch';
import RadioIcon from './icons/Radio';
import PhoneIcon from './icons/Phone';
import MinusIcon from './icons/Minus';
import HeartIcon from './icons/Heart';
import LogInIcon from './icons/LogIn';
import CheckIcon from './icons/Check';
import InboxIcon from './icons/Inbox';
import LockIcon from './icons/Lock';
import UserIcon from './icons/User';
import PlusIcon from './icons/Plus';
import StarIcon from './icons/Star';
import BookIcon from './icons/Book';
import BellIcon from './icons/Bell';
import MailIcon from './icons/Mail';
import SendIcon from './icons/Send';
import TagIcon from './icons/Tag';
import SunIcon from './icons/Sun';
import EyeIcon from './icons/Eye';
import XIcon from './icons/X';

import {IconProps} from './types';

export const icons = {
  activity: ActivityIcon,
  'arrow-down': ArrowDownIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-up': ArrowUpIcon,
  bell: BellIcon,
  'bell-off': BellOffIcon,
  book: BookIcon,
  briefcase: BriefcaseIcon,
  burger: BurgerIcon,
  calendar: CalendarIcon,
  check: CheckIcon,
  'check-circle': CheckCircleIcon,
  'check-square': CheckSquareIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-up': ChevronUpIcon,
  circle: CircleIcon,
  'cloud-lightning': CloudLightningIcon,
  'cloud-snow': CloudSnowIcon,
  coffee: CoffeeIcon,
  'corner-left-down': CornerLeftDownIcon,
  'corner-left-up': CornerLeftUpIcon,
  'corner-right-down': CornerRightDownIcon,
  'corner-right-up': CornerRightUpIcon,
  'edit-pencil-simple': EditPencilSimpleIcon,
  'external-link': ExternalLinkIcon,
  eye: EyeIcon,
  'eye-off': EyeOffIcon,
  facebook: FacebookIcon,
  heart: HeartIcon,
  'help-circle': HelpCircleIcon,
  inbox: InboxIcon,
  instagram: InstagramIcon,
  lock: LockIcon,
  'log-in': LogInIcon,
  'log-out': LogOutIcon,
  mail: MailIcon,
  'map-pin': MapPinIcon,
  'message-circle': MessageCircleIcon,
  'message-square': MessageSquareIcon,
  minus: MinusIcon,
  'more-vertical': MoreVerticalIcon,
  phone: PhoneIcon,
  plus: PlusIcon,
  power: PowerIcon,
  radio: RadioIcon,
  search: SearchIcon,
  send: SendIcon,
  settings: SettingsIcon,
  'share-other': ShareOtherIcon,
  smartphone: SmartPhoneIcon,
  star: StarIcon,
  sun: SunIcon,
  tag: TagIcon,
  trash: TrashIcon,
  'thumbs-up': ThumbsUpIcon,
  'thumbs-down': ThumbsDownIcon,
  'trash-other': TrashOtherIcon,
  twitter: TwitterIcon,
  user: UserIcon,
  users: UsersIcon,
  watch: WatchIcon,
  whatsapp: WhatsAppIcon,
  x: XIcon,
  youtube: YouTubeIcon,
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
