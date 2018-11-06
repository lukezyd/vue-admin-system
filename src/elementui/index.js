import Vue from 'vue';
import '../assets/sass/element-variable.scss'

import {
  Loading,
  MessageBox,
  Message,
  Alert,
  Button,
  Select,
  Option,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Popover,
  Table,
  TableColumn,
  DatePicker,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  Checkbox,
  Dialog,
  Step,
  Steps,
  Pagination,
  RadioGroup,
  CheckboxGroup,
  Switch,
  TimePicker,
  Tag,
  Col,
  Carousel,
  CarouselItem,
  Scrollbar, 
  // Upload,
  // Autocomplete,
  // Dropdown,
  // DropdownMenu,
  // DropdownItem,
  // RadioButton,
  // CheckboxButton,
  // OptionGroup,
  // ButtonGroup,
  // TimeSelect,
  // Tooltip,
  // Tabs,
  // TabPane,
  // Tree,
  // Slider,
  // Icon,
  Row,
  // Progress,
  // Badge,
  // Card,
  // Rate,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  // Container,
  // Header,
  // Aside,
  // Main,
  // Footer,
  // Notification
} from 'element-ui';
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Dialog);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(Button);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Popover);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Pagination);
Vue.use(RadioGroup);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(TimePicker);
Vue.use(Tag);
Vue.use(Col);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Loading.directive);
Vue.use(Scrollbar);
// Vue.use(Upload);
// Vue.use(InputNumber);
// Vue.use(Alert);
// Vue.use(Autocomplete);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(RadioButton);
// Vue.use(CheckboxButton);
// Vue.use(OptionGroup);
// Vue.use(ButtonGroup);
// Vue.use(TimeSelect);
// Vue.use(Tooltip);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Tree);
// Vue.use(Slider);
// Vue.use(Icon);
Vue.use(Row);
// Vue.use(Progress);
// Vue.use(Badge);
// Vue.use(Card);
// Vue.use(Rate);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Cascader);
// Vue.use(ColorPicker);
// Vue.use(Transfer);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Footer);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;