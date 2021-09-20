import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/components/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/components/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/components/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/components/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/components/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/components/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/components/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/components/base/paginations/Paginations'))
const Popovers = React.lazy(() => import('./views/components/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/components/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/components/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/components/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/components/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/components/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() =>
  import('./views/components/buttons/button-groups/ButtonGroups'),
)
const Dropdowns = React.lazy(() => import('./views/components/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/components/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() =>
  import('./views/components/forms/floating-labels/FloatingLabels'),
)
const FormControl = React.lazy(() => import('./views/components/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/components/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/components/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/components/forms/range/Range'))
const Select = React.lazy(() => import('./views/components/forms/select/Select'))
const Validation = React.lazy(() => import('./views/components/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/components/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/components/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/components/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/components/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/components/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/components/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/components/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/components/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/components/widgets/Widgets'))

//custom made
const AllSales = React.lazy(() => import('./views/sales/all sales/AllSales'))
const AddNewSale = React.lazy(() => import('./views/sales/add new sale/AddNewSale'))
const AllPurchases = React.lazy(() => import('./views/purchases/all purchases/allPurchases'))
const AddNewPurchase = React.lazy(() =>
  import('./views/purchases/add a new purchase/addNewPurchase'),
)
const AllProducts = React.lazy(() => import('./views/products/all products/AllProducts'))
const AddNewProduct = React.lazy(() => import('./views/products/add a new product/AddNewProduct'))
const AllCategories = React.lazy(() =>
  import('./views/products categories/all categories/AllCategories'),
)
const AddCategory = React.lazy(() =>
  import('./views/products categories/add a category/AddCategory'),
)
const AllCustomers = React.lazy(() => import('./views/customers/all customers/AllCustomers'))
const AddNewCustomer = React.lazy(() =>
  import('./views/customers/add a new customer/AddNewCustomer'),
)
const AllSuppliers = React.lazy(() => import('./views/suppliers/all suppliers/AllSuppliers'))
const AddNewSupplier = React.lazy(() =>
  import('./views/suppliers/add a new supplier/AddNewSupplier'),
)
const AllBills = React.lazy(() => import('./views/external bills/all bills/AllBills'))
const AddNewBill = React.lazy(() => import('./views/external bills/add a bill/AddNewBill'))
const Settings = React.lazy(() => import('./views/settings/Settings'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/forms/select', name: 'Select', component: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/forms/range', name: 'Range', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  //custom made routes
  //sales
  { path: '/sales', name: 'Sales', component: AddNewSale, exact: true },
  { path: '/sales/add-new-sale', name: 'Add New Sale', component: AddNewSale },
  { path: '/sales/all-sales', name: 'All Sales', component: AllSales },
  //purchases
  { path: '/purchases', name: 'Purchases', component: AddNewPurchase, exact: true },
  { path: '/purchases/add-new-purchase', name: 'Add New Purchase', component: AddNewPurchase },
  { path: '/purchases/all-purchases', name: 'All Sales', component: AllPurchases },
  //products
  { path: '/products', name: 'Products', component: AddNewProduct, exact: true },
  { path: '/products/add-new-product', name: 'Add New Product', component: AddNewProduct },
  { path: '/products/all-products', name: 'All Products', component: AllProducts },
  //products categories
  {
    path: '/products-categories',
    name: 'Products Categories',
    component: AddCategory,
    exact: true,
  },
  {
    path: '/products-categories/add-category',
    name: 'Add New Category',
    component: AddCategory,
  },
  { path: '/products-categories/all-categories', name: 'All Category', component: AllCategories },
  //customers
  { path: '/customers', name: 'Customers', component: AddNewCustomer, exact: true },
  { path: '/customers/add-new-customer', name: 'Add New Customer', component: AddNewCustomer },
  { path: '/customers/all-customers', name: 'All Customers', component: AllCustomers },
  //suppliers
  { path: '/suppliers', name: 'Suppliers', component: AddNewSupplier, exact: true },
  { path: '/suppliers/add-new-supplier', name: 'Add New Supplier', component: AddNewSupplier },
  { path: '/suppliers/all-suppliers', name: 'All suppliers', component: AllSuppliers },
  //external bills
  { path: '/external-bills', name: 'External bills', component: AddNewBill, exact: true },
  { path: '/external-bills/add-new-bill', name: 'Add New Bill', component: AddNewBill },
  { path: '/external-bills/all-bills', name: 'All Bills', component: AllBills },
  //settings
  { path: '/settings', name: 'Settings', component: Settings },
]

export default routes
