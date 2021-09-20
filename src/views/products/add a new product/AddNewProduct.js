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
        <CFormLabel htmlFor="inputSupplierName">Supplier Name</CFormLabel>
        <CFormInput placeholder="Supplier Name" id="inputSupplierName" />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputProductName">Product Name</CFormLabel>
        <CFormInput placeholder="Product Name" id="inputProductName" />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputPurchasePrice">Purchase Price</CFormLabel>
        <CFormInput placeholder="1 000 000" id="inputPurchasePrice" type="number" />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputSalePrice">Sale Price</CFormLabel>
        <CFormInput placeholder="1 000 000" id="inputSalePrice" type="number" />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputStock">Stock</CFormLabel>
        <CFormInput placeholder="0.00" id="inputStock" type="number" />
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="inputPerPack">Per Pack (at least 1)</CFormLabel>
        <CFormInput placeholder="1" id="inputPerPack" type="number" />
      </CCol>
      <CCol xs={12}>
        <CButton type="submit">Submit</CButton>
      </CCol>
    </CForm>
  )
}

export default Select
