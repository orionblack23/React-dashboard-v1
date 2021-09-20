import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Select = () => {
  return (
    <CForm className="row g-3">
      <CCol md={6}>
        <CFormLabel htmlFor="inputCustomerName2">Customer Name</CFormLabel>
        <CFormInput placeholder="Name" id="inputCustomerName2" />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputCustomerAddress1">Customer Address</CFormLabel>
        <CFormInput id="inputCustomerAddress1" />
      </CCol>
      <CCol xs={1}>
        <CFormLabel htmlFor="inputID5">ID</CFormLabel>
        <CFormInput id="inputID5" />
      </CCol>
      <CCol xs={2}>
        <CFormLabel htmlFor="inputProductName4">Product Name</CFormLabel>
        <CFormInput placeholder="Type product name" id="inputProductName4" />
      </CCol>
      <CCol xs={2}>
        <CFormLabel htmlFor="inputSalePrice5">Sale Price</CFormLabel>
        <CFormInput type="number" id="inputSalePrice5" />
      </CCol>
      <CCol xs={1}>
        <CFormLabel htmlFor="inputQuantity2">Quantity</CFormLabel>
        <CFormInput type="number" id="inputQuantity2" />
      </CCol>
      <CCol xs={2}>
        <CFormLabel htmlFor="inputUnit">Unit</CFormLabel>
        <CFormInput type="number" placeholder="pack" id="inputUnit" />
      </CCol>
      <CCol xs={1}>
        <CFormLabel htmlFor="inputPerPack5">Per Pack</CFormLabel>
        <CFormInput type="number" id="inputPerPack5" />
      </CCol>
      <CCol xs={2}>
        <CFormLabel htmlFor="inputItemTotal">Item Total</CFormLabel>
        <CFormInput type="number" id="inputItemTotal" />
      </CCol>
      <CCol xs={1}>
        <CFormLabel htmlFor="inputAction2">Action</CFormLabel>
        <CFormInput id="inputAction2" />
      </CCol>
      <CCol xs={12}>
        <CButton>New Row</CButton>
      </CCol>
      <CCol xs={12}>
        <CFormLabel htmlFor="inputOrderTotal">Order Total</CFormLabel>
        <CFormInput id="inputContact1" placeholder="0" type="number" />
      </CCol>
      <CCol xs={12}>
        <CFormLabel htmlFor="inputOrderDiscount">Order Discount</CFormLabel>
        <CFormInput id="inputOrderDiscount" placeholder="0" type="number" />
      </CCol>
      <CCol xs={12}>
        <CFormLabel htmlFor="inputSubTotal">Sub Total</CFormLabel>
        <CFormInput id="inputSubTotal" placeholder="0" type="number" />
      </CCol>
      <CCol xs={12}>
        <CFormLabel htmlFor="inputPrevBalance">Prev Balance</CFormLabel>
        <CFormInput id="inputPrevBalance" placeholder="0" type="number" />
      </CCol>
      <CCol xs={12}>
        <CFormLabel htmlFor="inputTotal">Total</CFormLabel>
        <CFormInput id="inputTotal" placeholder="0" type="number" />
      </CCol>
      <CCol xs={12}>
        <CFormLabel htmlFor="inputPaid">Paid</CFormLabel>
        <CFormInput id="inputPaid" placeholder="0" type="number" />
      </CCol>
      <CCol xs={12}>
        <CButton type="submit">Submit</CButton>
      </CCol>
    </CForm>
  )
}

export default Select
