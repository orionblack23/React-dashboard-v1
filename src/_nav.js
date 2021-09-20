import React from 'react'
import CIcon from '@coreui/icons-react'

import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilSettings,
  cilCart,
  cilTruck,
  cilBox,
  cilBasket,
  cilFolderOpen,
  //cilmoneybillalt2,
  cilGroup,
  //cilnewreleases,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Sales',
    to: '/sales',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add a new sale',
        to: '/sales/add-new-sale',
      },
      {
        component: CNavItem,
        name: 'All Sales',
        to: '/sales/all-sales',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Purchases',
    to: '/purchases',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add a new purchase',
        to: '/purchases/add-new-purchase',
      },
      {
        component: CNavItem,
        name: 'All purchases',
        to: '/purchases/all-purchases',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Products',
    to: '/products',
    icon: <CIcon icon={cilBasket} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add a new product',
        to: '/products/add-new-product',
      },
      {
        component: CNavItem,
        name: 'All product',
        to: '/products/all-products',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Products Categories',
    to: '/products-categories',
    icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add a category',
        to: '/products-categories/add-category',
      },
      {
        component: CNavItem,
        name: 'All categories',
        to: '/products-categories/all-categories',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Customers',
    to: '/customers',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add a new customer',
        to: '/customers/add-new-customer',
      },
      {
        component: CNavItem,
        name: 'All customers',
        to: '/customers/all-customers',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Suppliers',
    to: '/suppliers',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add a new supplier',
        to: '/suppliers/add-new-supplier',
      },
      {
        component: CNavItem,
        name: 'All suppliers',
        to: '/suppliers/all-suppliers',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'External bills',
    to: '/external-bills',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add a new bill',
        to: '/external-bills/add-new-bill',
      },
      {
        component: CNavItem,
        name: 'All bills',
        to: '/external-bills/all-bills',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
]

export default _nav
