import {
  BadgeCheck, Bell, Bookmark, BookOpen, Building2, Camera,
  CalendarDays, Check, CircleHelp, Download, Eye, FileText,
  GraduationCap, Heart, Home, Hourglass, ImageIcon, Landmark,
  LayoutDashboard, Lock, Link2, Mail, Megaphone, MessageCircle,
  Package, Palette, Pencil, Phone, Plus, School, Search, Settings,
  ShoppingBag, ShoppingCart, Star, Target, ThumbsUp, Ticket, Trophy,
  User, Users, Wallet, Wrench, X, Laptop, Headphones, BrainCircuit, Shirt, Book, CreditCard, Rocket, MapPin, Smartphone, Armchair, Monitor, Minus, Trash2, Grid2X2, List, SlidersHorizontal, Printer, UtensilsCrossed, Zap, ChevronDown, ChevronRight, Tag, Store, Filter, Layers, Library, BarChart3, CheckCircle, Truck,
} from "lucide-react";

export const AppIcons = {
  home: Home,
  dashboard: LayoutDashboard,
  marketplace: ShoppingCart,
  products: Package,
  academicHub: BookOpen,
  graduationCap: GraduationCap,
  community: MessageCircle,
  groups: Users,
  calendar: CalendarDays,
  question: CircleHelp,
  heart: Heart,
  bookmark: Bookmark,
  thumbsUp: ThumbsUp,
  trophy: Trophy,
  lock: Lock,
  file: FileText,
  image: ImageIcon,
  download: Download,
  palette: Palette,
  target: Target,
  ticket: Ticket,
  pending: Hourglass,
  announcement: Megaphone,
  messages: Mail,
  phone: Phone,
  orders: ShoppingBag,
  wallet: Wallet,
  profile: User,
  settings: Settings,
  notifications: Bell,
  search: Search,
  campusPlug: Building2,
  verified: BadgeCheck,
  campusPrimary: Landmark,
  school: School,
  edit: Pencil,
  share: Link2,
  preview: Eye,
  camera: Camera,
  check: Check,
  close: X,
  add: Plus,
  star: Star,
  service: Wrench,
  book: Book,
  creditCard: CreditCard,
  laptop: Laptop,
  headphones: Headphones,
  brain: BrainCircuit,
  shirt: Shirt,
  shoppingBag: ShoppingBag,
  rocket: Rocket,
  mapPin: MapPin,
  smartphone: Smartphone,
  armchair: Armchair,
  monitor: Monitor,
  minus: Minus,
  trash: Trash2,
  grid: Grid2X2,
  list: List,
  sliders: SlidersHorizontal,
  printer: Printer,
  utensils: UtensilsCrossed,
  zap: Zap,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  tag: Tag,
  store: Store,
  filter: Filter,
  layers: Layers,
  library: Library,
  analytics: BarChart3,
  checkCircle: CheckCircle,
  truck: Truck,
};

export function AppIcon({
  name,
  className = "size-4",
  ...props
}) {
  const IconComponent = AppIcons[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      className={className}
      {...props}
    />
  );
}